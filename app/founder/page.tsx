export const metadata = {
  title: 'Keertan Vijaykumar - Founder & Vision Architect | DMKV',
  description: 'Meet Keertan Vijaykumar, founder of DMKV. Building at the intersection of technology, AI, and real-world impact.',
}

export default function Founder() {
  const sections = [
    {
      title: 'The Mind Behind the Vision',
      content: 'Keertan Vijaykumar is a new-generation entrepreneur building at the intersection of technology, intelligence, and real-world impact. As the founder of Digital Media & Knowledge Ventures (DMKV), he is shaping a multi-domain ecosystem designed to redefine how digital systems, artificial intelligence, and hardware innovation come together. His work is driven by a clear objective—to build solutions that are not just functional, but transformative at scale.'
    },
    {
      title: 'A Vision Beyond One Industry',
      content: 'Unlike traditional founders who focus on a single vertical, Keertan\'s approach is expansive and systems-driven. DMKV is built as a multi-pipeline venture, integrating: Digital Media & Growth Systems, Artificial Intelligence & Smart Technologies, and Hardware Innovation & Safety Solutions. This structure allows the company to move fluidly across industries while maintaining a unified vision—creating intelligent systems that enhance everyday human experiences.'
    },
    {
      title: 'From Execution to Ecosystem Building',
      content: 'Keertan\'s journey began with hands-on execution—working deeply in digital marketing, technology development, and product ideation. Over time, this evolved into something larger: the creation of a scalable, innovation-driven ecosystem. Today, he leads DMKV with a focus on: Building high-impact products, Designing efficient, scalable systems, and Driving long-term strategic growth. His transition from operator to architect reflects a core belief: great companies are built on systems, not just ideas.'
    }
  ]

  const attributes = [
    {
      label: 'Technical Depth',
      description: 'Pursuing Information Science & Engineering—combining technical knowledge with business acumen'
    },
    {
      label: 'Entrepreneurial Mindset',
      description: 'Structured thinking with practical execution. Ideas backed by disciplined implementation'
    },
    {
      label: 'Systems Architect',
      description: 'Designing scalable solutions that bridge concept and real-world execution'
    },
    {
      label: 'Innovation Focus',
      description: 'Active exploration of AI systems, smart mobility, and intelligent automation'
    }
  ]

  const philosophy = [
    'Execution over theory',
    'Speed with direction',
    'Simplicity in systems',
    'Consistency in growth'
  ]

  return (
    <div className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="py-24 border-b border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-center">
              <div className="flex items-center justify-center">
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <div className="absolute inset-0 rounded-full border-4 border-border/50"></div>
                  <img 
                    src="/keertan.jpg" 
                    alt="Keertan Vijaykumar" 
                    className="w-full h-full object-cover rounded-full border-8 border-background shadow-2xl"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-bold tracking-[0.2em] text-muted-foreground uppercase">
                    FOUNDER
                  </p>
                  <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
                    Keertan Vijaykumar
                  </h1>
                </div>
                <p className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed max-w-2xl">
                  A visionary leader passionate about digital innovation, transforming brands through strategic marketing and creative excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16">
            {/* Vision Introduction */}
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-3xl font-bold text-primary">{section.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            {/* Engineering + Entrepreneurship */}
            <div className="space-y-4 p-8 rounded-lg border border-border bg-secondary">
              <h2 className="text-3xl font-bold">Engineering Perspective, Entrepreneurial Mindset</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing a degree in Information Science and Engineering, Keertan combines technical depth with business clarity. This dual perspective enables him to:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Approach problems with structured thinking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Design solutions that are both practical and scalable</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span className="text-foreground">Bridge the gap between concept and execution</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-4">
                His work reflects a rare balance—engineering precision with entrepreneurial ambition.
              </p>
            </div>

            {/* Core Attributes */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">How He Works</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {attributes.map((attr, idx) => (
                  <div key={idx} className="p-6 rounded-lg border border-border bg-background space-y-3">
                    <h3 className="text-lg font-bold text-primary">{attr.label}</h3>
                    <p className="text-muted-foreground">{attr.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Innovation Focus */}
            <div className="space-y-4 p-8 rounded-lg border border-primary/20 bg-primary/5">
              <h2 className="text-3xl font-bold">Innovation as a Constant</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At the core of Keertan&apos;s work is a relentless focus on innovation. He is actively exploring and building solutions in areas such as:
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">AI-powered wearable systems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">Smart mobility and rider safety technologies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">•</span>
                  <span className="text-foreground">Intelligent digital platforms and automation systems</span>
                </li>
              </ul>
              <p className="text-muted-foreground pt-4">
                These efforts are not isolated projects—they are part of a larger vision to position DMKV as a future-ready technology brand.
              </p>
            </div>

            {/* Books & Publications */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Books & Publications</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keertan Vijaykumar has authored and contributed to multiple publications that reflect his curiosity, research-driven mindset, and commitment to knowledge creation. His work spans across technology, innovation, and practical problem-solving, with a focus on simplifying complex ideas and making them accessible.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through his writing, he extends his impact beyond products—bridging the gap between knowledge and real-world application, and reinforcing his vision of building systems that are both intelligent and meaningful.
              </p>
              <div className="pt-4 space-y-2">
                <p className="text-muted-foreground">Published works available on Amazon India</p>
              </div>
            </div>

            {/* Leadership Philosophy */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Leadership Philosophy</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keertan leads with clarity, speed, and intent. His leadership style is defined by:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {philosophy.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-secondary border border-border text-center">
                    <p className="font-semibold text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed pt-4">
                He believes that sustainable success comes from clear thinking, disciplined execution, and the ability to adapt quickly.
              </p>
            </div>

            {/* Vision for Future */}
            <div className="space-y-4 p-8 rounded-lg border border-border bg-card">
              <h2 className="text-3xl font-bold">Building What&apos;s Next</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Keertan Vijaykumar represents a new wave of founders—those who are not limited by industry boundaries, but are focused on building integrated, intelligent systems for the future.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through DMKV, his mission is to create technology that:
              </p>
              <ul className="space-y-2 pt-4">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Solves real-world problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Scales across markets</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span className="text-foreground">Leaves a lasting impact</span>
                </li>
              </ul>
            </div>

            {/* Closing Quote */}
            <div className="text-center space-y-6 py-12 border-t border-border">
              <p className="text-2xl md:text-3xl font-bold text-balance text-primary italic">
                &quot;The goal isn&apos;t just to build products. It&apos;s to build systems that redefine how people interact with technology—seamlessly, intelligently, and at scale.&quot;
              </p>
              <p className="text-muted-foreground">— Keertan Vijaykumar, Founder & Vision Architect, DMKV</p>
            </div>
          </div>
        </section>
    </div>
  )
}
