import { Cpu, Wifi, Shield, Navigation, Zap, Eye } from 'lucide-react'

export const metadata = {
  title: 'DMKV Labs | Next-Generation Riding Intelligence',
  description: 'Coming soon: A revolutionary riding companion integrating AI, safety, and connectivity for modern mobility.',
}

export default function Labs() {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Intelligence',
      description: 'Advanced sensors and machine learning seamlessly integrated to understand road conditions, predict hazards, and provide real-time assistance.'
    },
    {
      icon: Shield,
      title: 'Safety First Design',
      description: 'Critical moments are captured automatically. Built with deep understanding of safety concerns, from collision detection to emergency response.'
    },
    {
      icon: Wifi,
      title: 'Seamless Connectivity',
      description: 'Hands-free interaction without distraction. Stay connected while keeping your focus entirely on the road.'
    },
    {
      icon: Navigation,
      title: 'Situational Awareness',
      description: 'Enhanced intelligence that adapts to dynamic road environments—from dense urban traffic to open highways.'
    },
    {
      icon: Eye,
      title: 'Intelligent Recording',
      description: 'Smart recording that captures what matters. Evidence preservation without constant oversight.'
    },
    {
      icon: Zap,
      title: 'Intuitive Controls',
      description: 'Compact rider-first design that delivers advanced features without compromising comfort or usability.'
    }
  ]

  const benefits = [
    {
      title: 'Stay Focused',
      description: 'Technology that works in the background so you can concentrate entirely on riding.'
    },
    {
      title: 'Stay Connected',
      description: 'Effortless communication without taking your hands off the handlebars or eyes off the road.'
    },
    {
      title: 'Stay Aware',
      description: 'Intelligent assistance that adapts to every journey, from daily commutes to long-distance rides.'
    },
    {
      title: 'Stay Confident',
      description: 'Every ride becomes smarter, every decision more informed, and every moment more secure.'
    }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center border-b border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
          
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full py-20 space-y-12">
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                Coming Soon
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
                  The Next-Generation Riding Companion
                </h1>
                <p className="text-2xl text-primary font-semibold">
                  Intelligence. Safety. Connection.
                </p>
                <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                  A revolutionary device seamlessly integrating artificial intelligence, safety features, and connectivity into the riding experience. Built for the evolving needs of modern riders.
                </p>
              </div>

              <div className="pt-8 space-y-4 max-w-2xl">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  More than just an accessory, it transforms the riding experience into one that is aware, responsive, and secure. Every journey becomes smarter, every decision more informed, and every ride more confident, setting a new standard for how technology supports human movement on the road.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-24 border-b border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Core Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced engineering with a focus on practical rider needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon
                return (
                  <div key={idx} className="p-8 rounded-lg border border-border bg-background space-y-4 hover:border-primary/30 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <IconComponent className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* The Vision */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Engineered for Modern Mobility</h2>
              
              <div className="space-y-6">
                <div className="space-y-3 p-8 rounded-lg border border-primary/20 bg-primary/5">
                  <h3 className="text-2xl font-bold text-primary">Real-Time Awareness</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Advanced sensing that understands road conditions, traffic patterns, and potential hazards. Intelligent automation that enhances decision-making without taking control.
                  </p>
                </div>

                <div className="space-y-3 p-8 rounded-lg border border-border bg-card">
                  <h3 className="text-2xl font-bold text-primary">Safety Without Compromise</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Built with deep understanding of modern mobility challenges. Critical moments are captured automatically. Communication becomes seamless without distraction. Every feature is designed around one principle: keep the rider focused and safe.
                  </p>
                </div>

                <div className="space-y-3 p-8 rounded-lg border border-primary/20 bg-primary/5">
                  <h3 className="text-2xl font-bold text-primary">Adaptive Intelligence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    The riding companion adapts to dynamic road environments. Whether navigating dense urban traffic or cruising on open highways, it delivers relevant intelligence tailored to context and conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Rider Experience */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">The Rider Experience</h2>
              <p className="text-lg text-muted-foreground">
                Technology that enhances, never intrudes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="p-8 rounded-lg border border-border bg-background space-y-4">
                  <h3 className="text-2xl font-bold text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
            <h2 className="text-4xl font-bold text-center">Design Philosophy</h2>

            <div className="space-y-8">
              <div className="p-8 rounded-lg border border-border bg-secondary space-y-4">
                <h3 className="text-2xl font-bold">Compact, Rider-First Design</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every component is engineered with the rider in mind. Nothing extraneous. Every feature has purpose. Designed to integrate seamlessly into existing riding gear and workflows.
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-secondary space-y-4">
                <h3 className="text-2xl font-bold">Intelligent Automation</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Smart recording that activates when needed. Hands-free controls that understand context. Situational awareness that adapts to your environment. Technology that thinks so you don&apos;t have to.
                </p>
              </div>

              <div className="p-8 rounded-lg border border-border bg-secondary space-y-4">
                <h3 className="text-2xl font-bold">Security & Privacy</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Built with privacy-first architecture. Your data is yours. Communications are secure. Recordings are protected. Trust is fundamental to everything we build.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 border-t border-border bg-primary/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">The Future of Riding Intelligence</h2>
              <p className="text-xl text-muted-foreground">
                Coming soon. Stay tuned for updates on availability, specifications, and early access.
              </p>
            </div>

            <div className="inline-block px-6 py-3 rounded-lg bg-secondary border border-border text-foreground">
              <p className="font-semibold">Launching in 2025</p>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              DMKV Labs is building the next generation of rider companions. Intelligence. Safety. Connection. Everything a modern rider needs.
            </p>
          </div>
        </section>
    </div>
  )
}
