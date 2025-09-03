import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
const experiences = [
  {
    title: "Contributor - Viswam.ai",
    company: "CultureMapper Platform",
    location: "Remote",
    duration: "June, 2025 - Present",
    description: [
      "Developed contributor portal and analytics dashboard",
      "Implemented frontend using React and TailwindCSS",
      "Integrated backend APIs for user data and content management"
    ]
  },
    {
    title: "AI Content Creator",
    company: "Self-driven Projects (Telugu AI Blog & YouTube)",
    location: "Remote",
    duration: "2024 - Present",
    description: [
      "Created 50+ Telugu AI video scripts with structured storytelling",
      "Built a blog in English explaining Tech Related concepts",
      "Designed 50+ custom YouTube thumbnails using Canva for portfolio"
    ]
  },

  {
    title: "Software Developer (Personal Projects)",
    company: "Independent",
    location: "Remote",
    duration: "2023 - Present",
    description: [
      "Built end-to-end web applications using GoLang, React, and Node.js",
      "Developed Python ML project for automatic image background removal",
      "Created structured JSON/CSV automation prompts for AI-generated content",
      "Deployed applications on Docker and AWS platforms",
      "Built responsive web applications for various use cases",
      "Collaborated with cross-functional teams using Agile methodology"
    ]
  },

      {
    title: "Data Analytics Intern",
    company: "Tableau Internship Project",
    location: "Remote",
    duration: "May, 2025 - July, 2025",
    description: [
      "Worked on 'Measuring the Pulse of Prosperity: An Index of Economic Freedom Analysis'",
      "Built interactive dashboards and visualizations in Tableau",
      "Documented project on GitHub and managed workflow using Kanban boards"
    ]
  },
];

  return (
    <section className="py-section">
      <div className="max-w-content mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-12 last:pb-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-border last:h-8">
                <div className="absolute top-2 -left-1.5 w-3 h-3 bg-primary rounded-full"></div>
              </div>

              <div className="bg-card p-6 rounded-lg shadow-soft border border-border ml-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-primary font-medium mb-2">
                    {exp.company}
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground flex items-start">
                      <span className="text-primary mr-2 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;