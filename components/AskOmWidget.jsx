import { useState, useRef, useEffect } from "react";
import { FaTimes, FaPaperPlane, FaRobot, FaSpinner } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const SUGGESTED_QUESTIONS = [
  "What was Om's role at ISRO?",
  "Show me Om's PyTorch & CV experience",
  "Is Om available for freelance work?",
  "What is the Metashot project?",
];

const GREETING = {
  id: "greeting",
  role: "assistant",
  text: "Hi! I'm Om's AI assistant 👋 Ask me anything about his work, skills, projects, or availability.",
};

export default function AskOmWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Show the attention bubble after 4 seconds
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setShowBubble(false);
    }
  }, [isOpen]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    const userMsg = { id: Date.now(), role: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", text: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Something went wrong. Please try again or reach Om at omjavia18@gmail.com.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {isOpen && (
        <div className="relative flex h-[520px] w-[360px] flex-col overflow-hidden rounded-3xl border border-neutral-200/80 bg-white shadow-2xl shadow-black/20 dark:border-neutral-800/80 dark:bg-neutral-950 sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-neutral-100 bg-neutral-950 px-5 py-4 dark:border-neutral-800">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10">
              <HiSparkles className="text-lg text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white leading-tight">Ask Om AI</p>
              <p className="text-[11px] text-neutral-400 truncate">
                Know everything about Om
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-1.5 text-neutral-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close chat"
            >
              <FaTimes className="text-xs" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
              >
                {msg.role === "assistant" && (
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 dark:bg-neutral-800">
                    <FaRobot className="text-[10px] text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${msg.role === "user"
                      ? "rounded-tr-sm bg-neutral-950 text-white dark:bg-neutral-800"
                      : "rounded-tl-sm bg-neutral-100 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100"
                    }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 dark:bg-neutral-800">
                  <FaRobot className="text-[10px] text-white" />
                </div>
                <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-neutral-100 px-4 py-3 dark:bg-neutral-900">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:0ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:150ms]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:300ms]" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested questions — only show on fresh chat */}
          {messages.length === 1 && (
            <div className="border-t border-neutral-100 bg-neutral-50/80 px-4 py-3 dark:border-neutral-800/50 dark:bg-neutral-900/50">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
                Suggested questions
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="border-t border-neutral-100 bg-white px-4 py-3 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="flex items-center gap-2.5 rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-2.5 dark:border-neutral-700 dark:bg-neutral-900 focus-within:border-neutral-400 dark:focus-within:border-neutral-500 transition-colors">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Om's experience..."
                className="flex-1 min-w-0 bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
              />
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-neutral-950 text-white transition-all hover:bg-neutral-700 disabled:opacity-30 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                aria-label="Send message"
              >
                {isLoading ? (
                  <FaSpinner className="animate-spin text-[10px]" />
                ) : (
                  <FaPaperPlane className="text-[10px]" />
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Attention bubble */}
      {showBubble && !isOpen && (
        <div className="animate-in slide-in-from-bottom-2 fade-in duration-300">
          <div className="rounded-2xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-neutral-700 shadow-lg dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-200">
            Ask me anything about Om 👋
          </div>
        </div>
      )}

      {/* FAB toggle button */}
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close AI assistant" : "Open AI assistant"}
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-white shadow-xl shadow-black/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-white dark:text-neutral-950"
      >
        {isOpen ? (
          <FaTimes className="text-base transition-transform group-hover:rotate-90 duration-200" />
        ) : (
          <HiSparkles className="text-xl transition-transform group-hover:scale-110 duration-200" />
        )}
      </button>
    </div>
  );
}
