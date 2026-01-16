// import Link from 'next/link';
// import Image from 'next/image';

// export default function Home() {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-red-600 to-orange-500 text-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold mb-6">Welcome to FastFood</h1>
//           <p className="text-xl md:text-2xl mb-8">Delicious meals delivered to your doorstep in minutes!</p>
//           <Link href="/items" className="bg-yellow-400 text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 inline-block">
//             Order Now
//           </Link>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
//           <div className="max-w-3xl mx-auto text-center">
//             <p className="text-lg text-gray-700 mb-4">
//               FastFood has been serving delicious, quality meals since 2020. We pride ourselves on using fresh ingredients 
//               and providing exceptional service to our customers.
//             </p>
//             <p className="text-lg text-gray-700">
//               Our mission is to bring joy to every meal with our carefully crafted menu items and fast delivery service.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Items Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Featured Items</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { name: 'Classic Burger', emoji: '🍔', desc: 'Our signature burger' },
//               { name: 'Cheese Pizza', emoji: '🍕', desc: 'Hand-tossed perfection' },
//               { name: 'Crispy Fries', emoji: '🍟', desc: 'Golden and delicious' }
//             ].map((item, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition">
//                 <div className="text-6xl mb-4">{item.emoji}</div>
//                 <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="text-5xl mb-4">⚡</div>
//               <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
//               <p className="text-gray-600">Get your food in 30 minutes or less</p>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl mb-4">🌟</div>
//               <h3 className="text-xl font-bold mb-2">Quality Food</h3>
//               <p className="text-gray-600">Fresh ingredients, amazing taste</p>
//             </div>
//             <div className="text-center">
//               <div className="text-5xl mb-4">💰</div>
//               <h3 className="text-xl font-bold mb-2">Great Prices</h3>
//               <p className="text-gray-600">Affordable meals for everyone</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Menu Categories Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">Our Menu Categories</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//             {[
//               { name: 'Burgers', emoji: '🍔' },
//               { name: 'Pizza', emoji: '🍕' },
//               { name: 'Chicken', emoji: '🍗' },
//               { name: 'Sides', emoji: '🍟' },
//               { name: 'Wraps', emoji: '🌯' },
//               { name: 'Drinks', emoji: '🥤' },
//               { name: 'Desserts', emoji: '🍰' },
//               { name: 'Salads', emoji: '🥗' }
//             ].map((cat, idx) => (
//               <div key={idx} className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg transition">
//                 <div className="text-4xl mb-2">{cat.emoji}</div>
//                 <p className="font-semibold">{cat.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { name: 'John D.', text: 'Best burgers in town! Fast delivery and always hot.', rating: 5 },
//               { name: 'Sarah M.', text: 'Love the variety of options. Great quality food!', rating: 5 },
//               { name: 'Mike R.', text: 'Affordable prices and delicious meals. Highly recommend!', rating: 5 }
//             ].map((review, idx) => (
//               <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
//                 <div className="text-yellow-400 mb-2">{'⭐'.repeat(review.rating)}</div>
//                 <p className="text-gray-700 mb-4">"{review.text}"</p>
//                 <p className="font-bold">- {review.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-6">Ready to Order?</h2>
//           <p className="text-xl mb-8">Browse our full menu and get your favorite meals delivered now!</p>
//           <Link href="/items" className="bg-yellow-400 text-red-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-300 inline-block">
//             View Full Menu
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client'; // Required for Framer Motion
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="overflow-hidden font-sans text-slate-900">
      
      {/* Hero Section - Dynamic Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <Image 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
          alt="Hero Background"
          fill
          className="object-cover opacity-60 scale-105 animate-slow-zoom"
          priority
        />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 drop-shadow-2xl italic uppercase tracking-tighter"
          >
            Welcome to <span className="text-yellow-400">FastFood</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-3xl text-gray-100 mb-10 font-medium max-w-2xl mx-auto"
          >
            Delicious meals delivered to your doorstep in <span className="underline decoration-yellow-400">minutes!</span>
          </motion.p>
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href="/items" className="bg-red-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-red-700 transition shadow-2xl inline-block">
              🔥 Order Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div {...fadeInUp} className="md:w-1/2">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl transform -rotate-3">
                <Image 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1974"
                  alt="Chef cooking"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
            <motion.div {...fadeInUp} className="md:w-1/2">
              <h2 className="text-5xl font-black mb-8 border-l-8 border-red-600 pl-6 uppercase">Our Story</h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Since 2020, <span className="font-bold text-red-600">FastFood</span> has been more than just a kitchen. We are a hub for foodies who crave quality without the wait.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed italic">
                "Fresh ingredients aren't an option; they're our obsession."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Items - Modern Cards */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 uppercase tracking-tight">Top Sellers</h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              { name: 'Classic Burger', img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800', desc: 'Flame-grilled perfection' },
              { name: 'Cheese Pizza', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800', desc: 'Hand-tossed 4-cheese blend' },
              { name: 'Crispy Fries', img: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800', desc: 'Sea salt & rosemary seasoning' }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -15 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className="relative h-64">
                  <Image src={item.img} alt={item.name} fill className="object-cover" />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-black mb-2">{item.name}</h3>
                  <p className="text-gray-500 mb-4">{item.desc}</p>
                  <Link href="/items" className="text-red-600 font-bold hover:underline">Customize →</Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us - Icon Grid */}
      <section className="py-24 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: '⚡', title: 'Flash Delivery', text: '30 mins or it\'s on us' },
              { icon: '🌿', title: 'Farm Fresh', text: 'Organic produce daily' },
              { icon: '💎', title: 'Premium Taste', text: 'Chef-curated recipes' }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="text-center p-10 border-2 border-white/20 rounded-3xl backdrop-blur-sm"
              >
                <div className="text-6xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-black mb-2 uppercase">{feature.title}</h3>
                <p className="text-red-100">{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories - Scrolling Ribbon Style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-black text-center mb-16 uppercase italic">Explore Cravings</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Burgers', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400' },
              { name: 'Pizza', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400' },
              { name: 'Chicken', img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400' },
              { name: 'Sides', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=400' },
              { name: 'Wraps', img: 'https://images.unsplash.com/photo-1626700051175-656fc7bc30cc?w=400' },
              { name: 'Drinks', img: 'https://images.unsplash.com/photo-1544145945-f904253d0c7b?w=400' },
              { name: 'Desserts', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400' },
              { name: 'Salads', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400' }
            ].map((cat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 0.95 }}
                className="relative h-40 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image src={cat.img} alt={cat.name} fill className="object-cover transition duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-white font-black text-2xl uppercase tracking-widest">{cat.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - Immersive */}
      <section className="py-20 bg-yellow-400">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="container mx-auto px-4 text-center"
        >
          <h2 className="text-6xl font-black text-red-600 mb-8 uppercase tracking-tighter">Hungry yet?</h2>
          <Link href="/items" className="bg-red-600 text-white px-12 py-6 rounded-full text-2xl font-black hover:bg-black transition-all shadow-xl inline-block">
            LETS EAT! 🍴
          </Link>
        </motion.div>
      </section>
    </div>
  );
}