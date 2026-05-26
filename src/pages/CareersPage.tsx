import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, BookOpen, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jobOpenings } from '@/data/questions';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="gradient-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-primary-foreground mb-3">Faculty Openings</h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">Join our team of distinguished educators. Explore current openings across departments.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobOpenings.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl group"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 px-3 py-1">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide">Open Position</span>
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-4">{job.department}</h3>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>{job.qualification}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>On Campus</span>
                  </div>
                </div>
                <div className="mb-6 flex flex-wrap gap-1.5">
                  {job.skills.slice(0, 4).map(s => (
                    <span key={s} className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{s}</span>
                  ))}
                  {job.skills.length > 4 && (
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">+{job.skills.length - 4}</span>
                  )}
                </div>
                <Button asChild className="mt-auto w-full rounded-lg bg-primary text-primary-foreground transition-transform duration-300 ease-out hover:-translate-y-0.5 hover:bg-navy-light">
                  <Link to="/apply">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
