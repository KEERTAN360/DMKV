import { ExternalLink, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Publications | DMKV House of Publications',
  description: 'Explore DMKV\'s publications - books that bridge knowledge and real-world application.',
}

export default function Publications() {
  const books = [
    {
      title: 'Two Faces of Becoming You',
      author: 'Keertan Vijaykumar',
      description: 'A profound exploration of transformation and self-discovery. This work delves into the dual nature of personal growth and the journey of becoming who you are meant to be.',
      amazonLink: 'https://www.amazon.in/Two-Faces-Becoming-Keertan-Vijaykumar-ebook/dp/B0F9KJBXT4',
      tags: ['Personal Growth', 'Philosophy', 'Self-Discovery']
    },
    {
      title: 'Earned Not Explained',
      author: 'Keertan Vijaykumar',
      description: 'A powerful narrative on merit, credibility, and authentic achievement. Exploring how true success is built through consistent action, not just explanation or persuasion.',
      amazonLink: 'https://www.amazon.in/Earned-Not-Explained-Keertan-Vijaykumar-ebook/dp/B0F9KSPGF5',
      tags: ['Business', 'Success', 'Authenticity']
    }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="py-20 border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <BookOpen size={16} />
                DMKV House of Publications
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                Knowledge That <span className="text-primary">Transforms</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                DMKV House of Publications brings curated knowledge and insights to market. Our books bridge the gap between theory and real-world application, offering readers practical wisdom grounded in research and experience.
              </p>
            </div>
          </div>
        </section>

        {/* Books Showcase */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {books.map((book, idx) => (
                <div key={idx} className="grid md:grid-cols-2 gap-12 items-start pb-16 border-b border-border last:border-0">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h2 className="text-4xl font-bold text-balance">{book.title}</h2>
                        <p className="text-lg text-primary font-semibold">by {book.author}</p>
                      </div>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {book.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {book.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={book.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Get on Amazon
                      <ExternalLink size={18} />
                    </a>
                  </div>

                  {/* Book Cover Placeholder */}
                  <div className="flex items-center justify-center">
                    <div className="w-full aspect-square rounded-lg border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <div className="text-center space-y-4 p-8">
                        <BookOpen className="text-primary mx-auto" size={48} />
                        <div className="space-y-2">
                          <p className="font-semibold text-foreground text-sm">{book.title}</p>
                          <p className="text-xs text-muted-foreground">{book.author}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About the Vertical */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Our Publication Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At DMKV House of Publications, we believe that knowledge should be:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-xl font-bold text-primary">Research-Driven</h3>
                <p className="text-muted-foreground">
                  Every publication is grounded in thorough research, personal experience, and practical insights. We don&apos;t chase trends—we create lasting knowledge.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-xl font-bold text-primary">Accessible</h3>
                <p className="text-muted-foreground">
                  We simplify complex ideas without losing depth. Our goal is to make knowledge accessible to anyone who seeks to grow and understand.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-xl font-bold text-primary">Transformative</h3>
                <p className="text-muted-foreground">
                  Our publications are designed to create real change in how readers think, decide, and act. Knowledge that matters leads to action.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background space-y-3">
                <h3 className="text-xl font-bold text-primary">Integrated</h3>
                <p className="text-muted-foreground">
                  Publications at DMKV connect to the broader ecosystem—informing product development, shaping our brand narrative, and enriching our community.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg border border-primary/20 bg-primary/5 space-y-4">
              <p className="text-lg leading-relaxed">
                Through DMKV House of Publications, we extend our impact beyond products and services. We bridge the gap between complex ideas and practical wisdom, creating a resource that enriches minds and transforms lives. Every book published by DMKV represents a commitment to excellence in storytelling, research, and real-world insight.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Discover More</h2>
              <p className="text-lg text-muted-foreground">
                Explore DMKV&apos;s publications on Amazon India and join a community of readers seeking transformative knowledge.
              </p>
            </div>
            <a
              href="https://www.amazon.in/s?k=Keertan+Vijaykumar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View All Works
              <ExternalLink size={20} />
            </a>
          </div>
        </section>
    </div>
  )
}
