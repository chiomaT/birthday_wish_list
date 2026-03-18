import { useState } from "react";

interface Tab {
  label: string;
  value: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

const defaultTabs: Tab[] = [
  { label: "GPI Core", value: "gpi-core" },
  { label: "IT Infrastructure", value: "it-infrastructure" },
  { label: "Custom Engineering", value: "custom-engineering" },
];

export function Tabs({
  tabs = defaultTabs,
  defaultValue,
  onChange,
}: TabsProps) {
  const [active, setActive] = useState(defaultValue ?? tabs[0]?.value);

  const handleClick = (value: string) => {
    setActive(value);
    onChange?.(value);
  };

  return (
    <div className="inline-flex items-center bg-primary-light rounded-xl p-1 gap-1">
      {tabs.map((tab) => {
        const isActive = tab.value === active;
        return (
          <button
            key={tab.value}
            onClick={() => handleClick(tab.value)}
            className={`
              relative px-6 py-2.5 rounded-lg text-sm font-primary font-semibold tracking-wide
              transition-all duration-200 cursor-pointer border-none outline-none whitespace-nowrap
              ${
                isActive
                  ? "bg-white text-primary shadow-sm"
                  : "bg-transparent text-text-secondary hover:text-primary"
              }
            `}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

// Demo
export default function TabDemo() {
  const [selected, setSelected] = useState("gpi-core");

  return (
    <div className="flex flex-col items-start justify-start min-h-screen bg-white gap-6 p-8">
      <Tabs tabs={defaultTabs} defaultValue="gpi-core" onChange={setSelected} />
      <p className="text-sm text-text-secondary font-primary">
        Active tab:{" "}
        <span className="font-semibold text-primary">{selected}</span>
      </p>
    </div>
  );
}
