import { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MoreHorizontal, ArrowRight, Zap, ShoppingCart, X, Send } from 'lucide-react'
import { Category } from '../App'

// ... (Mantén aquí tus interfaces Product, INITIAL_PRODUCTS, SkeletonCard, ProductCard igual que antes) ...
interface Product { id: number; title: string; price: number; originalPrice?: number; tag?: string; image: string; hidden: boolean; category: Category; }
const INITIAL_PRODUCTS: Product[] = [
  { 
    id: 1, category: 'Sale', title: 'Air Rift Carbon Boost Runner', price: 189, originalPrice: 230, tag: 'SALE', 
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 2, category: 'Hombre', title: 'Oversized Void Hoodie Black', price: 124, tag: 'NEW', 
    image: 'https://images.unsplash.com/photo-1581655353466-d5ad6765dd37?q=80&w=1170&auto=format', hidden: false 
  },
  { 
    id: 3, category: 'Hombre', title: 'Tactical Ripstop Cargo Pants', price: 98, 
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 4, category: 'Drops', title: 'Monochrome 6-Panel Snapback', price: 48, tag: 'HOT', 
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  
  // ─── Nuevos productos para Mujer ───
  { 
    id: 5, category: 'Mujer', title: 'Linen Boxy Short-Sleeve Shirt', price: 72, 
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 6, category: 'Hombre', title: 'Micro-Logo Essential White Tee', price: 38, tag: 'NEW', 
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 7, category: 'Mujer', title: 'High-Waist Wide Leg Trousers', price: 85, 
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 8, category: 'Mujer', title: 'Cropped Puffer Jacket Pearl', price: 150, originalPrice: 180, tag: 'SALE', 
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format', hidden: false 
  },
  { 
    id: 9, category: 'Mujer', title: 'Seamless Ribbed Knit Bralette', price: 28, tag: 'HOT', 
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?w=400&h=400&fit=crop&auto=format', hidden: false 
  }
]

function ProductCard({ product, onAddToCart, onDismiss, openDropdown, setOpenDropdown }: any) {
  const isOpen = openDropdown === product.id
  return (
    <div className="card-reveal flex-none w-52 md:w-60 rounded-2xl overflow-hidden bg-[#16161a] border border-white/5 hover:border-white/15 transition-all duration-300 group" style={{ animationDelay: `${product.id * 60}ms` }}>
      <div className="relative w-full aspect-square overflow-hidden bg-[#1e1e24]">
        <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        {product.tag && <span className="absolute top-2.5 left-2.5 text-[10px] font-semibold tracking-widest px-2 py-0.5 rounded-full bg-[#e0f72f] text-[#0c0c0e]">{product.tag}</span>}
      </div>
      <div className="p-3">
        <h3 className="text-sm font-medium text-[#f0f0f2] truncate mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>{product.title}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-base font-bold text-[#e0f72f]">${product.price}</span>
          {product.originalPrice && <span className="text-xs text-[#6b6b80] line-through">${product.originalPrice}</span>}
        </div>
        <button onClick={onAddToCart} className="btn-primary-glow w-full h-[44px] rounded-xl bg-[#e0f72f] text-[#0c0c0e] text-sm font-semibold hover:bg-[#d4f020] active:scale-95 transition-all flex items-center justify-center gap-1.5"><ShoppingCart size={15} /> Añadir al carrito</button>
      </div>
    </div>
  )
}

function HeroBanner({ onCategoryClick }: { onCategoryClick: (c: Category) => void }) {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1400&h=400&fit=crop&auto=format" alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0e] via-[#0c0c0e]/80 to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e0f72f]/10 border border-[#e0f72f]/20 mb-4"><Zap size={12} className="text-[#e0f72f]" /><span className="text-xs font-semibold text-[#e0f72f] tracking-wider uppercase">AI-Powered Feed</span></div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.05] tracking-tight text-[#f0f0f2] mb-3" style={{ fontFamily: 'Outfit, sans-serif' }}>Estilo que te<span className="text-[#e0f72f]"> entiende.</span></h1>
          <div className="flex flex-wrap items-center gap-3">
            <button onClick={() => { onCategoryClick('Drops'); document.getElementById('smart-feed')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary-glow h-11 px-6 rounded-xl bg-[#e0f72f] text-[#0c0c0e] text-sm font-bold transition-all hover:bg-[#d4f020]">Explorar ahora</button>
            <button onClick={() => navigate('/catalogo')} className="h-11 px-5 rounded-xl border border-white/10 text-sm font-medium text-[#a0a0b0] hover:text-white hover:border-white/25 transition-all">Ver colecciones</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home({ activeCategory, setActiveCategory, searchQuery, onAddToCart }: any) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS)
  const carouselRef = useRef<HTMLDivElement>(null)
  const scroll = (dir: 'left' | 'right') => carouselRef.current?.scrollBy({ left: dir === 'right' ? 280 : -280, behavior: 'smooth' })
  const visibleProducts = products.filter((p) => p.category === activeCategory || activeCategory === 'all')

  return (
    <>
      <HeroBanner onCategoryClick={(c) => setActiveCategory(c)} />

      {/* ── Smart Feed ── */}
      <section id="smart-feed" className="max-w-7xl mx-auto px-4 py-10 scroll-mt-24">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold text-[#f0f0f2]" style={{ fontFamily: 'Outfit, sans-serif' }}>{activeCategory !== 'all' ? activeCategory : 'Seleccionado para ti'}</h2>
          <div className="flex gap-2">
            <button onClick={() => scroll('left')} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[#a0a0b0] hover:text-white"><ChevronLeft size={18} /></button>
            <button onClick={() => scroll('right')} className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-[#a0a0b0] hover:text-white"><ChevronRight size={18} /></button>
          </div>
        </div>
        <div className="carousel-scroll flex gap-4 overflow-x-auto pb-4 snap-x" ref={carouselRef}>
          {visibleProducts.map((product) => (
            <div key={product.id} className="snap-start shrink-0"><ProductCard product={product} onAddToCart={onAddToCart} /></div>
          ))}
          <Link to="/catalogo" className="flex-none w-52 rounded-2xl border border-dashed border-white/15 hover:border-[#e0f72f]/40 transition-all flex flex-col items-center justify-center py-10 bg-white/2 group">
            <div className="w-12 h-12 rounded-full bg-[#e0f72f]/10 flex items-center justify-center mb-3 group-hover:bg-[#e0f72f]/20"><ArrowRight size={20} className="text-[#e0f72f]" /></div>
            <p className="text-sm font-semibold text-[#f0f0f2]">Ver catálogo completo</p>
          </Link>
        </div>
      </section>

      {/* ── NUEVO: Categorías Destacadas ── */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-[#f0f0f2] mb-6" style={{ fontFamily: 'Outfit, sans-serif' }}>Explorar Categorías</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Streetwear', img: 'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?q=80&w=1178&auto=format&fit=crop' },
            { title: 'Sneakers', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&h=300&fit=crop' },
            { title: 'Accesorios', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=500&h=300&fit=crop' },
          ].map((cat, i) => (
            <Link to="/catalogo" key={i} className="relative h-48 rounded-2xl overflow-hidden group">
              <img src={cat.img} alt={cat.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>{cat.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NUEVO: Newsletter ── */}
      <section className="max-w-7xl mx-auto px-4 py-16 mb-10 border border-white/5 rounded-3xl bg-gradient-to-br from-[#16161a] to-[#0c0c0e] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#e0f72f]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl font-extrabold text-white mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>Únete al <span className="text-[#e0f72f]">Drop.</span></h2>
            <p className="text-[#6b6b80] text-sm">Recibe alertas tempranas de nuevas colecciones, acceso exclusivo y 10% de descuento en tu primera compra.</p>
          </div>
          <div className="w-full md:w-auto flex gap-2">
            <input type="email" placeholder="tu@email.com" className="w-full md:w-72 bg-[#0c0c0e] border border-white/10 rounded-xl h-12 px-4 text-sm text-white outline-none focus:border-[#e0f72f]/50" />
            <button className="h-12 px-6 rounded-xl bg-[#e0f72f] text-black font-bold text-sm hover:bg-[#d4f020] transition-colors flex items-center gap-2">
              Suscribirse <Send size={14} />
            </button>
          </div>
        </div>
      </section>

      <div className="border-y border-white/5 bg-[#0f0f12] overflow-hidden">
        <div className="flex items-center gap-8 px-4 py-3 text-xs font-semibold text-[#6b6b80] uppercase tracking-wider whitespace-nowrap">
          {['Envío gratis +$80', '🔒 Pago seguro', '↩ Devolución 30 días', '⚡ Entrega express'].map((t, i) => <span key={i} className="shrink-0">{t}</span>)}
        </div>
      </div>
    </>
  )
}