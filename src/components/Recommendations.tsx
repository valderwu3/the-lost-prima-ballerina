import { Card } from '@/components/ui/card';

const recommendations = [
  {
    id: 1,
    title: 'Bridgerton',
    image: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=2070&q=80',
    rating: '8.3',
  },
  {
    id: 2,
    title: 'The Queen\'s Gambit',
    image: 'https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&w=2069&q=80',
    rating: '8.6',
  },
  {
    id: 3,
    title: 'Downton Abbey',
    image: 'https://images.unsplash.com/photo-1515315230580-4299548a2e45?auto=format&fit=crop&w=2071&q=80',
    rating: '8.7',
  },
  {
    id: 4,
    title: 'The Crown',
    image: 'https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&fit=crop&w=2070&q=80', 
    rating: '8.8',
  },
  {
    id: 5,
    title: 'Pride and Prejudice',
    image: 'https://images.unsplash.com/photo-1533050487297-09b450131914?auto=format&fit=crop&w=2070&q=80',
    rating: '8.5',
  },
  {
    id: 6,
    title: 'Little Women',
    image: 'https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?auto=format&fit=crop&w=2070&q=80',
    rating: '8.4',
  },
  {
    id: 7,
    title: 'Emma',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?auto=format&fit=crop&w=2070&q=80',
    rating: '8.2',
  },
];

export default function Recommendations() {
  return (
    <Card className="p-4">
      <h2 className="text-2xl font-bold mb-4">You May Also Like</h2>
      <div className="grid gap-4">
        {recommendations.map((show) => (
          <div
            key={show.id}
            className="flex space-x-4 hover:bg-accent/50 p-2 rounded-lg cursor-pointer transition-colors"
          >
            <img
              src={show.image}
              alt={show.title}
              className="w-24 h-32 object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold">{show.title}</h3>
              <p className="text-sm text-muted-foreground">Rating: {show.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}