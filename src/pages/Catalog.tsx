import { useState } from 'react'
import { ShoppingCart, Filter } from 'lucide-react'

// Simulamos una base de datos más grande
const ALL_PRODUCTS = [
  { id: 1, title: 'Tactical Ripstop Cargo', price: 98, tag: 'HOT', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop' },
  { id: 2, title: 'Oversized Void Hoodie', price: 124, tag: 'NEW', image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&h=400&fit=crop' },
  { id: 3, title: 'Linen Boxy Shirt', price: 72, image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop' },
  { id: 4, title: 'Suede Block Slip-On', price: 142, tag: 'SALE', image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&h=400&fit=crop' },
  { id: 5, title: 'Reflective Windbreaker', price: 215, image: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=400&h=400&fit=crop' },
  { id: 6, title: 'Micro-Logo White Tee', price: 38, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop' },
  { id: 7, title: 'Monochrome Snapback', price: 48, tag: 'RESTOCK', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop' },
  { id: 8, title: 'Carbon Boost Runner', price: 189, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop' },
]

export default function Catalog({ onAddToCart }: { onAddToCart: () => void }) {
  const [filter, setFilter] = useState('Todos')

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-[#f0f0f2]" style={{ fontFamily: 'Outfit, sans-serif' }}>Catálogo</h2>
          <p className="text-sm text-[#6b6b80] mt-1">Explora toda nuestra colección ({ALL_PRODUCTS.length} productos)</p>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <Filter size={16} className="text-[#6b6b80] mr-2" />
          {['Todos', 'Polos', 'Pantalones', 'Sneakers', 'Accesorios'].map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-4 h-9 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${filter === cat ? 'bg-[#e0f72f] text-black' : 'bg-[#16161a] text-[#a0a0b0] hover:bg-white/10 border border-white/5'}`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {ALL_PRODUCTS.map((product) => (
          <div key={product.id} className="rounded-2xl overflow-hidden bg-[#16161a] border border-white/5 group hover:border-white/20 transition-all">
            <div className="relative w-full aspect-square overflow-hidden bg-[#1e1e24]">
              <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              {product.tag && <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#e0f72f] text-black">{product.tag}</span>}
            </div>
            <div className="p-4">
              <h3 className="text-sm font-medium text-white truncate mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{product.title}</h3>
              <p className="text-base font-bold text-[#e0f72f] mb-4">${product.price}</p>
              <button onClick={onAddToCart} className="w-full h-10 rounded-xl bg-white/5 text-white text-sm font-semibold hover:bg-[#e0f72f] hover:text-black transition-all flex items-center justify-center gap-2">
                <ShoppingCart size={14} /> Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}