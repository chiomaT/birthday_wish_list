import React from "react";
import { Link } from "react-router-dom";

// Define all possible button variants
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "success"
  | "warning";
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ButtonShape = "default" | "rounded" | "pill" | "circle";

// Define all possible icon positions
export type IconPosition = "left" | "right";

// Props interface with all possible properties
export interface ButtonProps {
  // Core props
  children?: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;

  // States
  disabled?: boolean;
  loading?: boolean;
  active?: boolean;
  fullWidth?: boolean;

  // Icons
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;

  // Link/Route props
  href?: string;
  to?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;

  // Styling props
  className?: string;
  customClasses?: string;
  style?: React.CSSProperties;

  // Accessibility
  ariaLabel?: string;
  ariaExpanded?: boolean;
  ariaControls?: string;
  ariaSelected?: boolean;
  role?: string;

  // Events
  onClick?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onFocus?: (
    event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onBlur?: (
    event: React.FocusEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  // Form props (when type="submit" etc)
  type?: "button" | "submit" | "reset";
  name?: string;
  value?: string | number;
  form?: string;
  formAction?: string;
  formEncType?: string;
  formMethod?: string;
  formNoValidate?: boolean;
  formTarget?: string;

  // Data attributes for testing
  dataTestId?: string;
  dataCy?: string;
  dataAttributes?: Record<string, string | number | boolean>;

  // Animation
  animate?: boolean;
  animationType?: "pulse" | "bounce" | "spin" | "ping" | "none";

  // Tooltip
  tooltip?: string;
  tooltipPosition?: "top" | "bottom" | "left" | "right";

  // Advanced
  as?: "button" | "a" | "span" | "div";
  tabIndex?: number;
  id?: string;
  title?: string;

  // Loading state customization
  loadingText?: string;
  loaderPosition?: "left" | "right" | "center";
  loaderType?: "spinner" | "dots" | "pulse";

  // Responsive
  hiddenOn?: "mobile" | "desktop" | "tablet" | never[];
  showOn?: "mobile" | "desktop" | "tablet" | never[];

  // Conditional rendering
  renderIf?: boolean;

  // Pass through any other props
  [key: string]:any;
}

// Variant styles mapping
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#176A3B] text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-800 disabled:bg-blue-300",
  secondary:
    "bg-gray-600 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 active:bg-gray-800 disabled:bg-gray-300",
  outline:
    "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-100 disabled:border-gray-300 disabled:text-gray-400",
  ghost:
    "text-blue-600 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 active:bg-blue-100 disabled:text-gray-400",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-800 disabled:bg-red-300",
  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-800 disabled:bg-green-300",
  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 active:bg-yellow-700 disabled:bg-yellow-300",
};

// Size styles mapping
const sizeStyles: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};

// Shape styles mapping
const shapeStyles: Record<ButtonShape, string> = {
  default: "rounded",
  rounded: "rounded-lg",
  pill: "rounded-full",
  circle: "rounded-full aspect-square p-0",
};

// Animation styles
const animationStyles = {
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  spin: "animate-spin",
  ping: "animate-ping",
  none: "",
};

// Loader components
const LoaderSpinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const LoaderDots = () => (
  <div className="flex space-x-1">
    <div
      className="w-2 h-2 bg-current rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    />
    <div
      className="w-2 h-2 bg-current rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    />
    <div
      className="w-2 h-2 bg-current rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    />
  </div>
);

const LoaderPulse = () => (
  <div className="flex space-x-1">
    <div className="w-2 h-2 bg-current rounded-full animate-pulse" />
    <div
      className="w-2 h-2 bg-current rounded-full animate-pulse"
      style={{ animationDelay: "150ms" }}
    />
    <div
      className="w-2 h-2 bg-current rounded-full animate-pulse"
      style={{ animationDelay: "300ms" }}
    />
  </div>
);

// Responsive visibility classes
const responsiveClasses = {
  mobile: "block sm:hidden",
  desktop: "hidden sm:block",
  tablet: "hidden md:block",
};

