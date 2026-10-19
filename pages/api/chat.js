// pages/api/chat.js
// Ask Om AI - Powered by AgentRouter
//
// .env.local:
//
// AGENTROUTER_API_KEY="your-agentrouter-api-key"
// AGENTROUTER_BASE_URL="https://co.agentrouter.org/v1"
// AGENTROUTER_MODEL="gpt-5.5"

import { getPostHogClient } from '../../lib/posthog-server';

const OM_KNOWLEDGE_BASE = `
You are "Om's AI Assistant" — a knowledgeable, concise, and professional portfolio chatbot representing Om Javia, an AI Product Engineer.

You have deep knowledge of Om's background, projects, skills, experience, projects, and availability.

IMPORTANT RULES:
- Answer accurately using only the information provided below.
- Keep every response under 150 words.
- Be concise, friendly, professional, and natural.
- Do not invent experience, projects, technologies, employers, achievements, or personal information.
- If the answer is not available in the knowledge base, say:
  "That's a great question — you can reach Om directly at omjavia18@gmail.com."
- Do not claim to be Om.
- You are Om's AI assistant.
- If a user asks about hiring, freelance work, consulting, or collaboration, use the availability information below.
- If a user asks for contact information, provide Om's email or relevant links from the knowledge base.

=== ABOUT OM JAVIA ===

Name: Om Javia
Role: Founding Manager, MegaShot (AI Product & Go-to-Market) | AI Product Engineer
Location: Bangalore, India
Email: omjavia18@gmail.com

LinkedIn:
https://www.linkedin.com/in/omjavia/

GitHub:
https://github.com/omjavia/

Education:
B.Tech Computer Science, CGPA 9.0/10


=== WORK EXPERIENCE ===

1. Founding Manager @ MegaShot (Metashot) (November 2025 – Present)
- Taking connected AI products from idea to launch across physical hardware, connected software, gameplay, and GTM.
- MegaShot Pickl+: motion-sensing smart pickleball paddle with companion gaming application.
- Crowdfunding launch: campaign reached 500% of its goal within 24 hours (company-reported).
- Featured on Pickleball.com: "World’s first smart pickleball game launched by MetaShot".

2. AI Engineer @ Metashot (July 2025 – October 2025)
- Optimized real-time cricket shot detection for <80ms inference latency using PyTorch and OpenCV.
- Integrated video classification streams into Unity engine workflows.
- Built session analytics pipelines using FastAPI and Redis.

3. Associate AI Engineer @ Apoliums Infotech (May 2024 – June 2025)
- Built feature engineering and preprocessing pipelines in Python and Pandas.
- Deployed Dockerized FastAPI prediction microservices and standardized CI/CD workflows.

4. Research & Development Intern @ ISRO Space Applications Centre (February 2024 – May 2024)
- Curated and annotated 800+ HiRISE satellite images for terrain understanding across 5 categories.
- Built PyTorch CNN segmentation models and integrated A*/Dijkstra path planners.
- Produced an 87.4% navigation-efficiency score in simulated rover traversal.


=== CORE SKILLS ===

Languages:
- Python
- JavaScript

AI / ML:
- Computer Vision
- NLP
- LLMs
- RAG
- Prompt Engineering
- Deep Learning

Frameworks:
- PyTorch
- LangChain
- OpenCV
- YOLO
- Detectron2
- Hugging Face

Data:
- NumPy
- Pandas
- MySQL
- MongoDB
- ChromaDB
- Redis

DevOps / Cloud:
- Docker
- AWS
- GitHub Actions
- Vercel
- Git

Frontend:
- Next.js
- React
- Tailwind CSS


=== FLAGSHIP PROJECTS ===

1. NirmanBook

Category:
PropTech

Description:
- Production website for construction and real-estate project discovery.
- Built with Next.js.
- Polished UX.
- Production-ready service workflows.

Website:
https://www.nirmanbook.com/


2. Mars Rover Path Planning

Category:
AI Research @ ISRO

Description:
- Computer vision and path-planning research.
- Terrain understanding using satellite imagery.
- Used PyTorch CNN models for terrain segmentation.
- Used A* and Dijkstra for path planning.
- Improved navigation efficiency by 87.4%.

Demo:
https://colab.research.google.com/drive/1q_rFDovpVtDDQyHsSS3_tieyP8snlNtG?usp=sharing


3. Metashot

Category:
Sports AI

Description:
- Real-time cricket shot classification using computer vision.
- Low-latency inference pipeline.
- Player-facing feedback.
- Validated with real-time swing capture and edge-case shot variations.


4. PDF Searcher

Category:
AI Utility

Description:
- RAG-powered document search tool.
- Built using LangChain and OpenAI embeddings.
- Allows users to find answers inside PDF documents.

GitHub:
https://github.com/OmJavia/PDF_Searcher


5. AI Blog Generator

Category:
Generative AI

Description:
- Python automation for structured blog content generation.
- Uses OpenAI GPT.

GitHub:
https://github.com/OmJavia/Generate_Blogs


6. Aerpace

Category:
Frontend / Product

Description:
- Future-mobility product website.
- Performance-conscious design.

Website:
https://www.aerpace.com/


7. Movieflix

Category:
Frontend

Description:
- React + TMDB API streaming-inspired web interface.

Website:
https://movieflix-om.vercel.app/


=== HIRING & AVAILABILITY ===

Om is open to:

- AI Product Engineering roles
- Computer Vision projects
- RAG / LLM product work
- Full-stack AI applications

Available for:

- Full-time roles
- Focused collaborations
- Consulting

Schedule a meeting:
https://cal.com/Om-Javia

Email:
omjavia18@gmail.com

LinkedIn:
https://www.linkedin.com/in/omjavia/

GitHub:
https://github.com/omjavia
`;


