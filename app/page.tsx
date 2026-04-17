import Link from 'next/link'
import { ArrowRight, Zap, BookOpen, Cpu, Film } from 'lucide-react'

export default function Home() {
  const verticals = [
    {
      title: 'House of Marketing',
      description: 'Digital media and growth systems designed to drive transformation at scale. Expertise in strategy, execution, and measurable impact.',
      icon: Zap,
      href: 'https://www.dmkvhouseofmarketing.com',
      external: true,
      color: 'from-indigo-600 to-violet-600'
    },
    {
      title: 'Publications',
      description: 'Curated knowledge and insights. Books that bridge the gap between theory and real-world application.',
      icon: BookOpen,
      href: '/publications',
      external: false,
      color: 'from-violet-600 to-fuchsia-600'
    },
    {
      title: 'Labs',
      description: 'AI and hardware innovation. Next-generation solutions for safety, connectivity, and intelligent mobility.',
      icon: Cpu,
      href: '/labs',
      external: false,
      color: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Production',
      description: 'Cinematic storytelling and visual creation. Transforming ideas into compelling narratives and experiences.',
      icon: Film,
      href: '/production',
      external: false,
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background grid pattern */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                  Welcome to DMKV
                </div>
                <h1 className="text-6xl md:text-8xl font-bold text-balance leading-tight">
                  Digital Media & Knowledge Ventures
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl text-balance">
                  Digital Media & Knowledge Ventures. Building intelligent systems at the intersection of technology, AI, and human experience. Multi-domain innovation with unified vision.
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Discover Our Vision
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/founder"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
                >
                  Meet the Founder
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Verticals Grid */}
        <section className="py-24 border-t border-border bg-card">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold">Our Ecosystem</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Four integrated verticals working together to create transformative solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {verticals.map((vertical) => {
                  const IconComponent = vertical.icon
                  const CardLink = vertical.external ? 'a' : Link
                  
                  return (
                    <CardLink
                      key={vertical.title}
                      href={vertical.href}
                      {...(vertical.external && { target: '_blank', rel: 'noopener noreferrer' })}
                      className="group p-8 rounded-lg border border-border bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 space-y-6"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${vertical.color} p-2.5 flex items-center justify-center`}>
                        <IconComponent className="text-white" size={20} />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                          {vertical.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {vertical.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Explore <ArrowRight size={18} />
                      </div>
                    </CardLink>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Ready to Explore?</h2>
              <p className="text-lg text-muted-foreground">
                Discover how DMKV is building the future across multiple domains of innovation
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Learn About DMKV
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
    </div>
  )
}
