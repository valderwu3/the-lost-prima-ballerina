'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Player from '@/components/Player'
import EpisodeList from '@/components/EpisodeList'
import EpisodeDetails from '@/components/EpisodeDetails'
import Recommendations from '@/components/Recommendations'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import Asterra from '@/components/Asterra'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-1000"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <div className="relative">
        <Asterra />
        <Header />
      </div>
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Player />
            <EpisodeDetails />
            <Reviews />
          </div>
          <div className="space-y-8">
            <EpisodeList />
            <Recommendations />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
} 