export default async function handler(req, res) {

  // --------------------------------------------------
  // METHOD CHECK
  // --------------------------------------------------

  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }


  // --------------------------------------------------
  // GET USER MESSAGE
  // --------------------------------------------------

  const { message } = req.body || {};


  // --------------------------------------------------
  // VALIDATE MESSAGE
  // --------------------------------------------------

  if (
    !message ||
    typeof message !== "string" ||
    message.trim().length === 0
  ) {
    return res.status(400).json({
      error: "Message is required",
    });
  }


  // --------------------------------------------------
  // AGENTROUTER CONFIGURATION
  // --------------------------------------------------

  const apiKey = process.env.AGENTROUTER_API_KEY;

  const baseUrl =
    process.env.AGENTROUTER_BASE_URL ||
    "https://co.agentrouter.org/v1";

  const model =
    process.env.AGENTROUTER_MODEL ||
    "gpt-5.5";


  // --------------------------------------------------
  // CHECK API KEY
  // --------------------------------------------------

  if (!apiKey) {
    console.error(
      "AGENTROUTER_API_KEY is missing from environment variables."
    );

    return res.status(500).json({
      reply:
        "The AI assistant is not configured yet. Please reach Om directly at omjavia18@gmail.com.",
    });
  }


  // --------------------------------------------------
  // CALL AGENTROUTER
  // --------------------------------------------------

  try {

    const agentRouterRes = await fetch(
      `${baseUrl}/chat/completions`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },

        body: JSON.stringify({
          model,

          messages: [
            {
              role: "system",
              content: OM_KNOWLEDGE_BASE,
            },

            {
              role: "user",
              content: message.trim(),
            },
          ],

          max_tokens: 250,
        }),
      }
    );


    // --------------------------------------------------
    // HANDLE AGENTROUTER ERROR
    // --------------------------------------------------

    if (!agentRouterRes.ok) {

      const errText = await agentRouterRes.text();

      console.error("=================================");
      console.error("AGENTROUTER API ERROR");
      console.error("Status:", agentRouterRes.status);
      console.error("Model:", model);
      console.error("Base URL:", baseUrl);
      console.error("Response:", errText);
      console.error("=================================");

      // Invalid API key
      if (agentRouterRes.status === 401) {
        return res.status(500).json({
          reply:
            "The AI assistant could not authenticate with its AI provider. Please reach Om directly at omjavia18@gmail.com.",
        });
      }


      // Rate limit / quota
      if (agentRouterRes.status === 429) {
        return res.status(500).json({
          reply:
            "The AI assistant is temporarily unavailable. Please try again later or reach Om directly at omjavia18@gmail.com.",
        });
      }


      // Other provider errors
      return res.status(500).json({
        reply:
          "Sorry, I'm having trouble connecting right now. Please reach Om directly at omjavia18@gmail.com.",
      });
    }


    // --------------------------------------------------
    // PARSE RESPONSE
    // --------------------------------------------------

    const data = await agentRouterRes.json();


    // AgentRouter uses OpenAI-compatible Chat Completions
    const reply =
      data?.choices?.[0]?.message?.content;


    // --------------------------------------------------
    // EMPTY RESPONSE CHECK
    // --------------------------------------------------

    if (!reply) {

      console.error(
        "AgentRouter returned no usable response:",
        JSON.stringify(data, null, 2)
      );

      return res.status(500).json({
        reply:
          "I couldn't generate a response. Please try again or contact Om directly.",
      });
    }


    // --------------------------------------------------
    // SUCCESS
    // --------------------------------------------------

    // Track successful AI chat query server-side.
    // Correlate with the client session via the PostHog distinct ID header.
    const phClient = getPostHogClient();
    if (phClient) {
      const distinctId = req.headers['x-posthog-distinct-id'] || 'anonymous_visitor';
      phClient.capture({
        distinctId,
        event: 'ai_chat_query_received',
        properties: {
          model_used: model,
          success: true,
        },
      });
      await phClient.flush();
    }

    return res.status(200).json({
      reply: reply.trim(),
    });

  } catch (error) {

    console.error(
      "AgentRouter connection error:",
      error
    );

    return res.status(500).json({
      reply:
        "Something went wrong. Please try again or reach Om at omjavia18@gmail.com.",
    });
  }
}