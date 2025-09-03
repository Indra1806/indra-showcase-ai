import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2023 - Present",
      description: [
        "Led development of scalable web applications using React and Node.js",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd.",
      location: "Hyderabad, India",
      duration: "2021 - 2023",
      description: [
        "Built responsive web applications serving 10k+ users",
        "Collaborated with cross-functional teams using Agile methodology",
        "Optimized database queries improving application performance by 40%"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "StartUp Hub",
      location: "Bangalore, India",
      duration: "2020 - 2021",
      description: [
        "Developed RESTful APIs using Python and Django",
        "Contributed to open-source projects and documentation",
        "Participated in hackathons and won 2nd place in TechFest 2021"
      ]
    }
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