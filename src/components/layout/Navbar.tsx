import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-12 py-8 bg-dark/80 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 w-full">
      <Link to="/" className="flex items-center gap-2">
        <BookOpen className="text-gold w-6 h-6" />
        <span className="font-serif italic text-2xl text-white tracking-tight">MyTeacher</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-12 text-[10px] uppercase tracking-[0.3em] font-medium text-white/40">
        <Link to="/" className="text-white border-b border-gold pb-1">Inicio</Link>
        <Link to="/search" className="hover:text-white transition-colors">Explorar</Link>
        <a href="#" className="hover:text-white transition-colors">Cómo funciona</a>
        <a href="#" className="hover:text-white transition-colors">Precios</a>
      </div>

      <div className="flex items-center gap-8">
        <Link to="/login" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white">Iniciar sesión</Link>
        <Link 
          to="/register" 
          className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
        >
          Registrarse
        </Link>
      </div>
    </nav>
  );
}
