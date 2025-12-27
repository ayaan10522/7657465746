import { Bell, Calendar, ArrowRight } from "lucide-react";

const Notices = () => {
  const notices = [
    {
      date: "Dec 20, 2024",
      title: "Winter Vacation Notice",
      description: "School will remain closed from Dec 25 to Jan 5 for winter break.",
      type: "Holiday",
    },
    {
      date: "Dec 15, 2024",
      title: "Parent-Teacher Meeting",
      description: "PTM scheduled for Classes 6-10 on December 18th, 2024.",
      type: "Meeting",
    },
    {
      date: "Dec 10, 2024",
      title: "Annual Sports Day",
      description: "Annual sports day celebrations on December 22nd. Parents are invited.",
      type: "Event",
    },
    {
      date: "Dec 5, 2024",
      title: "Admission Open 2024-25",
      description: "Admissions for new academic year are now open. Limited seats available.",
      type: "Admission",
    },
  ];

  const events = [
    { date: "Jan 26", title: "Republic Day Celebration", description: "Flag hoisting and cultural program" },
    { date: "Feb 15", title: "Science Exhibition", description: "Annual science project display" },
    { date: "Mar 20", title: "Annual Day Function", description: "Cultural performances and prize distribution" },
  ];

  return (
    <section id="notices" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Notices */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-school-gold/20 rounded-lg flex items-center justify-center">
                <Bell className="h-5 w-5 text-school-gold" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Notices & Events
              </h2>
            </div>

            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-school-gold/30 hover:shadow-soft transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
                          {notice.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{notice.date}</span>
                      </div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {notice.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">{notice.description}</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-school-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                Upcoming Events
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`p-5 flex items-center gap-5 hover:bg-muted/50 transition-colors ${
                    index !== events.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="w-16 h-16 bg-primary rounded-xl flex flex-col items-center justify-center text-primary-foreground shrink-0">
                    <span className="text-lg font-bold leading-none">{event.date.split(" ")[0]}</span>
                    <span className="text-xs mt-1">{event.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{event.title}</h3>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8 p-6 bg-gradient-hero rounded-2xl text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Download Syllabus", "Fee Payment", "Photo Gallery", "Contact Us"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="px-4 py-2.5 bg-primary-foreground/10 rounded-lg text-sm font-medium hover:bg-primary-foreground/20 transition-colors text-center"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notices;
