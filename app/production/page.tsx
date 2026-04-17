import { Film, Clapperboard, PaletteIcon, Users, Lightbulb, Smartphone } from 'lucide-react'

export const metadata = {
  title: 'DMKV House of Production | Film & Visual Creation',
  description: 'Coming soon: DMKV&apos;s film production vertical. Cinematic storytelling and visual creation that transforms ideas into compelling narratives.',
}

export default function Production() {
  const capabilities = [
    {
      icon: Clapperboard,
      title: 'Cinematic Production',
      description: 'Full-service film and video production with a focus on visual storytelling and narrative excellence.'
    },
    {
      icon: PaletteIcon,
      title: 'Creative Direction',
      description: 'Artistic vision combined with technical excellence. Every frame designed with intention and clarity.'
    },
    {
      icon: Users,
      title: 'Collaborative Process',
      description: 'Working with creative teams, brands, and visionary directors to bring ideas to life.'
    },
    {
      icon: Lightbulb,
      title: 'Concept to Execution',
      description: 'From initial idea through final delivery. Strategic thinking applied to every production stage.'
    },
    {
      icon: Smartphone,
      title: 'Multi-Format Production',
      description: 'Content created for all platforms—cinema, broadcast, digital, and emerging media formats.'
    },
    {
      icon: Film,
      title: 'Brand Narratives',
      description: 'Creating visual stories that amplify brand messaging and connect emotionally with audiences.'
    }
  ]

  const philosophy = [
    {
      principle: 'Storytelling First',
      description: 'Every project begins with a compelling story. Visual execution follows naturally from narrative truth.'
    },
    {
      principle: 'Technical Excellence',
      description: 'Cutting-edge equipment, skilled cinematography, and meticulous post-production that respects the vision.'
    },
    {
      principle: 'Creative Freedom',
      description: 'Supporting artists and creators to take risks and deliver work that breaks conventions.'
    },
    {
      principle: 'Integrated Approach',
      description: 'Production informed by DMKV\'s broader ecosystem of intelligence, marketing expertise, and innovation.'
    }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5"></div>
          
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full py-20 space-y-12">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium">
                Coming Soon
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                  Cinematic <span className="text-orange-400">Storytelling</span>
                </h1>
                <p className="text-2xl font-semibold text-orange-300">
                  DMKV House of Production
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  Transforming ideas into compelling visual narratives. Film production that combines artistic vision with strategic thinking, creating content that resonates, engages, and endures.
                </p>
              </div>

              <div className="pt-8 space-y-4 max-w-2xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  DMKV House of Production brings cinematic excellence to every project. From concept through final delivery, we create visual stories that amplify narratives, elevate brands, and connect audiences to powerful ideas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Production Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                End-to-end filmmaking from vision to delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((capability, idx) => {
                const IconComponent = capability.icon
                return (
                  <div key={idx} className="p-8 rounded-lg border border-border bg-background space-y-4 hover:border-orange-400/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center">
                      <IconComponent className="text-orange-400" size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Visual Content That Matters</h2>
              
              <div className="space-y-6">
                <div className="space-y-3 p-8 rounded-lg border border-orange-500/20 bg-orange-500/5">
                  <h3 className="text-2xl font-bold text-orange-400">Feature Films</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Original storytelling and cinematic narratives. Projects that explore human experience, innovation, and vision. From indie productions to commercial ventures.
                  </p>
                </div>

                <div className="space-y-3 p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-2xl font-bold text-orange-400">Commercial & Brand Content</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Strategic visual storytelling that amplifies brand narratives. Commercials, documentaries, and branded content that connects audiences to ideas and values. Campaigns with impact.
                  </p>
                </div>

                <div className="space-y-3 p-8 rounded-lg border border-orange-500/20 bg-orange-500/5">
                  <h3 className="text-2xl font-bold text-orange-400">Digital & Web Content</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Content optimized for digital platforms. Streaming content, episodic narratives, and web series. Produced with understanding of modern viewing habits and platform requirements.
                  </p>
                </div>

                <div className="space-y-3 p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-2xl font-bold text-orange-400">Documentaries & Narratives</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Factual storytelling with artistic depth. Documentaries that explore ideas, innovation, and human stories. Every frame purposeful, every narrative authentic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Production Philosophy */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Our Philosophy</h2>
              <p className="text-lg text-muted-foreground">
                How we approach every project
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {philosophy.map((item, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-background space-y-4">
                  <h3 className="text-2xl font-bold text-orange-400">{item.principle}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Team */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold">Built by Creatives</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                DMKV House of Production is led by experienced filmmakers, cinematographers, editors, and creative directors. A team passionate about storytelling and committed to excellence in every frame.
              </p>
            </div>

            <div className="p-8 rounded-lg border border-orange-500/20 bg-orange-500/5 space-y-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-orange-400">Creative Direction</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every project starts with a clear artistic vision. We collaborate with directors, creators, and brands to define direction and maintain creative integrity throughout production.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-orange-400">Technical Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  State-of-the-art equipment, skilled cinematography, professional color grading, and meticulous sound design. Every technical element serves the story.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-orange-400">Collaborative Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We work as partners with our clients and collaborators. Your vision is our responsibility. Your success is our measure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Integration with DMKV */}
        <section className="py-24 border-t border-border bg-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
            <h2 className="text-4xl font-bold text-center">Part of the DMKV Ecosystem</h2>
            
            <p className="text-lg text-muted-foreground text-center leading-relaxed max-w-2xl mx-auto">
              DMKV House of Production doesn&apos;t operate in isolation. It&apos;s integrated with our other verticals—marketing expertise informs strategic storytelling, publication insights guide narrative, and innovation across DMKV shapes every creative decision.
            </p>

            <div className="p-8 rounded-lg border border-border bg-background space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                This creates a unique advantage: content produced by DMKV is grounded in strategic thinking, informed by market knowledge, and executed with technical precision. Every film is part of something larger—a vision to create media that doesn&apos;t just entertain, but transforms understanding and amplifies impact.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s Create Something Remarkable</h2>
              <p className="text-xl text-muted-foreground">
                Coming soon. DMKV House of Production is building a portfolio of compelling visual stories. More details and portfolio samples coming in 2025.
              </p>
            </div>

            <div className="inline-block px-6 py-3 rounded-lg bg-secondary border border-border text-foreground">
              <p className="font-semibold">Launching in 2025</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We&apos;re building something special. Follow DMKV for updates on our first productions and how we&apos;re redefining visual storytelling.
            </p>
          </div>
        </section>
    </div>
  )
}
