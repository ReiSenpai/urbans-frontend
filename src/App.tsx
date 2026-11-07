import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu, X, LogIn, UserCircle, Package, Heart } from 'lucide-react'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'

export type Category = 'Hombre' | 'Mujer' | 'Drops' | 'Sale' | 'all'
const NAV_LINKS: Category[] = ['Hombre', 'Mujer', 'Drops', 'Sale']

function UserDropdown({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl border border-white/10 bg-[#16161a]/95 backdrop-blur-md shadow-2xl shadow-black/60 overflow-hidden z-50" onClick={(e) => e.stopPropagation()}>
      <div className="px-4 py-3 border-b border-white/5"><p className="text-xs text-[#6b6b80]">Cuenta</p></div>
      {[
        { icon: <LogIn size={14} />, label: 'Iniciar sesión', path: '/login' },
        { icon: <UserCircle size={14} />, label: 'Mi perfil', path: '/perfil' },
        { icon: <Package size={14} />, label: 'Mis pedidos', path: '/pedidos' },
        { icon: <Heart size={14} />, label: 'Favoritos', path: '/favoritos' },
      ].map(({ icon, label, path }) => (
        <Link key={label} to={path} onClick={onClose} className="w-full px-4 py-3 text-left text-sm text-[#a0a0b0] hover:text-white hover:bg-white/5 transition-colors flex items-center gap-3">
          <span className="text-[#6b6b80]">{icon}</span>{label}
        </Link>
      ))}
    </div>
  )
}

function Navbar({ cartCount, menuOpen, setMenuOpen, activeCategory, setActiveCategory, searchQuery, setSearchQuery }: any) {
  const [userOpen, setUserOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handler = () => setUserOpen(false)
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const handleNavClick = (cat: Category) => {
    setActiveCategory(activeCategory === cat ? 'all' : cat)
    setMenuOpen(false)
    if (location.pathname !== '/') navigate('/')
    else document.getElementById('smart-feed')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className="fixed top-8 left-0 right-0 z-40 border-b border-white/5 bg-[#0c0c0e]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center gap-4">
        <button onClick={() => { setActiveCategory('all'); setSearchQuery(''); navigate('/') }} className="text-xl font-extrabold tracking-tighter text-[#f0f0f2] shrink-0 hover:opacity-80 transition-opacity" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.04em' }}>
          Urban<span className="text-[#e0f72f]">S</span>
        </button>

        <div className="hidden sm:flex flex-1 max-w-md mx-auto items-center gap-2.5 px-3.5 h-10 rounded-xl bg-white/5 border border-white/8 focus-within:border-[#e0f72f]/40 transition-colors">
          <Search size={15} className="text-[#6b6b80] shrink-0" />
          <input type="text" value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory('all'); if(location.pathname !== '/') navigate('/') }} placeholder="Buscar productos, marcas..." className="flex-1 bg-transparent text-sm text-[#f0f0f2] placeholder:text-[#6b6b80] outline-none" />
          {searchQuery && <button onClick={() => setSearchQuery('')} className="text-[#6b6b80] hover:text-white transition-colors"><X size={13} /></button>}
        </div>

        <div className="ml-auto flex items-center gap-1">
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setUserOpen((v) => !v)} className={`w-[44px] h-[44px] flex items-center justify-center rounded-xl transition-colors ${userOpen ? 'bg-white/10 text-white' : 'hover:bg-white/5 text-[#a0a0b0] hover:text-white'}`}>
              <User size={18} />
            </button>
            {userOpen && <UserDropdown onClose={() => setUserOpen(false)} />}
          </div>
          
          {/* BOTÓN DE CARRITO ACTUALIZADO */}
          <Link to="/carrito" className="relative w-[44px] h-[44px] flex items-center justify-center rounded-xl hover:bg-white/5 text-[#a0a0b0] hover:text-white transition-colors">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="absolute top-1.5 right-1.5 min-w-[18px] h-[18px] rounded-full bg-[#e0f72f] text-[#0c0c0e] text-[10px] font-bold flex items-center justify-center px-1 leading-none">{cartCount > 99 ? '99+' : cartCount}</span>}
          </Link>
          
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-[44px] h-[44px] flex items-center justify-center rounded-xl hover:bg-white/5 text-[#a0a0b0] hover:text-white transition-colors">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
          
          <div className="hidden md:flex items-center gap-0.5 ml-2 pl-2 border-l border-white/8">
            {NAV_LINKS.map((item) => (
              <button key={item} onClick={() => handleNavClick(item)} className={`px-3.5 h-9 text-sm font-medium rounded-lg transition-all duration-200 ${activeCategory === item && location.pathname === '/' ? 'bg-[#e0f72f]/10 text-[#e0f72f]' : 'text-[#a0a0b0] hover:text-white hover:bg-white/5'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>
                {item}{item === 'Sale' && <span className="ml-1 text-[9px] text-red-400">●</span>}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

function LayoutWrapper() {
  const [cartCount, setCartCount] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<Category>('all')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-[#0c0c0e]">
      <Navbar cartCount={cartCount} menuOpen={menuOpen} setMenuOpen={setMenuOpen} activeCategory={activeCategory} setActiveCategory={setActiveCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="pt-[calc(2rem+4rem)]">
        <Routes>
          <Route path="/" element={<Home activeCategory={activeCategory} setActiveCategory={setActiveCategory} searchQuery={searchQuery} setSearchQuery={setSearchQuery} onAddToCart={() => setCartCount(c => c + 1)} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register/>} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/pedidos" element={<Orders />} />
          <Route path="/favoritos" element={<Favorites />} />
          <Route path="/carrito" element={<Cart cartCount={cartCount} />} />
          <Route path="/catalogo" element={<Catalog onAddToCart={() => setCartCount(c => c + 1)} />} />
        </Routes>
      </main>

      <footer className="max-w-7xl mx-auto px-4 py-10 mt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-extrabold tracking-tighter text-[#f0f0f2]/40" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.04em' }}>Urban<span className="text-[#e0f72f]/40">S</span></span>
        <p className="text-xs text-[#4a4a5a]">© 2026 UrbanS · All rights reserved</p>
      </footer>
    </div>
  )
}

export default function App() {
  return <Router><LayoutWrapper /></Router>
}