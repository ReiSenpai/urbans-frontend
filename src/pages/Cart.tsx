import { Trash2, ArrowRight, Minus, Plus, ShieldCheck } from 'lucide-react'

export default function Cart({ cartCount }: { cartCount: number }) {
  const mockItems = [
    { id: 1, title: 'Tactical Ripstop Cargo Pants', size: 'M', price: 98, qty: 1, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&h=200&fit=crop' },
    { id: 2, title: 'Oversized Void Hoodie Black', size: 'L', price: 124, qty: 1, image: 'https://images.unsplash.com/photo-1581655353466-d5ad6765dd37?q=80&w=1170&auto=format' }
  ]

  const subtotal = 222
  const shipping = 0 // Envío gratis

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-[#f0f0f2] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Tu Carrito <span className="text-[#6b6b80] text-xl font-medium">({cartCount} items)</span></h2>
      
      {cartCount === 0 ? (
        <div className="py-20 text-center bg-[#16161a] border border-white/5 rounded-3xl">
          <p className="text-[#a0a0b0] mb-4">Tu carrito está vacío.</p>
          <a href="/catalogo" className="inline-block px-6 py-3 rounded-xl bg-[#e0f72f] text-black font-bold text-sm">Explorar productos</a>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Lista de productos */}
          <div className="flex-1 space-y-4">
            {mockItems.map((item) => (
              <div key={item.id} className="flex gap-4 p-4 bg-[#16161a] border border-white/5 rounded-2xl">
                <img src={item.image} alt={item.title} className="w-24 h-24 rounded-xl object-cover bg-[#0c0c0e]" />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                      <p className="text-xs text-[#6b6b80] mt-1">Talla: {item.size}</p>
                    </div>
                    <button className="text-[#6b6b80] hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-base font-bold text-[#e0f72f]">${item.price}</p>
                    <div className="flex items-center gap-3 bg-[#0c0c0e] rounded-lg px-2 py-1 border border-white/10">
                      <button className="text-[#a0a0b0] hover:text-white"><Minus size={14} /></button>
                      <span className="text-xs text-white font-medium w-4 text-center">{item.qty}</span>
                      <button className="text-[#a0a0b0] hover:text-white"><Plus size={14} /></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen de Orden */}
          <div className="w-full lg:w-[380px] shrink-0">
            <div className="bg-[#16161a] border border-white/5 rounded-2xl p-6 sticky top-28">
              <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'Outfit, sans-serif' }}>Resumen del pedido</h3>
              <div className="space-y-3 text-sm mb-6">
                <div className="flex justify-between text-[#a0a0b0]"><span>Subtotal</span><span>${subtotal}</span></div>
                <div className="flex justify-between text-[#a0a0b0]"><span>Envío</span><span className="text-[#e0f72f]">Gratis</span></div>
                <div className="pt-3 border-t border-white/10 flex justify-between text-white font-bold text-lg">
                  <span>Total</span><span>${subtotal + shipping}</span>
                </div>
              </div>
              <button className="w-full h-12 rounded-xl bg-[#e0f72f] text-black font-bold text-sm hover:bg-[#d4f020] transition-colors flex items-center justify-center gap-2 mb-4">
                Proceder al pago <ArrowRight size={16} />
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-[#6b6b80]">
                <ShieldCheck size={14} /> Pago 100% seguro y encriptado
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}