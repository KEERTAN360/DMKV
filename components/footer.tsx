'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-xl font-bold text-primary">DMKV</div>
            <p className="text-sm text-muted-foreground">
              Building intelligent systems for the future. Innovation across multiple domains.
            </p>
          </div>

          {/* Verticals */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Verticals</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://www.dmkvhouseofmarketing.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  House of Marketing
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-muted-foreground hover:text-primary transition-colors">
                  Publications
                </Link>
              </li>
              <li>
                <Link href="/labs" className="text-muted-foreground hover:text-primary transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/production" className="text-muted-foreground hover:text-primary transition-colors">
                  Production
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/founder" className="text-muted-foreground hover:text-primary transition-colors">
                  Founder
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; 2025 DMKV - Digital Media & Knowledge Ventures. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              LinkedIn
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Twitter
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-xs">
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
