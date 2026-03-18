
// Heading Component
export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

// Paragraph Component
export interface ParagraphProps {
  children: React.ReactNode;
  size?: "sm" | "base" | "lg";
  className?: string;
}

// Text Component (for smaller text, labels, etc.)
export interface TextProps {
  children: React.ReactNode;
  variant?: "muted" | "default" | "strong";
  size?: "xs" | "sm" | "base";
  className?: string;
}

// Label Component
export interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  className?: string;
}

// Link Component
export interface LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}





