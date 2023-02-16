import { WorkData } from "../types/work";
import { openAlert, openLink } from "../utils/eventHelper";

export const workData: WorkData[] = [
  {
    id: "tictactoe-3d",
    title: "Tic Tac Toe 3D",
    abstract:
      "Tic Tac Toe game in 3D mode served by full stack javascript framework.",
    links: [
      {
        icon: "github",
        onClick: () =>
          openLink("https://github.com/mattiabonardi/tictactoe-ddd/", true),
      },
      {
        icon: "info",
        onClick: () =>
          openLink(
            "https://wiki.mattiabonardi.com/en/projects/tic-tac-toe-3d",
            true
          ),
      },
      {
        icon: "demo",
        onClick: () => openLink("https://tictactoe.mattiabonardi.com", true),
      },
    ],
    mainTecnologies: ["typescript", "nextjs", "three"],
  },
  {
    id: "smeup-nc",
    title: "Smeup No Code",
    abstract: "No Code integration for Smeup UI",
    links: [
      {
        icon: "info",
        onClick: () =>
          openLink("https://wiki.mattiabonardi.com/en/projects/smeup-nc", true),
      },
    ],
    mainTecnologies: ["typescript", "react", "figma"],
  },
  {
    id: "bm-signature",
    title: "BM Signature",
    abstract: "Personal in-code signature for Node.js based projects",
    links: [
      {
        icon: "github",
        onClick: () =>
          openLink("https://github.com/mattiabonardi/bm-signature/", true),
      },
      {
        icon: "info",
        onClick: () =>
          openLink(
            "https://wiki.mattiabonardi.com/en/projects/bm-signature",
            true
          ),
      },
      {
        icon: "demo",
        onClick: () => openAlert("Press F12"),
      },
    ],
    mainTecnologies: ["typescript", "node", "html"],
  },
  {
    id: "bm-wiki",
    title: "BM Wiki",
    abstract: "Markdown-based personal Wiki",
    links: [
      {
        icon: "github",
        onClick: () => openLink("https://github.com/requarks/wiki", true),
      },
      {
        icon: "info",
        onClick: () => openLink("https://wiki.mattiabonardi.com", true),
      },
    ],
    mainTecnologies: ["wikijs", "docker", "md"],
  },
  {
    id: "bm-cluster",
    title: "BM Cluster",
    abstract:
      "IaaS-based project whose role is to manage the deployment of my applications",
    links: [
      {
        icon: "github",
        onClick: () =>
          openLink("https://github.com/mattiabonardi/bm-cluster", true),
      },
      {
        icon: "info",
        onClick: () =>
          openLink(
            "https://wiki.mattiabonardi.com/en/projects/bm-cluster",
            true
          ),
      },
    ],
    mainTecnologies: ["bash", "docker", "git"],
  },
];
