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
    return await apiClient.get('/api/items');
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
}

export default async function ItemsPage() {
  const items = await getItems();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Menu</h1>
      
      {items.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">No items available. Make sure the Express server is running.</p>
          <p className="text-gray-500">Run: cd server && npm install && npm start</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link href={`/items/${item.id}`} key={item.id}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer">
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <span className="text-red-600 font-bold text-lg">${item.price}</span>
                  </div>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
