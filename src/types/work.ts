export interface WorkData {
  id: string;
  title: string;
  abstract: string;
  mainTecnologies: string[];
  links: WorkLink[];
  content: WorkContent
}

export interface WorkLink {
  icon: "github" | "demo" | "info";
  url: string;
  newWindow: boolean;
}

export interface WorkContent {
  intro: string;
  goal: string;
  architecture: string;
  problems: string;
  tecnologies: string[]
}