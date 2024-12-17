'use client'

import { useEffect, useRef } from 'react'

export function MouseFollower({ 
  speed = 0.2, 
  size = 56, 
  color = 'white', 
  emoji = '' 
}) {
  const followerRef = useRef(null)

  useEffect(() => {
    let ctx: gsap.Context

    const initGSAP = async () => {
      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        const follower = followerRef.current
        if (!follower) return

        gsap.set(follower, { xPercent: -50, yPercent: -50 })

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const mouse = { x: pos.x, y: pos.y }

        const xSet = gsap.quickSetter(follower, "x", "px")
        const ySet = gsap.quickSetter(follower, "y", "px")

        let rafId: number | null
        window.addEventListener("mousemove", e => {
          if (rafId) return
          rafId = requestAnimationFrame(() => {
            mouse.x = e.x
            mouse.y = e.y
            rafId = null
          })
        })

        gsap.ticker.add(() => {
          pos.x += (mouse.x - pos.x) * (1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()))
          pos.y += (mouse.y - pos.y) * (1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio()))
          xSet(pos.x)
          ySet(pos.y)
        })
      })
    }

    initGSAP()

    return () => ctx?.revert()
  }, [speed])

  return (
    <div
      ref={followerRef}
      className="hidden sm:flex pointer-events-none fixed top-0 left-0 z-50 items-center justify-center"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        borderRadius: '50%',
        mixBlendMode: 'difference',
      }}
    >
      <span 
        style={{
          fontSize: `${size / 2}px`, // La mitad del tamaño del contenedor
          display: 'block',
          lineHeight: 1,
        }}
      >
        {emoji}
      </span>
    </div>
  )
}
