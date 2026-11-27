import NotePageTemplate from "../../components/site/NotePageTemplate";

export default function Sub80Note() {
  return (
    <NotePageTemplate
      slug="sub-80ms"
      title="What “under 80ms” included and left out"
      description="The Metashot live-stream inference budget, and the benchmark details this site does not publish."
      meta="2026-11-06 · Metashot"
      caseStudyHref="/case-studies/metashot"
      caseStudyLabel="Metashot case study"
    >
      <p>
        During the AI Engineer stretch at Metashot, July to October 2025, I profiled a cricket shot-detection pipeline. The public benchmark is that the optimized PyTorch and OpenCV path processes a live camera stream in under 80ms.
      </p>
      <p>What that description includes:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Live video in, shot classification out, for player feedback.</li>
        <li>YOLO-style detection with PyTorch and OpenCV on that video path.</li>
        <li>A FastAPI service and a Redis cache for session metrics.</li>
        <li>Unity as the place the classification becomes in-session feedback.</li>
      </ul>
      <p>What this site does not publish, because the benchmark write-up is not finished:</p>
      <ul className="list-disc space-y-1 pl-5">
        <li>Camera frame rate and the machine the number was measured on.</li>
        <li>Whether weights ran in FP16, INT8, or full precision.</li>
        <li>How the 80ms splits across capture, inference, post-processing, and the hop to the dashboard or game.</li>
        <li>Any accuracy percentage versus a named baseline model.</li>
      </ul>
      <p>
        Until those pieces exist, “under 80ms” means the live-stream inference budget stated above. It is not a full latency trace, and it is not an accuracy claim.
      </p>
    </NotePageTemplate>
  );
}
