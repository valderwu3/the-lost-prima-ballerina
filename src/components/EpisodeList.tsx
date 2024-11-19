import { Card } from '@/components/ui/card';

const episodes = [
  {
    id: 1,
    title: 'Episode 1: The Beginning',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=2069&q=80',
    duration: '45:00',
  },
  {
    id: 2,
    title: 'Episode 2: The Journey',
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2071&q=80',
    duration: '42:30',
  },
  {
    id: 3,
    title: 'Episode 3: The Challenge',
    thumbnail: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&w=2070&q=80',
    duration: '44:15',
  },
];

export default function EpisodeList() {
  return (
    <Card className="p-4">
      <h2 className="text-2xl font-bold mb-4">Episodes</h2>
      <div className="space-y-4">
        {episodes.map((episode) => (
          <div
            key={episode.id}
            className="flex space-x-4 hover:bg-accent/50 p-2 rounded-lg cursor-pointer transition-colors"
          >
            <div className="relative w-32 h-20">
              <img
                src={episode.thumbnail}
                alt={episode.title}
                className="rounded-md object-cover w-full h-full"
              />
              <span className="absolute bottom-1 right-1 bg-black/75 text-white text-xs px-1 rounded">
                {episode.duration}
              </span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold">{episode.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}