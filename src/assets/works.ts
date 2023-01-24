import { WorkData } from "../types/work";

export const workData: WorkData[] = [
  {
    id: "tictactoe-ddd",
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
        url: "/works/tictactoe-ddd/",
        newWindow: false,
      },
      {
        icon: "demo",
        url: "https://mattiabonardi.cloud/tictactoe-ddd/",
        newWindow: true,
      },
    ],
    mainTecnologies: ["typescript", "react", "three"],
    content: {
      intro:
        "Tic Tac Toe 3D reproduces tic tac toe game in 3D mode. The project is based on Next.js and is written in Typescript, HTML and CSS. The UI is created using Mui Components and Three.js. The user plays against AI (min max algorithm) but it is still possibile win but it is still possible to win through a particular solution: thinking out of the box.",
      architecture:
        "Next.js is a full stack javascript framework based on Node.js for the server side and React.js for the client side. The framework offers a great solution to implement server side rendering in an optimal way with React.js. For each user event, the client side 3D component calls the AI served by server side API to get the optimal tic tac toe move.",
      goal: "I decided to create this project to learn React.js, to practise with 3D model and to know the benefit of Next.js instead of Nuxt.js (Vue.js framework). ",
      tecnologies: [
        "typescript",
        "react",
        "three",
        "node",
        "css",
        "html",
        "docker"
      ],
      problems:
        "The main difficulties I encountered concern the lack of knowledge of React.js and the handling of Three.js events.",
    },
  },
  {
    id: "smeup-nc",
    title: "Smeup No Code",
    abstract:
      "Smeup NC is a Figma plugin which allows to generate Smeup UI DSL from Figma design file. The plugin is provided with Smeup Figma components library. Users can create interface mockups and in the end exports the relative DSL.",
    links: [
      {
        icon: "info",
        url: "/works/smeup-nc",
        newWindow: false,
      },
      {
        icon: "demo",
        url: "https://mattiabonardi.cloud/tictactoe-ddd/",
        newWindow: true,
      },
    ],
    mainTecnologies: ["typescript", "react", "vite"],
    content: {
      intro: "",
      architecture: "",
      goal: "",
      problems: "",
      tecnologies: [],
    },
  },
];