const Button: React.FC<ButtonProps> = ({
  // Core props
  children,
  variant = "primary",
  size = "md",
  shape = "default",

  // States
  disabled = false,
  loading = false,
  active = false,
  fullWidth = false,

  // Icons
  leftIcon,
  rightIcon,
  iconOnly = false,

  // Link/Route props
  href,
  to,
  target,
  rel,

  // Styling props
  className = "",
  customClasses = "",
  style,

  // Accessibility
  ariaLabel,
  ariaExpanded,
  ariaControls,
  ariaSelected,
  role,

  // Events
  onClick,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onKeyDown,

  // Form props
  type = "button",
  name,
  value,
  form,
  formAction,
  formEncType,
  formMethod,
  formNoValidate,
  formTarget,

  // Data attributes
  dataTestId,
  dataCy,
  dataAttributes = {},

  // Animation
  animate = false,
  animationType = "none",

  // Tooltip
  tooltip,
  tooltipPosition = "top",

  // Advanced
  as = "button",
  tabIndex,
  id,
  title,

  // Loading state customization
  loadingText,
  loaderPosition = "center",
  loaderType = "spinner",

  // Responsive
  hiddenOn,
  showOn,

  // Conditional rendering
  renderIf = true,

  // Pass through any other props
  ...rest
}) => {
  // Don't render if condition is false
  if (!renderIf) return null;

  // Determine if this is a link or button
  const isLink = !!(href || to);
  const Component = isLink ? (to ? Link : "a") : as;

  // Prepare base classes
  const baseClasses = [
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none",
    variantStyles[variant],
    sizeStyles[size],
    shapeStyles[shape],
    fullWidth ? "w-full" : "",
    active ? "ring-2 ring-offset-2" : "",
    disabled || loading ? "cursor-not-allowed opacity-75" : "cursor-pointer",
    animate ? animationStyles[animationType] : "",
    iconOnly ? "aspect-square" : "",
    className,
    customClasses,
  ]
    .filter(Boolean)
    .join(" ");

  // Handle responsive visibility
  const responsiveClass = hiddenOn
    ? Array.isArray(hiddenOn)
      ? hiddenOn
          .map((device) => `hidden ${device === "mobile" ? "sm:block" : ""}`)
          .join(" ")
      : `hidden ${hiddenOn === "mobile" ? "sm:block" : ""}`
    : showOn
      ? Array.isArray(showOn)
        ? showOn.map((device) => responsiveClasses[device]).join(" ")
        : responsiveClasses[showOn]
      : "";

  // Prepare loader based on type
  const LoaderComponent = {
    spinner: LoaderSpinner,
    dots: LoaderDots,
    pulse: LoaderPulse,
  }[loaderType];

  // Prepare content based on loading state
  const content = loading ? (
    <span className="flex items-center gap-2">
      {loaderPosition === "left" && <LoaderComponent />}
      {loaderPosition === "center" && (
        <span className="flex items-center gap-2">
          <LoaderComponent />
          {loadingText && <span>{loadingText}</span>}
        </span>
      )}
      {loaderPosition === "right" && (
        <>
          {loadingText && <span>{loadingText}</span>}
          <LoaderComponent />
        </>
      )}
    </span>
  ) : (
    <>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {!iconOnly && children}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </>
  );

  // Prepare tooltip attributes
  const tooltipAttributes = tooltip
    ? {
        title: tooltip,
        "data-tooltip": tooltip,
        "data-tooltip-position": tooltipPosition,
      }
    : {};

  // Prepare link/route props
  const linkProps = to ? { to } : href ? { href } : {};
  const targetProps = target
    ? {
        target,
        rel: rel || (target === "_blank" ? "noopener noreferrer" : undefined),
      }
    : {};

  // Prepare data attributes
  const dataAttributesProps = Object.entries(dataAttributes).reduce(
    (acc, [key, value]) => {
      acc[`data-${key}`] = String(value);
      return acc;
    },
    {} as Record<string, string>,
  );

  // Prepare component props
  const componentProps = {
    ...linkProps,
    ...targetProps,
    ...tooltipAttributes,
    ...dataAttributesProps,
    className: `${baseClasses} ${responsiveClass}`.trim(),
    style,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onKeyDown,
    disabled: disabled || loading,
    type: isLink ? undefined : type,
    name,
    value,
    form,
    formAction,
    formEncType,
    formMethod,
    formNoValidate,
    formTarget,
    "aria-label": ariaLabel,
    "aria-expanded": ariaExpanded,
    "aria-controls": ariaControls,
    "aria-selected": ariaSelected,
    role: role || (isLink ? "link" : undefined),
    tabIndex: tabIndex ?? (disabled ? -1 : 0),
    id,
    title: title || tooltip,
    "data-testid": dataTestId,
    "data-cy": dataCy,
    ...rest,
  };

  return <Component {...(componentProps as any)}>{content}</Component>;
};

// Export individual variant components for convenience
export const PrimaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="primary" />
);

export const SecondaryButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="secondary" />
);

export const OutlineButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="outline" />
);

export const GhostButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="ghost" />
);

export const DangerButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="danger" />
);

export const SuccessButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="success" />
);

export const WarningButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} variant="warning" />
);

export const IconButton: React.FC<ButtonProps> = (props) => (
  <Button {...props} iconOnly shape="circle" />
);

export default Button;
