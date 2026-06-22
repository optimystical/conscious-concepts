/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DishPreset {
  id: string;
  name: string;
  category: string;
  originalPrice: number;
  originalDesc: string;
  originalServing: string;
  
  // Cinematic transformed counterparts
  cinematicName: string;
  cinematicPrice: number;
  sensoryDescription: string;
  poeticTone: string;
  sommelierPairing: string;
  visualNote: string;
  culinaryCategory: string;
  moodHighlight: string;
}

export interface ProjectTransformation {
  id: string;
  title: string;
  type: "menu" | "website";
  clientName: string;
  location: string;
  
  // Bland version descriptions & metrics
  bland: {
    description: string;
    style: string;
    typography: string;
    metrics: string;
    visualTone: string;
  };
  
  // Elegant cinematic version
  elegant: {
    description: string;
    style: string;
    typography: string;
    metrics: string;
    visualTone: string;
    sommelierNote: string;
    heroImage: string;
  };
  
  // Dynamic camera/cutting-edge angle parameters
  cameraAngle: {
    name: string;
    skewVal: string;
    translationVal: string;
    focusElement: string;
  };
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  establishment: string;
  metricLabel: string;
  metricValue: string;
  metricImprovement: string;
  badge: string;
  gridSpan: string; // Tailwind grid span format e.g. "md:col-span-2"
}

export interface AuditTarget {
  id: string;
  label: string;
  category: "menu" | "digital" | "atmosphere";
  selectedByDefault: boolean;
}
