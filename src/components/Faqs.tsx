import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";
import routeNames from "../route/routes";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services does Global Performance Index (GPI) provide?",
    answer:
      "GPI provides end-to-end digital and infrastructure solutions, including IT services, software development, data analysis and business intelligence, Big Data and AI-driven insights, and professional trainings and workshops.",
  },
  {
    question: "How does GPI add value to organizations?",
    answer:
      "We help organizations improve efficiency, productivity, and decision-making by delivering business-aligned technology solutions, actionable data insights, and capacity-building programs that produce measurable results.",
  },
  {
    question: "What industries does GPI work with?",
    answer:
      "GPI works with businesses, institutions, and public-sector organizations across multiple industries, including energy, finance, education, technology, and government.",
  },
  {
    question: "How does GPI approach projects and client engagements?",
    answer:
      "Our approach is business-focused and results-driven. We begin by understanding client needs, design tailored solutions, and work closely with stakeholders from planning through execution to ensure successful outcomes.",
  },
  {
    question: "Can GPI customize solutions to fit our organization's needs?",
    answer:
      "Yes. All GPI solutions are tailored to align with each client's operational requirements, growth objectives, and industry context, ensuring scalability, security, and long-term value.",
  },
];

function useBreakpoint() {
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 640,
    isTablet: width >= 640 && width < 1024,
    isDesktop: width >= 1024,
    width,
  };
}

function FAQAccordionItem({
  item,
  isOpen,
  onToggle,
  isMobile,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  isMobile: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [item.answer]);

  return (
    <div style={{ borderTop: "1px solid #d1cfc9" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "16px 0" : "20px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "16px",
          color: "#1a1a1a",
        }}
      >
        <span
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: isMobile ? "14px" : "15px",
            fontWeight: 600,
            lineHeight: 1.4,
            letterSpacing: "-0.01em",
          }}
        >
          {item.question}
        </span>
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            flexShrink: 0,
          }}
        />
      </button>

      {/* Animated content */}
      <div
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
          transition:
            "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
        }}
      >
        <div ref={contentRef}>
          <p
            style={{
              fontFamily: "'Source Serif 4', Georgia, serif",
              fontSize: isMobile ? "13px" : "14px",
              lineHeight: 1.7,
              color: "#3d3d3d",
              paddingBottom: "20px",
              margin: 0,
            }}
          >
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { isMobile, isTablet } = useBreakpoint();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const isStacked = isMobile || isTablet;
  //   const padding = isMobile ? "40px 20px" : isTablet ? "60px 40px" : "80px 60px";
  const headingSize = isMobile ? "40px" : isTablet ? "44px" : "48px";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Source+Serif+4:wght@300;400;600&display=swap');
        * { box-sizing: border-box; }
      `}</style>
      <section
        style={{
          paddingTop: isMobile ? "40px" : isTablet ? "60px" : "80px",
          paddingBottom: isMobile ? "40px" : isTablet ? "50px" : "60px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isStacked ? "1fr" : "280px 1fr",
            gap: isStacked ? "36px" : "80px",
          }}
        >
          {/* Left Column */}
          <div>
            <h2
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: headingSize,
                fontWeight: 700,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                color: "#1a1a1a",
                margin: "0 0 12px 0",
              }}
            >
              FAQs
            </h2>
            <p
              style={{
                fontFamily: "'Source Serif 4', Georgia, serif",
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: 1.6,
                color: "#5a5a5a",
                margin: "0 0 24px 0",
                maxWidth: isStacked ? "520px" : "none",
              }}
            >
              Clear answers to common questions, so you can move forward with
              confidence.
            </p>
          <Link to={`/${routeNames.contact}`}>
  <Button variant="primary">Talk to us</Button>
</Link>
          </div>

          {/* Right Column — FAQ List */}
          <div>
            {faqs.map((faq, index) => (
              <FAQAccordionItem
                key={index}
                item={faq}
                isOpen={openIndex === index}
                onToggle={() => toggle(index)}
                isMobile={isMobile}
              />
            ))}
            <div style={{ borderTop: "1px solid #d1cfc9" }} />
          </div>
        </div>
      </section>
    </>
  );
}
