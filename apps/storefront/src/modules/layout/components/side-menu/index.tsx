"use client"

import { Transition } from "@headlessui/react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { X } from "react-feather"
import { Fragment, useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/store?category=men" },
  { label: "Women", href: "/store?category=women" },
  { label: "All", href: "/store" },
]

const SideMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center justify-center p-2 -ml-2 hover:opacity-60 transition-opacity"
        aria-label="Open menu"
        data-testid="nav-menu-button"
      >
        <span className="font-display text-xl tracking-widest leading-none">MENU</span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={() => setOpen(false)}
          data-testid="side-menu-backdrop"
        />
      )}

      <Transition
        show={open}
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-150"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div
          className="fixed top-0 left-0 h-full w-72 bg-white z-50 flex flex-col"
          data-testid="nav-menu-popup"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-[#E5E5E5]">
            <span className="font-display text-xl tracking-widest">TFC</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 hover:opacity-60 transition-opacity"
              aria-label="Close menu"
              data-testid="close-menu-button"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="flex flex-col gap-1 px-6 py-8">
            {navItems.map(({ label, href }) => (
              <LocalizedClientLink
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl tracking-widest py-2 hover:opacity-50 transition-opacity"
                data-testid={`${label.toLowerCase()}-link`}
              >
                {label.toUpperCase()}
              </LocalizedClientLink>
            ))}
          </nav>

          <div className="mt-auto px-6 py-8 border-t border-[#E5E5E5]">
            <LocalizedClientLink
              href="/account"
              onClick={() => setOpen(false)}
              className="font-body text-sm uppercase tracking-widest hover:opacity-60 transition-opacity"
            >
              Account
            </LocalizedClientLink>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default SideMenu
