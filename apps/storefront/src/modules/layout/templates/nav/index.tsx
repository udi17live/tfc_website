import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"
import { Search, User } from "react-feather"

const desktopNavItems = [
  { label: "Men", href: "/store?category=men" },
  { label: "Women", href: "/store?category=women" },
  { label: "All", href: "/store" },
]

export default function Nav() {
  return (
    <div className="sticky top-0 inset-x-0 z-50">
      <header className="h-16 bg-white border-b border-[#E5E5E5]">
        <nav className="content-container flex items-center justify-between h-full">

          {/* Left — desktop nav links / mobile hamburger */}
          <div className="flex-1 flex items-center gap-x-1">
            {/* Mobile hamburger */}
            <div className="small:hidden">
              <SideMenu />
            </div>

            {/* Desktop nav */}
            <div className="hidden small:flex items-center gap-x-1">
              <LocalizedClientLink
                href="/"
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Home"
                data-testid="nav-home-link"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </LocalizedClientLink>

              {desktopNavItems.map(({ label, href }) => (
                <LocalizedClientLink
                  key={label}
                  href={href}
                  className="font-body text-xs uppercase tracking-widest px-3 py-2 hover:opacity-60 transition-opacity"
                  data-testid={`nav-${label.toLowerCase()}-link`}
                >
                  {label}
                </LocalizedClientLink>
              ))}
            </div>
          </div>

          {/* Center — wordmark */}
          <div className="flex items-center justify-center">
            <LocalizedClientLink
              href="/"
              className="font-display text-xl tracking-[0.2em] hover:opacity-70 transition-opacity whitespace-nowrap"
              data-testid="nav-store-link"
            >
              THE FACTORY COLLECTION
            </LocalizedClientLink>
          </div>

          {/* Right — icon actions */}
          <div className="flex-1 flex items-center justify-end gap-x-1">
            <LocalizedClientLink
              href="/search"
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Search"
              data-testid="nav-search-link"
            >
              <Search size={20} strokeWidth={1.5} />
            </LocalizedClientLink>

            <LocalizedClientLink
              href="/account"
              className="p-2 hover:opacity-60 transition-opacity"
              aria-label="Account"
              data-testid="nav-account-link"
            >
              <User size={20} strokeWidth={1.5} />
            </LocalizedClientLink>

            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  className="relative p-2 hover:opacity-60 transition-opacity"
                  aria-label="Shopping bag"
                  data-testid="nav-cart-link"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 01-8 0"/>
                  </svg>
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>

        </nav>
      </header>
    </div>
  )
}
