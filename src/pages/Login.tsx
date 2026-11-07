import { LogIn, Mail, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="max-w-md mx-auto px-4 py-16 animate-fade-in">
      <div className="bg-[#16161a] border border-white/5 rounded-3xl p-8 shadow-2xl shadow-black">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-[#f0f0f2] mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Bienvenido de <span className="text-[#e0f72f]">vuelta.</span>
          </h1>
          <p className="text-sm text-[#6b6b80]">Ingresa tus datos para acceder a tu cuenta.</p>
        </div>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-xs font-semibold text-[#a0a0b0] mb-2 uppercase tracking-wider">Email</label>
            <div className="relative">
              <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b80]" />
              <input type="email" placeholder="tu@email.com" className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl h-12 pl-11 pr-4 text-sm text-white outline-none focus:border-[#e0f72f]/50 transition-colors" />
            </div>
          </div>
          
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-semibold text-[#a0a0b0] uppercase tracking-wider">Contraseña</label>
              <a href="#" className="text-xs text-[#e0f72f] hover:underline">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b80]" />
              <input type="password" placeholder="••••••••" className="w-full bg-[#0c0c0e] border border-white/10 rounded-xl h-12 pl-11 pr-4 text-sm text-white outline-none focus:border-[#e0f72f]/50 transition-colors" />
            </div>
          </div>

          <button className="btn-primary-glow w-full h-12 mt-4 rounded-xl bg-[#e0f72f] text-[#0c0c0e] text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#d4f020] active:scale-95 transition-all">
            <LogIn size={18} /> Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-xs text-[#6b6b80] mt-6">
          ¿No tienes cuenta? <Link to="/registro" className="text-white hover:text-[#e0f72f] transition-colors font-medium">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  )
}