import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { apiClient } from '@/lib/api';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

async function getItem(id: string): Promise<Item | null> {
  try {
    return await apiClient.get(`/api/items/${id}`);
  } catch (error) {
    console.error('Error fetching item:', error);
    return null;
  }
}

export default async function ItemDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await getItem(id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Link href="/items" className="text-red-600 hover:text-red-700 mb-6 inline-block">
        ← Back to Menu
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8">
            <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm mb-4">
              {item.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{item.name}</h1>
            <p className="text-3xl text-red-600 font-bold mb-6">${item.price}</p>
            <p className="text-gray-700 text-lg mb-8">{item.description}</p>
            
            <div className="space-y-4">
              <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                Add to Cart
              </button>
              <Link href="/items" className="block w-full text-center border-2 border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition">
                Continue Shopping
              </Link>
            </div>

            <div className="mt-8 border-t pt-6">
              <h3 className="font-bold mb-2">Product Details</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Fresh ingredients</li>
                <li>• Prepared daily</li>
                <li>• Fast delivery available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
