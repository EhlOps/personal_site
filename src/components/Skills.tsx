export default function Skills() {
  const skills = [
    "C",
    "Rust",
    "TypeScript",
    "Next.js",
    "Python",
    "Linux",
    "Django",
    "PyTorch",
    "CUDA",
    "OpenGL",
    "Java",
    "Docker",
    "Git",
    "NeoVim",
  ];

  return (
    <>
      <section className="section">
        <h2 className="flex items-center text-lg mb-4">
          <span className="mr-2">💻</span>Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
