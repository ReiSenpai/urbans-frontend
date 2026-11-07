import { Package, ArrowRight, ExternalLink } from 'lucide-react'

export default function Orders() {
  const mockOrders = [
    { id: '#URB-9021', date: '12 Oct 2026', status: 'En camino', total: 189, items: 1, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { id: '#URB-8834', date: '05 Sep 2026', status: 'Entregado', total: 312, items: 3, color: 'text-[#e0f72f]', bg: 'bg-[#e0f72f]/10' },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-[#f0f0f2] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Mis Pedidos</h2>
      
      <div className="space-y-4">
        {mockOrders.map((order) => (
          <div key={order.id} className="bg-[#16161a] border border-white/5 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${order.bg} ${order.color}`}>
                <Package size={20} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-bold text-white" style={{ fontFamily: 'Outfit, sans-serif' }}>{order.id}</h3>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${order.bg} ${order.color}`}>
                    {order.status}
                  </span>
                </div>
                <p className="text-xs text-[#6b6b80] mt-1">{order.date} • {order.items} producto(s)</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <span className="text-lg font-bold text-white">${order.total}</span>
              <button className="flex items-center gap-1.5 text-sm font-medium text-[#a0a0b0] hover:text-[#e0f72f] transition-colors">
                Ver detalle <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}

        {/* Empty state sugerido para cuando no hay más */}
        <div className="py-12 flex flex-col items-center justify-center text-center border border-dashed border-white/10 rounded-2xl bg-white/2">
          <ExternalLink size={32} className="text-[#6b6b80] mb-3" />
          <h4 className="text-sm font-semibold text-white">No tienes más pedidos</h4>
          <p className="text-xs text-[#6b6b80] mt-1">Explora nuestros drops para empezar a comprar.</p>
        </div>
      </div>
    </div>
  )
}