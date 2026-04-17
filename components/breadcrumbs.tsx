'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function Breadcrumbs() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => {
      const href = '/' + segments.slice(0, index + 1).join('/')
      const label = segment.charAt(0).toUpperCase() + segment.slice(1)
      return { label, href }
    })
  ]

  return (
    <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 border-b border-border">
      <ol className="flex items-center gap-2">
        {breadcrumbItems.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index === 0 ? (
              <Link
                href={item.href}
                className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <Home size={16} />
                {item.label}
              </Link>
            ) : index === breadcrumbItems.length - 1 ? (
              <>
                <ChevronRight size={16} className="text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </>
            ) : (
              <>
                <ChevronRight size={16} className="text-muted-foreground" />
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
