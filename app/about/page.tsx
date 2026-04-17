import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'About DMKV | Digital Media & Knowledge Ventures',
  description: 'Learn about DMKV\'s mission, vision, and the integrated ecosystem building intelligent systems for the future.',
}

export default function About() {
  const pillars = [
    {
      title: 'Digital Media & Growth',
      description: 'Strategic systems for driving transformation at scale across digital channels.'
    },
    {
      title: 'AI & Intelligence',
      description: 'Smart technologies and artificial intelligence integrated into everyday experiences.'
    },
    {
      title: 'Business Applications',
      description: 'Enterprise solutions and systems that drive operational excellence and scalability.'
    },
    {
      title: 'Content & Production',
      description: 'Storytelling and visual creation that transforms ideas into compelling narratives.'
    }
  ]

  const values = [
    {
      title: 'Systems-Driven',
      description: 'We think in integrated systems, not isolated solutions.'
    },
    {
      title: 'Execution-Focused',
      description: 'Speed with direction. Clarity in decision-making and consistent execution.'
    },
    {
      title: 'Impact-Oriented',
      description: 'Every initiative is measured by real-world transformation and scalability.'
    },
    {
      title: 'Innovation-Led',
      description: 'Constantly exploring emerging technologies and novel approaches.'
    }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero */}
        <section className="py-20 border-b border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-balance">
                About <span className="text-primary">DMKV</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Digital Media & Knowledge Ventures is building an integrated ecosystem of companies designed to solve real-world problems through technology, intelligence, and creative excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To build intelligent systems that seamlessly integrate into human experience. We create products and solutions that are not just functional, but transformative at scale—bridging the gap between innovation and practical impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every vertical at DMKV operates with clear intent: solve real problems, scale across markets, and leave a lasting impact.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A future where technology, intelligence, and creativity work in harmony. Where systems are designed with both technical precision and human understanding.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DMKV exists to build that future—not through a single product or service, but through an integrated ecosystem that evolves with the world's changing needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Four Pillars */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Built on Four Pillars</h2>
              <p className="text-lg text-muted-foreground">
                An integrated approach that spans industries and disciplines
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="p-6 rounded-lg border border-border bg-background space-y-3">
                  <h3 className="text-xl font-bold text-primary">{pillar.title}</h3>
                  <p className="text-muted-foreground">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">How We Work</h2>
              <p className="text-lg text-muted-foreground">
                Principles that guide every decision and initiative
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Ecosystem */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">An Integrated Ecosystem</h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Rather than operating as siloed businesses, DMKV's verticals are designed to work together. Insights from publications inform product development. Film production capabilities enhance marketing narratives. Labs innovation feeds into all verticals.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-primary/20 bg-primary/5 space-y-4">
              <h3 className="text-xl font-bold">The DMKV Difference</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Multi-domain focus:</strong> Expertise across digital, AI, hardware, and creative domains</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Systems thinking:</strong> Each vertical strengthens the whole</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Execution excellence:</strong> Ideas backed by disciplined, scalable implementation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span><strong>Future-ready:</strong> Built for continuous innovation and adaptation</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Vision Statement */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-2xl md:text-3xl font-bold text-balance text-primary">
              &quot;The goal isn&apos;t just to build products. It&apos;s to build systems that redefine how people interact with technology—seamlessly, intelligently, and at scale.&quot;
            </p>
            <p className="text-muted-foreground">— The DMKV Vision</p>
          </div>
        </section>
    </div>
  )
}
