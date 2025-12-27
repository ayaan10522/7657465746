import { GraduationCap, Baby, BookMarked, Calculator, Languages, FlaskConical } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Baby,
      title: "Pre-Primary (Nursery & KG)",
      grades: "Nursery, Jr. KG, Sr. KG",
      description: "A nurturing environment where young learners develop foundational skills through play-based learning and creative activities.",
      color: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: BookMarked,
      title: "Primary Section",
      grades: "Class 1 to Class 5",
      description: "Building strong academic foundations with focus on language skills, mathematics, environmental studies, and moral education.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      icon: Calculator,
      title: "Middle School",
      grades: "Class 6 to Class 8",
      description: "Comprehensive curriculum covering sciences, mathematics, languages, and social sciences with practical applications.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      icon: FlaskConical,
      title: "Secondary Section",
      grades: "Class 9 & Class 10",
      description: "Rigorous preparation for board examinations with specialized coaching in all subjects and career guidance.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      icon: Languages,
      title: "Islamic Studies",
      grades: "All Classes",
      description: "Comprehensive Islamic education including Quran recitation, Arabic language, and moral values integrated throughout.",
      color: "bg-school-gold/10 text-school-gold-dark",
    },
    {
      icon: GraduationCap,
      title: "Board Affiliation",
      grades: "Maharashtra State Board",
      description: "Affiliated with Maharashtra State Board of Secondary & Higher Secondary Education with excellent pass percentages.",
      color: "bg-primary/10 text-primary",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-school-gold/10 text-school-gold-dark rounded-full text-sm font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Academic Programs
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer comprehensive education from pre-primary to secondary level, with a perfect blend of academic excellence and moral values.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-6 border border-border hover:border-school-gold/30 hover:shadow-elevated transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${program.color}`}>
                <program.icon className="h-7 w-7" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {program.title}
              </h3>
              <p className="text-sm font-medium text-school-gold mb-3">{program.grades}</p>
              <p className="text-muted-foreground text-sm">{program.description}</p>
            </div>
          ))}
        </div>

        {/* Shifts Information */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-school-gold/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌅</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">Morning Shift</h3>
                <p className="text-primary-foreground/70 text-sm">Primary & Secondary</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Timing</span>
                <span className="font-semibold">7:00 AM - 12:30 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-primary-foreground/20">
                <span className="text-primary-foreground/80">Classes</span>
                <span className="font-semibold">Class 1 to Class 10</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-primary-foreground/80">Assembly</span>
                <span className="font-semibold">6:45 AM</span>
              </div>
            </div>
          </div>

          <div className="bg-school-gold rounded-2xl p-8 text-school-green-dark">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-school-green-dark/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🌤️</span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-bold">Noon Shift</h3>
                <p className="text-school-green-dark/70 text-sm">Pre-Primary Section</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between py-2 border-b border-school-green-dark/20">
                <span className="text-school-green-dark/80">Timing</span>
                <span className="font-semibold">12:00 PM - 4:30 PM</span>
              </div>
              <div className="flex justify-between py-2 border-b border-school-green-dark/20">
                <span className="text-school-green-dark/80">Classes</span>
                <span className="font-semibold">Nursery to Sr. KG</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-school-green-dark/80">Activities</span>
                <span className="font-semibold">Play-based Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
