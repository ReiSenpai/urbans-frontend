import { Heart, ShoppingCart } from 'lucide-react'

export default function Favorites() {
  const favoriteItems = [
    { id: 1, title: 'Tactical Ripstop Cargo Pants', price: 98, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop&auto=format' },
    { id: 2, title: 'Micro-Logo Essential White Tee', price: 38, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format' },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex items-center gap-3 mb-8">
        <Heart size={28} className="text-[#e0f72f]" fill="#e0f72f" />
        <h2 className="text-3xl font-extrabold text-[#f0f0f2]" style={{ fontFamily: 'Outfit, sans-serif' }}>Tus Favoritos</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {favoriteItems.map((item) => (
          <div key={item.id} className="rounded-2xl overflow-hidden bg-[#16161a] border border-white/5 group">
            <div className="relative w-full aspect-square overflow-hidden bg-[#1e1e24]">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <button className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-red-400 hover:bg-black/70 transition-colors">
                <Heart size={14} fill="currentColor" />
              </button>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-medium text-white truncate mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{item.title}</h3>
              <p className="text-base font-bold text-[#e0f72f] mb-3">${item.price}</p>
              <button className="w-full h-10 rounded-xl bg-white/5 text-white text-sm font-semibold hover:bg-[#e0f72f] hover:text-black transition-all flex items-center justify-center gap-2">
                <ShoppingCart size={14} /> Al Carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}