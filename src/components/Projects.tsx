"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  title: string;
  description: string;
  link: string;
};

export default function Projects() {
  const [projects] = useState<Project[]>([
    {
      title: "LoxVM",
      description:
        "A memory-safe scripting language from scratch that includes low level debugging tools includes visualizations of the stack.",
      link: "https://github.com/EhlOps/LoxVM",
    },
    {
      title: "InstaBot",
      description:
        "Leveraged the selenium framework to run an Instagram scraper on a low-compute Raspberry Pi system.",
      link: "https://github.com/EhlOps/InstaBot",
    },
    {
      title: "YT Downlaod",
      description:
        "A YouTube video downloader Chrom extension with multi-format file handling.",
      link: "https://github.com/EhlOps/YoutubeDownloaderExtension",
    },
  ]);

  return (
    <>
      <section className="section">
        <h2 className="flex items-center text-lg mb-4">
          <span className="mr-2">📂</span>Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <Link href={project.link} target="_blank">
                <h3 className="text-base mb-2">{project.title}</h3>
                <p className="text-xs text-gray-600">{project.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
