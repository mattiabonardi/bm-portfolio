import { WorkData } from "../types/work";

export const workData: WorkData[] = [
  {
    id: "tictactoe-3d",
    title: "Tic Tac Toe 3D",
    abstract:
      "Tic Tac Toe game in 3D mode served by full stack javascript framework.",
    links: [
      {
        icon: "github",
        url: "https://github.com/mattiabonardi/tictactoe-ddd/",
        newWindow: true,
      },
      {
        icon: "info",
        url: "http://localhost:8082/en/projects/tic-tac-toe-3d",
        newWindow: true,
      },
      {
        icon: "demo",
        url: "https://mattiabonardi.cloud/tictactoe-ddd/",
        newWindow: true,
      },
    ],
    mainTecnologies: ["typescript", "react", "three"],
  },
  {
    id: "smeup-nc",
    title: "Smeup No Code",
    abstract: "No Code integration for Smeup UI",
    links: [
      {
        icon: "info",
        url: "http://localhost:8082/en/projects/smeup-nc",
        newWindow: true,
      },
      {
        icon: "demo",
        url: "https://mattiabonardi.cloud/tictactoe-ddd/",
        newWindow: true,
      },
    ],
    mainTecnologies: ["typescript", "react", "figma"],
  },
];
