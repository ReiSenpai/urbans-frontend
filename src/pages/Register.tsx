import { UserPlus, Mail, Lock, User } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className="max-w-md mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-[#16161a] border border-white/5 rounded-3xl p-8 shadow-2xl shadow-black">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#f0f0f2] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Únete a <span className="text-[#e0f72f]">UrbanS.</span>
          </h1>
          <p className="text-sm text-[#6b6b80]">Crea tu cuenta y accede a drops exclusivos.</p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[10px] font-semibold text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Nombre completo</label>
            <div className="relative">
              <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b80]" />
              <input type="text" placeholder="Tu nombre" className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl h-11 pl-11 pr-4 text-sm text-white outline-none focus:border-[#e0f72f]/50 transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-semibold text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b80]" />
              <input type="email" placeholder="tu@email.com" className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl h-11 pl-11 pr-4 text-sm text-white outline-none focus:border-[#e0f72f]/50 transition-colors" />
            </div>
          </div>
          
          <div>
            <label className="block text-[10px] font-semibold text-[#a0a0b0] mb-1.5 uppercase tracking-wider">Contraseña</label>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b80]" />
              <input type="password" placeholder="••••••••" className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl h-11 pl-11 pr-4 text-sm text-white outline-none focus:border-[#e0f72f]/50 transition-colors" />
            </div>
          </div>

          <button className="btn-primary-glow w-full h-12 mt-6 rounded-xl bg-[#e0f72f] text-[#0c0c0e] text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#d4f020] active:scale-95 transition-all">
            <UserPlus size={18} /> Crear Cuenta
          </button>
        </form>

        <p className="text-center text-xs text-[#6b6b80] mt-6">
          ¿Ya tienes cuenta? <Link to="/login" className="text-white hover:text-[#e0f72f] transition-colors font-medium">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  )
}