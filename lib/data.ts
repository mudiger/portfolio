import React from "react";

import disneylandImg from "@/public/disneyland.png";
import cloudnativeImg from "@/public/cloudnative.png";
import mscsImg from "@/public/mscs.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },

  {
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Socket-Programming-Project-1",
    description:
      "Built Socket-Programming-Project-1",
    tags: ["Mulit threading", "Python"],
    imageUrl: disneylandImg,
  },
  {
    title: "Computer-Networks-Project-3",
    description:
      "Built Computer-Networks-Project-3",
    tags: ["Python", "Bellman Ford", "Nodes"],
    imageUrl: cloudnativeImg,
  },
] as const;

export const skillsData1 = [
  "Python",
  "JavaScript",
  "Typescript",
  "Java",
  "HTML",
  "CSS",
  "SQL"
] as const;

export const skillsData2 = [
  "Linux",
  "React.js",
  "Next.js",
  "Flask",
  "Amazon Web Services (AWS)",
  "Azure",
  "Tailwind",
  "Bootstrap",
  "JDBC",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Oracle DB",
  "Oracle EBS",
  "Git",
  "Docker",
  "Maven",
  "Jenkins",
  "GitHub Actions",
  "Tosca (Vision AI)",
  "NeoLoad",
  "Panaya",
  "Microsoft Visual Studio",
  "JetBrains PyCharm",
  "Jira"
] as const;