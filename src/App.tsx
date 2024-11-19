import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import Player from './components/Player';
import EpisodeList from './components/EpisodeList';
import EpisodeDetails from './components/EpisodeDetails';
import Recommendations from './components/Recommendations';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import { Button } from '@/components/ui/button';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen bg-background">
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50"
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </Button>
      <Header />
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
  );
}

export default App;