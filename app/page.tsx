'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const chefs = [
  {
    name: 'David Liam',
    role: 'CEO',
    image: 'https://www.eu-startups.com/wp-content/uploads/2022/10/Screen-Shot-2022-10-07-at-10.20.42.png',
  },
  {
    name: 'Alex Mika',
    role: 'Executive Chef',
    image: 'https://i0.wp.com/www.foodandwinegazette.com/wp-content/uploads/2015/04/cuisiner_3.jpg',
  },
  {
    name: 'John Smith',
    role: 'Executive Chef',
    image: 'https://www.aperitif.com/wp-content/uploads/2025/08/Types-of-Chefs-1024x971.png',
  },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 1435,
    hours: 11,
    minutes: 38,
    seconds: 20,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return prev; 
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="overflow-hidden font-sans text-slate-900">
      
      {/* Hero Section - Dynamic Background */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden ">
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

      <section className="relative bg-[#0a0a0a] min-h-[500px] flex items-center overflow-hidden py-20">
      {/* ব্যাকগ্রাউন্ড টেক্সচার বা ডার্ক ইমেজ */}
      <div className="absolute inset-0 opacity-40">
        <Image 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80" 
          alt="background" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* টেক্সট এবং টাইমার পার্ট */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="md:w-1/2 text-white"
          >
            <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-8 leading-none">
              Get <span className="text-red-600">25%</span> <br /> Discount
            </h2>

            {/* টাইমার গ্রিড */}
            <div className="flex gap-4 mb-10">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Min', value: timeLeft.minutes },
                { label: 'Sec', value: timeLeft.seconds },
              ].map((unit, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 min-w-[80px] text-center">
                  <span className="block text-3xl font-black leading-none mb-1">
                    {String(unit.value).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 text-white px-10 py-4 rounded-xl font-black uppercase italic tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 shadow-xl shadow-red-600/20"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* খাবার এবং প্রাইস বাবল পার্ট */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            className="md:w-1/2 relative flex justify-center items-center"
          >
            {/* প্রাইস বাবল (Badge) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-10 right-10 md:right-20 z-20 bg-yellow-400 text-black w-24 h-24 rounded-full border-4 border-dashed border-black flex flex-col items-center justify-center font-black rotate-12"
            >
              <span className="text-[10px] uppercase">Special Price</span>
              <span className="text-xl">$10.99</span>
            </motion.div>

            {/* মেইন ইমেজ (Burger/Combo) */}
            <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
              <Image 
                src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=800&q=80" 
                alt="Featured Combo"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(255,0,0,0.3)]"
              />
            </div>

            {/* ডেকোরেটিভ ফ্রাইস বা অন্য এলিমেন্ট */}
            <div className="absolute -right-10 top-20 hidden lg:block opacity-80 rotate-45">
              <Image src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300&q=80" width={150} height={150} alt="fries" className="object-contain" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>

      {/* Chef section */}

      <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-yellow-500 text-xl">👨‍🍳</span>
            <span className="text-yellow-500 font-bold uppercase tracking-[0.2em] text-sm">
              Our Special Chefs
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none"
          >
            Introducing Our Culinary <br /> Masters
          </motion.h2>
        </div>

        {/* Chefs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {chefs.map((chef, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden bg-gray-100 rounded-xl shadow-md"
            >
              {/* Image Wrapper */}
              <div className="relative h-[450px] w-full transition-transform duration-500 group-hover:scale-105">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info Overlay (Visible on bottom like the image) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-white p-6 rounded-lg text-center shadow-xl transition-all duration-300 group-hover:bg-red-600">
                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight group-hover:text-white transition-colors">
                  {chef.name}
                </h3>
                <p className="text-gray-500 font-semibold uppercase text-xs tracking-widest mt-1 group-hover:text-yellow-400 transition-colors">
                  {chef.role}
                </p>
              </div>

              {/* Red Hover Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
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