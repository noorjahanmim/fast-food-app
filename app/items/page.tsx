import Link from 'next/link';
import Image from 'next/image';
import { apiClient } from '@/lib/api';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

async function getItems(): Promise<Item[]> {
  try {
    const data = await apiClient.get('/api/items');
    return data || [];
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">No items available. Make sure the Express server is running.</p>
          <p className="text-gray-500">Run: cd server && npm install && npm start</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative h-80 bg-gray-200">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl text-black font-bold">{item.name}</h2>
                  <span className="text-red-600 font-bold text-lg">${item.price}</span>
                </div>
                <p className="text-black mb-3 flex-grow">{item.description}</p>
                <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-4 w-fit">
                  {item.category}
                </span>
                <Link href={`/items/${item.id}`} className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition text-center">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
