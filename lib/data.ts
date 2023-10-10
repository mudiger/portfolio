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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;



export const projectsData = [
  {
    title: "Analysing Disneyland Reviews",
    description:
      "Built a machine learning model utilizing LSTM algorithm to classify reviews into three categories: positive, negative, and neutral.",
    tags: ["Machine Learning", "LSTM", "NLP", "Sentiment Analysis"],
    imageUrl: disneylandImg,
  },
  {
    title: "Cloud Native Monitoring Application",
    description:
      "Python application developed using flask which measures system's CPU and Memory Utilization.",
    tags: ["Python", "Flask", "Psutil", "Docker", "EKS","Kubernetes"],
    imageUrl: cloudnativeImg,
  },
  {
    title: "UTA MS CS Website",
    description:
      "Developed a full stack web application that measures performance of MS CS Academic Program",
    tags: ["React", "PHP", "Node.js", "Laravel", "MongoDB"],
    imageUrl: mscsImg,
  },
] as const;

export const skillsData = [
  "Java",
  "Python",
  "Golang",
  "C",
] as const;

export const skillsData1 = [
  "MySQL",
  "MongoDB",
  "PostgreSQL",
  "Orcale RDMS",
] as const;

export const skillsData2 = [
  "Spring Boot",
  "JUnit",
  "Mockito",
  "Django",
  ".Net",
  "ADO.Net",
] as const;
export const skillsData3 = [
  "ReactJS",
  "NextJS",
  "Typescript",
  "NodeJS",
  "AngularJS",
  "JavaScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Framer Motion",
] as const;
export const skillsData4 = [
  "AWS EC2",
  "AWS ECS",
  "AWS EKS",
  "Docker",
  "Kubernetes",
  "Fargate",
] as const;
export const skillsData5 = [
  "VSCode",
  "IntelliJ",
  "Jenkins",
  "Git",

] as const;