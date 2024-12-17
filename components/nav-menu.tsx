'use client'

import { AlignRight, X } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Link from "next/link"
import { navLinks, redesSociales } from "@/lib/data"
import { GetInTouch } from '@/lib/buttons/getInTouch'

export function NavMenu() {
  return (
    <section className="z-10 w-full flex items-center justify-between py-6 px-8">
      <a href="/" className="text-white text-xl font-medium">
        Krea<span className="text-white font-bold">tivy</span>
      </a>
      <div className="flex items-center gap-8">
        <GetInTouch />
        <Sheet>
          <SheetTrigger asChild>
            <button className="text-white flex items-center gap-2">
              <AlignRight className="h-7 w-7" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[500px] bg-black border-0">
            <SheetHeader className="flex flex-row items-center justify-between border-b border-white/10 pb-4">
              <SheetTitle className="text-white text-xl"></SheetTitle>
              <SheetTrigger asChild aria-checked="false">
                <button className="text-white border-none">
                  <X className="h-5 w-5" />
                </button>
              </SheetTrigger>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-6">
              {
                navLinks.map((item, index) => (
                  <Link key={index} href={item.url} className="text-white text-4xl font-light hover:opacity-70 transition-opacity">
                    {item.label}
                  </Link>
                ))
              }
            </div>
            <div className="absolute bottom-8 left-6 right-6">
              <div className="flex flex-col gap-4 mb-8">
                <a href="mailto:hello@kreativy.studio" className="text-white underline hover:opacity-70 transition-opacity">
                  alvaroaburto71@gmail.com
                </a>
                <a href="tel:+31222433112" className="text-white underline hover:opacity-70 transition-opacity">
                  +506 6467 0470
                </a>
              </div>
              <div className="flex justify-end gap-6">
                {
                  redesSociales.map((item, index) => (
                    <a key={index} href={item.url} target="_blank" className="text-white hover:opacity-70 transition-opacity">
                      {item.label}
                    </a>
                  ))
                }
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  )
}

