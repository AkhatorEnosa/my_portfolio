import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services do you provide?",
    answer: "I specialize in high-fidelity frontend development, cross-platform mobile development (iOS & Android) using React Native, and full-stack web architecture. I also focus on translating Figma designs into pixel-perfect, responsive code."
  },
  {
    question: "What is your typical tech stack?",
    answer: "My go-to tools for building modern web experiences include React, Next.js, TypeScript, and Tailwind CSS. For mobile, I use Expo and React Native. On the backend, I work with Node.js, Supabase, and PostgreSQL."
  },
  {
    question: "How do you handle state management?",
    answer: "I choose the tool best suited for the job, typically leveraging TanStack Query for server state and Redux Toolkit or the Context API for global UI state management."
  },
  {
    question: "Do you prioritize web accessibility?",
    answer: "Absolutely. I ensure that my components are WCAG compliant, supporting screen readers, keyboard navigation, and maintaining high standards of color contrast."
  }
];

interface FAQProps {
    question: string,
    answer: string,
    isOpen: boolean,
    onClick: () => void
}

const FAQItem = ({ question, answer, isOpen, onClick } : FAQProps) => {
  return (
    <div className="border-b border-indigo-500/10 dark:border-green-400/10 last:border-none">
      <button
        className="w-full py-6 flex justify-between items-center text-left hover:opacity-80 transition-opacity focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-black/90 dark:text-[#f9fafb]/90 pr-4">{question}</span>
        <div className="flex items-center justify-center">
          <i className={`bi bi-chevron-down text-black/50 dark:text-[#f9fafb]/50 text-sm ${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`}></i>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden bg-indigo-500/10 dark:bg-green-400/10 p-4 rounded-lg"
          >
            <p className="pb-6 border-indigo-500/10 dark:border-green-400/10 leading-relaxed max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
        <div className="backdrop-blur-md bg-black/5 dark:bg-[#f9fafb]/5 rounded-2xl p-6 border-[1px] border-indigo-500 dark:border-green-400 shadow-xl mt-5">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
  );
};

export default FAQ;