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
            "https://github.com/mattiabonardi/bm-wiki/blob/main/projects/tictactoe/README.md",
            true
          ),
      }
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
          openLink("https://github.com/mattiabonardi/bm-wiki/blob/main/projects/smeup-nc/README.md", true),
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
            "https://github.com/mattiabonardi/bm-wiki/blob/main/projects/bm-signature/README.md",
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
            "https://github.com/mattiabonardi/bm-wiki/blob/main/projects/bm-cluster/README.md",
            true
          ),
      },
    ],
    mainTecnologies: ["bash", "docker", "git"],
  },
];
