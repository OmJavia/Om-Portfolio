import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaSpinner } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import posthog from 'posthog-js';

const SUGGESTED_QUESTIONS = [
  "What is Pickl+?",
  "What did you do at ISRO?",
  "What does sub-80ms include?",
  "Is Om open to new opportunities?",
];

const GREETING = {
  id: "greeting",
  role: "assistant",
  text: "Hi! Feel free to ask anything about Om's work, technical experience, projects, or background.",
};

export default function AskOmWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showBubble, setShowBubble] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 5000);
    const hideTimer = setTimeout(() => setShowBubble(false), 14000);
    return () => {
      clearTimeout(t);
      clearTimeout(hideTimer);
    };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setShowBubble(false);
      const handleEscape = (e) => {
        if (e.key === "Escape") setIsOpen(false);
      };
      window.addEventListener("keydown", handleEscape);
      return () => window.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const sendMessage = async (text, isSuggestion = false) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    if (isSuggestion) {
      posthog.capture('ai_chat_suggestion_clicked', { suggestion: userText });
    } else {
      posthog.capture('ai_chat_message_sent', { query_length: userText.length });
    }

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      text: userText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.text,
          })),
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        text: data.reply || "Thanks for your question. You can also contact Om directly via email at omjavia18@gmail.com.",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          text: "Thanks for asking! You can reach Om directly at omjavia18@gmail.com or connect via LinkedIn.",
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
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex h-[480px] w-[350px] sm:w-[380px] flex-col overflow-hidden rounded-2xl border border-neutral-200/90 dark:border-neutral-800 bg-[#faf8f5] dark:bg-[#121215] shadow-xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-neutral-200/90 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 px-4 py-3">
              <div>
                <p className="text-sm font-bold text-neutral-900 dark:text-white">
                  Ask Om
                </p>
                <p className="text-[11px] font-mono text-neutral-500">
                  Quick Q&amp;A about background &amp; work
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                aria-label="Close assistant"
              >
                <FaTimes className="text-xs" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 text-xs leading-relaxed">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 ${
                      msg.role === "user"
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 font-medium"
                        : "bg-white dark:bg-[#18181c] border border-neutral-200/90 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-1.5 rounded-xl bg-white dark:bg-[#18181c] border border-neutral-200 dark:border-neutral-800 px-3.5 py-2.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-neutral-400 [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length === 1 && (
              <div className="border-t border-neutral-200/80 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 px-3 py-2.5">
                <p className="mb-1.5 font-mono text-[10px] uppercase text-neutral-400">
                  Quick questions
                </p>
                <div className="flex flex-wrap gap-1">
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q, true)}
                      className="rounded-lg border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-800 px-2.5 py-1 text-[11px] text-neutral-600 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="border-t border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-2.5">
              <div className="flex items-center gap-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 px-3 py-2 focus-within:border-neutral-400 dark:focus-within:border-neutral-600 transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask a question..."
                  aria-label="Question for Om"
                  className="flex-1 min-w-0 bg-transparent text-xs text-neutral-900 dark:text-neutral-100 outline-none placeholder:text-neutral-400"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 disabled:opacity-30 transition-opacity"
                  aria-label="Send"
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

      {/* Bubble Hint */}
      <AnimatePresence>
        {showBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="rounded-xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-[#131316] px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-300 shadow-sm"
          >
            Questions about Om&apos;s work? Ask here.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <button
        onClick={() => {
          const opening = !isOpen;
          setIsOpen(opening);
          if (opening) posthog.capture('ai_chat_opened');
        }}
        aria-label={isOpen ? "Close question dialog" : "Ask questions about Om's work"}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300/90 dark:border-neutral-700 bg-white dark:bg-[#131316] text-neutral-800 dark:text-neutral-200 shadow-md hover:scale-105 transition-all"
      >
        {isOpen ? <FaTimes className="text-sm" /> : <FiMessageSquare className="text-base" />}
      </button>
    </div>
  );
}
