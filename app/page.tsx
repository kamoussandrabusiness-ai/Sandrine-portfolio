export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-4xl mx-auto">

        {/* HERO SECTION */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Sandrine 👋
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Full-Stack Web Developer | React • Next.js • ASP.NET Core
          </p>
          <p className="text-gray-400">
            Open to Remote International Opportunities
          </p>
        </section>

        {/* ABOUT SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate Full-Stack Developer with a background in
            Computer Science and Management Information Systems.
            I specialize in building modern, scalable web applications
            using React, Next.js, and ASP.NET Core.
          </p>
        </section>
        <div className="mt-6">
          <a
            href="/Sandrine_CV.pdf"
            target="_blank"
            className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            Download CV
          </a>
        </div>
        Available for Remote Full-Stack Developer Roles (Worldwide)

        {/* SKILLS SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <div>React</div>
            <div>Next.js</div>
            <div>TypeScript</div>
            <div>ASP.NET Core</div>
            <div>SQL Server</div>
            <div>Git & GitHub</div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="bg-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-2">
              Pet Hub – Smart Pet Care Web Application
            </h3>
            <p className="text-gray-300 mb-4">
              A full-stack platform allowing pet owners to manage appointments,
              health records, and services.
            </p>
            <div className="flex gap-4">
              <a
                href="https://pet-hub-smart-care.vercel.app"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/kamoussandrabusiness-ai/pet-hub-smart-care"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-300">
            📧 your-email@example.com
          </p>
          <p className="text-gray-300">
            🔗 LinkedIn: linkedin.com/in/your-profile
          </p>
        </section>

      </div>
    </main>
  );
}