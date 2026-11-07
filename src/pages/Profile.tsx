import { UserCircle, Settings, MapPin, CreditCard, Bell } from 'lucide-react'

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-extrabold text-[#f0f0f2] mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Mi Perfil</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Tarjeta de Usuario */}
        <div className="md:col-span-1 bg-[#16161a] border border-white/5 rounded-3xl p-6 flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-gradient-to-tr from-[#e0f72f] to-[#e0f72f]/40 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#e0f72f]/20">
            <UserCircle size={48} className="text-[#0c0c0e]" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Usuario Demo</h3>
          <p className="text-sm text-[#6b6b80] mb-6">usuario@urbans.com</p>
          <button className="w-full h-10 rounded-xl border border-white/10 text-sm font-medium text-white hover:bg-white/5 transition-colors">
            Editar Perfil
          </button>
        </div>

        {/* Opciones de Configuración */}
        <div className="md:col-span-2 space-y-4">
          {[
            { icon: <MapPin />, title: 'Direcciones de envío', desc: 'Gestiona tus direcciones de entrega' },
            { icon: <CreditCard />, title: 'Métodos de pago', desc: 'Tarjetas vinculadas y facturación' },
            { icon: <Bell />, title: 'Notificaciones', desc: 'Alertas de nuevos drops y rebajas' },
            { icon: <Settings />, title: 'Configuración de cuenta', desc: 'Contraseña, seguridad y privacidad' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-[#16161a] border border-white/5 rounded-2xl p-4 hover:border-white/15 transition-colors cursor-pointer group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-[#a0a0b0] group-hover:text-[#e0f72f] transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                <p className="text-xs text-[#6b6b80]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}