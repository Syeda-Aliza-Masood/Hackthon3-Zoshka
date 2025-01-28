"use client"

import { useEffect, useState } from "react"
import { Eye, ShoppingCart, Store, Clock } from "lucide-react"

interface StatProps {
  endValue: number
  label: string
  icon: React.ReactNode
}

function AnimatedStat({ endValue, label, icon }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // Animation duration in milliseconds
    const steps = 60 // Number of steps in the animation
    const stepValue = endValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(Math.floor(stepValue * current), endValue))

      if (current >= steps) {
        clearInterval(timer)
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [endValue])

  return (
    <div className="flex flex-col items-center p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <div className="p-3 rounded-full bg-[#D4C485] text-white mb-4">{icon}</div>
      <h2 className="text-4xl font-bold mb-2 tabular-nums">{count}</h2>
      <p className="text-gray-600 uppercase tracking-wider text-sm">{label}</p>
    </div>
  )
}

export default function StatsSection() {
  const stats = [
    { value: 22070, label: "Creativity Fuel", icon: <Eye className="w-6 h-6" /> },
    { value: 450, label: "Happy Clients", icon: <ShoppingCart className="w-6 h-6" /> },
    { value: 700, label: "All Products", icon: <Store className="w-6 h-6" /> },
    { value: 5605, label: "Hours Spent", icon: <Clock className="w-6 h-6" /> },
  ]

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{
        backgroundImage: `url('/counter.jpg')`, // Ensure the image is placed in the public directory
        backgroundSize: 'cover', // Ensure the background covers the entire area
        backgroundPosition: 'center center', // Position the image at the center
        backgroundRepeat: 'no-repeat', // Prevent repetition of the background image
      }}
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} endValue={stat.value} label={stat.label} icon={stat.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}
