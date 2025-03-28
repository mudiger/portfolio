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
    title: "LinkedIn AI Detector",
    description:
      "LinkedIn AI Detector is a Chrome extension that helps users analyze LinkedIn posts and determine whether the content is AI-generated.",
    tags: ["JavaScript", "Node.js", "Express.js", "GroqCloud API", "Chrome API"],
    imageUrl: disneylandImg,
  },
  {
    title: "Ecommerce CI/CD",
    description:
      "A modern e-commerce frontend website built with Next.js and TypeScript, showcasing a clean architecture and end-to-end automation through CI/CD.",
    tags: ["React.js", "GitHub Actions", "Docker", "AWS ECR", "AWS ECS", "AWS Fargate"],
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
