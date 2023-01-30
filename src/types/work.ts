export interface WorkData {
  id: string;
  title: string;
  abstract: string;
  mainTecnologies: string[];
  links: WorkLink[];
}

export interface WorkLink {
  icon: "github" | "demo" | "info";
  onClick: () => void;
}