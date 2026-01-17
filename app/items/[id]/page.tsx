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
    const data = await apiClient.get(`/api/items/${id}`);
    return data;
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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <Link href="/items" className="text-red-600 hover:text-red-700 mb-8 inline-flex items-center font-semibold">
          <span className="mr-2">←</span> Back to Menu
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative h-96 md:h-full bg-gray-200 min-h-96">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {item.category}
                </span>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{item.name}</h1>
                
                <div className="mb-6 pb-6 border-b-2 border-gray-200">
                  <p className="text-4xl font-bold text-red-600">${item.price.toFixed(2)}</p>
                  <p className="text-gray-600 mt-2">Price per serving</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">Description</h2>
                  <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      Fresh ingredients sourced daily
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      Prepared to order
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      Fast and reliable delivery available
                    </li>
                    <li className="flex items-center text-gray-700">
                      <span className="text-red-600 mr-3 text-xl">✓</span>
                      Satisfaction guaranteed
                    </li>
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t-2 border-gray-200">
                <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-bold text-lg hover:bg-red-700 transition transform hover:scale-105">
                  🛒 Add to Cart
                </button>
                <Link href="/items" className="block w-full text-center border-2 border-red-600 text-red-600 py-3 px-6 rounded-lg font-bold hover:bg-red-50 transition">
                  Continue Shopping
                </Link>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">💡 Tip:</span> This item is available for dine-in, takeout, and delivery.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Related Items Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">You might also like</h2>
          <p className="text-gray-600 mb-8">Explore more items in the {item.category} category from our menu.</p>
          <Link href="/items" className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
            View Full Menu
          </Link>
        </div>
      </div>
    </div>
  );
}
