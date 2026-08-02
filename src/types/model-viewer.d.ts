import type { CSSProperties, DetailedHTMLProps, HTMLAttributes, ReactNode, Ref } from "react";

export type ModelViewerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
> & {
  src?: string;
  alt?: string;
  poster?: string;
  ar?: boolean;
  "auto-rotate"?: boolean;
  "auto-rotate-delay"?: string | number;
  "camera-controls"?: boolean;
  "camera-orbit"?: string;
  "camera-target"?: string;
  "field-of-view"?: string;
  "min-camera-orbit"?: string;
  "max-camera-orbit"?: string;
  "min-field-of-view"?: string;
  "max-field-of-view"?: string;
  "interaction-prompt"?: "auto" | "when-focused" | "none";
  "shadow-intensity"?: string | number;
  "shadow-softness"?: string | number;
  exposure?: string | number;
  "environment-image"?: string;
  "touch-action"?: string;
  loading?: "auto" | "lazy" | "eager";
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  ref?: Ref<HTMLElement>;
};

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerProps;
    }
  }
}

export {};
