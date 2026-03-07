const interests = [
  "AI Systems",
  "Machine Learning Systems",
  "Operating Systems",
  "Computer Architecture",
  "GPU Architecture",
  "Robotics",
  "Design",
];

const ResearchInterestsSection = () => {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="font-mono text-sm text-muted-foreground mr-2">Research Interests:</span>
          {interests.map((interest) => (
            <span
              key={interest}
              className="px-4 py-1.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20 rounded-full"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchInterestsSection;
