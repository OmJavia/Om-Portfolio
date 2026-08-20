import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  text: "Hi! I'm Om's AI assistant. Ask me anything about his work, skills, projects, or availability.",
};

export default function AskOmWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Show attention bubble after 4 seconds
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
      setTimeout(() => inputRef.current?.focus(), 150);
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

      {/* ---- Chat Panel ---- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="relative flex h-[520px] w-[360px] flex-col overflow-hidden rounded-3xl border border-[#27272a] bg-[#09090b] shadow-2xl shadow-black/50 sm:w-[380px]"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-[#27272a] bg-[#18181b] px-5 py-4">
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 border border-[#f97316]/30">
                <HiSparkles className="text-base text-[#f97316]" />
                {/* Amber pulse ring */}
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-[#f97316]/40"
                  style={{ animation: "ping-ring 2.5s cubic-bezier(0,0,0.2,1) infinite" }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white leading-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                  Ask Om AI
                </p>
                <p className="text-[10px] font-mono text-[#38bdf8] truncate">
                  RAG-powered · Always online
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1.5 text-neutral-500 transition-colors hover:bg-[#27272a] hover:text-white"
                aria-label="Close AI chat assistant"
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
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 border border-[#f97316]/20">
                      <FaRobot className="text-[10px] text-[#f97316]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-tr-sm bg-[#f97316] text-white font-medium"
                        : "rounded-tl-sm bg-[#18181b] border border-[#27272a] font-mono text-[#38bdf8]"
                    }`}
                    style={
                      msg.role === "assistant"
                        ? { fontFamily: '"JetBrains Mono", monospace', fontSize: "12px", lineHeight: "1.6" }
                        : {}
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 border border-[#f97316]/20">
                    <FaRobot className="text-[10px] text-[#f97316]" />
                  </div>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-[#18181b] border border-[#27272a] px-4 py-3">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#f97316] [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#f97316] [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#f97316] [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions — only on fresh chat */}
            {messages.length === 1 && (
              <div className="border-t border-[#27272a] bg-[#18181b]/60 px-4 py-3">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                  Suggested
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-full border border-[#27272a] bg-[#18181b] px-3 py-1 font-mono text-[10px] text-[#38bdf8] transition-all hover:border-[#f97316]/40 hover:bg-[#27272a] hover:text-white"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-[#27272a] bg-[#09090b] px-4 py-3">
              <div className="flex items-center gap-2.5 rounded-2xl border border-[#27272a] bg-[#18181b] px-4 py-2.5 focus-within:border-[#f97316]/50 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Om's experience..."
                  aria-label="Chat input for Om's AI assistant"
                  className="flex-1 min-w-0 bg-transparent font-mono text-sm text-neutral-200 outline-none placeholder:text-neutral-600"
                  style={{ fontFamily: '"JetBrains Mono", monospace' }}
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-white transition-all hover:bg-[#ea6c0a] disabled:opacity-30"
                  aria-label="Send message to Om's AI assistant"
                >
                  {isLoading ? (
                    <FaSpinner className="animate-spin text-[10px]" />
                  ) : (
                    <FaPaperPlane className="text-[10px]" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- Attention Bubble ---- */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="rounded-2xl border border-[#27272a] bg-[#18181b] px-4 py-2.5 font-mono text-xs text-[#38bdf8] shadow-lg">
              Ask me anything about Om 👋
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---- FAB Toggle Button ---- */}
      <motion.button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close Om AI assistant" : "Open Om AI assistant — RAG-powered chat"}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#18181b] border border-[#27272a] text-white shadow-xl shadow-black/40 transition-all duration-300"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
      >
        {/* Amber pulse ring */}
        {!isOpen && (
          <>
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-[#f97316]/50"
              style={{ animation: "ping-ring 2s cubic-bezier(0,0,0.2,1) infinite" }}
            />
            <span
              aria-hidden
              className="absolute inset-0 rounded-full border border-[#f97316]/20"
              style={{ animation: "ping-ring 2s cubic-bezier(0,0,0.2,1) infinite 0.5s" }}
            />
          </>
        )}
        <motion.div
          key={isOpen ? "close" : "open"}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <FaTimes className="text-base text-neutral-300" />
          ) : (
            <HiSparkles className="text-xl text-[#f97316]" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
}
