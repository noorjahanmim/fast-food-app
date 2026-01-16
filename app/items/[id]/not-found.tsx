import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Item Not Found</h2>
      <p className="text-gray-600 mb-8">Sorry, we couldn't find the item you're looking for.</p>
      <Link href="/items" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 inline-block">
        Back to Menu
      </Link>
    </div>
  );
}
