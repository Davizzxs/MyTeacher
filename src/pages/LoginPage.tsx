import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock } from 'lucide-react';
import { motion } from 'motion/react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase().includes('tutor')) {
      navigate('/dashboard/tutor');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-dark text-white">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-white/5 p-16 flex-col justify-between relative overflow-hidden border-r border-white/5">
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <BookOpen className="w-8 h-8 text-gold" />
          <span className="font-serif italic text-3xl tracking-tight">MyTeacher</span>
        </Link>
        
        <div className="relative z-10">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-6">Acceso Restringido</span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-serif leading-tight mb-6"
          >
            Bienvenido <br />
            <span className="italic">de Nuevo</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg font-serif italic"
          >
            Reingresa a tu santuario privado de aprendizaje.
          </motion.p>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-white/20 relative z-10">
          © 2026 MyTeacher
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <div className="w-full h-full flex flex-wrap">
             {[...Array(9)].map((_, i) => (
               <div key={i} className="w-1/3 h-1/3 border border-white/20"></div>
             ))}
           </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="max-w-sm w-full">
          <div className="lg:hidden mb-12 flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-gold" />
              <span className="font-serif italic text-2xl tracking-tight">MyTeacher</span>
            </Link>
          </div>

          <h1 className="text-4xl font-serif mb-2">Iniciar Sesión</h1>
          <p className="text-white/40 font-serif italic mb-10 border-b border-white/5 pb-6">Ingresa tus credenciales para verificación</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Correo Electrónico</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="juan@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 rounded-none focus:border-gold transition-all outline-none font-serif text-lg italic placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Clave Secreta</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 rounded-none focus:border-gold transition-all outline-none font-serif text-lg placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-dark py-5 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all mt-6"
            >
              Autorizar Entrada
            </button>
          </form>

          <p className="mt-12 text-center text-[10px] uppercase tracking-widest text-white/30">
            ¿No tienes cuenta? <Link to="/register" className="text-gold font-bold hover:underline">Registrar Colección</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
