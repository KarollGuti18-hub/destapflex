export interface NavItem {
  href: string;
  label: string;
}

export interface TeamMember {
  name: string;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface ProductComponent {
  name: string;
  function: string;
  material: string;
  dimension?: string;
}

export interface HowItWorksStep {
  id: string;
  title: string;
  description: string;
}

export interface RenderView {
  id: string;
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface CtqItem {
  id: string;
  name: string;
  measurementVariable: string;
  importance: string;
  meta?: string;
}

export interface CtsCategory {
  id: string;
  name: string;
  ctqs: CtqItem[];
}

export interface ProcessStage {
  id: string;
  order: number;
  name: string;
  cycleTimeMin: number;
  waitTimeMin: number;
  description: string;
  highlightWait?: boolean;
}

export interface VsmIndicator {
  label: string;
  value: string;
  helper?: string;
}

export interface DecisionLogEntry {
  week: string;
  dateLabel: string;
  decision: string;
  justification: string;
}

export interface AssetRef {
  id: string;
  role: string;
  originalPath: string;
  publicPath: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface VideoAsset {
  src: string;
  title: string;
  poster?: string;
}
