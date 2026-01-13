import { useState } from 'react';
import { X, MessageCircle, ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive civil engineering services including site planning, architectural design, MEP services, BIM implementation, and road design. We support both local field work in Williamsburg and remote nationwide engineering projects."
  },
  {
    question: "What areas do you serve?",
    answer: "We offer local field support in Williamsburg and surrounding areas for site work coordination and fine grading. We also provide nationwide engineering support remotely for land development documentation, plan sets, and traffic studies."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. We define clear deliverables and schedules upfront. Most projects range from a few weeks to several months. Contact us for a specific timeline estimate for your project."
  },
  {
    question: "Are your engineers licensed?",
    answer: "Yes. Our work is supported by licensed professional engineers. When sealing is required, plans and calculations are prepared and sealed by appropriately licensed professionals."
  },
  {
    question: "What is your experience?",
    answer: "We bring 10 years of civil engineering experience and 8 years of delivery-focused support. We've completed 500+ projects with 95% client satisfaction and have 50+ expert team members."
  },
  {
    question: "How do you handle changes during a project?",
    answer: "When we quote a scope and commit to it, we honor that commitment. If conditions change, we don't surprise you. We explain it, show options, and keep it reasonable. Communication doesn't disappear when things get messy."
  },
  {
    question: "Do you provide BIM services?",
    answer: "Yes! We offer comprehensive BIM services including strategy planning, implementation, 3D/4D/5D construction sequencing, clash detection, training, and IT infrastructure setup."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through the form on our website or call us directly. We'll start by defining the scope, inputs, jurisdiction expectations, deliverables, and schedule. Then we execute with clarity and commitment."
  }
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-colonial-navy text-colonial-gold p-4 rounded-full shadow-2xl hover:bg-colonial-navy/90 transition-all hover:scale-110 flex items-center gap-2 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-8 h-8" />
          <span className="hidden group-hover:inline-block text-sm font-semibold whitespace-nowrap pr-1">
            Have questions?
          </span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-[24px] shadow-2xl border border-colonial-border w-[90vw] sm:w-[380px] max-h-[600px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-colonial-navy to-colonial-blue p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-colonial-gold rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-colonial-navy" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">Colonial Consultants</h3>
                <p className="text-gray-200 text-xs">Ask us anything</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedFAQ(null);
              }}
              className="text-white hover:bg-white/10 p-2 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-colonial-light-bg/30">
            <div className="bg-white p-4 rounded-[16px] shadow-sm border border-colonial-border">
              <p className="text-sm text-colonial-gray mb-1">👋 Hi there!</p>
              <p className="text-sm text-colonial-gray">
                I'm here to help answer your questions. Click on any question below to get started.
              </p>
            </div>

            {/* FAQ List */}
            <div className="space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-[16px] shadow-sm border border-colonial-border overflow-hidden">
                  <button
                    onClick={() => setSelectedFAQ(selectedFAQ === index ? null : index)}
                    className="w-full p-4 text-left hover:bg-colonial-blue/5 transition-colors flex items-center justify-between gap-3"
                  >
                    <span className="text-sm font-semibold text-colonial-navy">
                      {faq.question}
                    </span>
                    <ChevronDown 
                      className={`w-4 h-4 text-colonial-blue flex-shrink-0 transition-transform ${
                        selectedFAQ === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {selectedFAQ === index && (
                    <div className="px-4 pb-4 pt-2 border-t border-colonial-border bg-colonial-light-bg/50">
                      <p className="text-sm text-colonial-gray leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-colonial-border bg-white">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 bg-colonial-navy text-colonial-gold rounded-[16px] font-semibold text-sm hover:bg-colonial-navy/90 transition-colors"
            >
              Contact Us for More Info
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
