import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { StarIcon } from 'lucide-react';

const reviews = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The Lost Prima Ballerina is an absolute masterpiece! The attention to ballet history and technique is remarkable.',
    date: '2024-01-15',
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen', 
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 4,
    comment: 'The Lost Prima Ballerina tells a compelling story with outstanding dance performances.',
    date: '2024-01-14',
  },
  {
    id: 3,
    user: {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'As a former dancer, The Lost Prima Ballerina perfectly captures the dedication and passion of ballet.',
    date: '2024-01-13',
  },
  {
    id: 4,
    user: {
      name: 'David Park',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The cinematography in The Lost Prima Ballerina is breathtaking. Each dance sequence is beautifully shot.',
    date: '2024-01-12',
  },
  {
    id: 5,
    user: {
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 4,
    comment: 'The Lost Prima Ballerina weaves an intricate story of redemption through dance. Simply mesmerizing!',
    date: '2024-01-11',
  },
  {
    id: 6,
    user: {
      name: 'James Taylor',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The historical accuracy in The Lost Prima Ballerina is impressive. A must-watch for ballet enthusiasts.',
    date: '2024-01-10',
  },
  {
    id: 7,
    user: {
      name: 'Anna Petrova',
      avatar: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The Lost Prima Ballerina perfectly portrays the competitive world of professional ballet.',
    date: '2024-01-09',
  },
  {
    id: 8,
    user: {
      name: 'Robert Kim',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 4,
    comment: 'The musical score in The Lost Prima Ballerina enhances every emotional moment. Brilliant production!',
    date: '2024-01-08',
  },
  {
    id: 9,
    user: {
      name: 'Maria Garcia',
      avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The Lost Prima Ballerina is a beautiful exploration of passion, sacrifice, and artistry.',
    date: '2024-01-07',
  },
  {
    id: 10,
    user: {
      name: 'Thomas Anderson',
      avatar: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 4,
    comment: 'The character development in The Lost Prima Ballerina is exceptional. You feel every triumph and setback.',
    date: '2024-01-06',
  },
  {
    id: 11,
    user: {
      name: 'Lisa Wong',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The Lost Prima Ballerina showcases the physical and emotional demands of ballet beautifully.',
    date: '2024-01-05',
  },
  {
    id: 12,
    user: {
      name: 'Paul Martinez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The costume design in The Lost Prima Ballerina is exquisite. Every detail tells a story.',
    date: '2024-01-04',
  },
  {
    id: 13,
    user: {
      name: 'Rachel Green',
      avatar: 'https://images.unsplash.com/photo-1544474650-7c98a5fc3cc7?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 4,
    comment: 'The Lost Prima Ballerina is an emotional journey through the golden age of classical ballet.',
    date: '2024-01-03',
  },
  {
    id: 14,
    user: {
      name: 'Daniel Lee',
      avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The supporting cast in The Lost Prima Ballerina brings depth to this compelling narrative.',
    date: '2024-01-02',
  },
  {
    id: 15,
    user: {
      name: 'Julia Smith',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1287&q=80',
    },
    rating: 5,
    comment: 'The Lost Prima Ballerina is a testament to the enduring power of classical dance. Absolutely magnificent!',
    date: '2024-01-01',
  }
];

export default function Reviews() {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-6">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b last:border-0 pb-6 last:pb-0">
            <div className="flex items-center space-x-4 mb-4">
              <Avatar>
                <AvatarImage src={review.user.avatar} />
                <AvatarFallback>{review.user.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="font-semibold">{review.user.name}</h3>
                <div className="flex items-center space-x-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <time className="text-sm text-muted-foreground">
                {new Date(review.date).toLocaleDateString()}
              </time>
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}