import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, Mail, Lock, User } from 'lucide-react';
import { motion } from 'motion/react';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<'estudiante' | 'tutor'>('estudiante');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userType === 'tutor') {
      navigate('/dashboard/tutor');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex bg-dark text-white">
      {/* Left Side */}
      <div className="hidden lg:flex w-1/2 bg-white/5 p-20 flex-col justify-between relative overflow-hidden border-r border-white/5">
        <Link to="/" className="flex items-center gap-2 relative z-10">
          <BookOpen className="w-8 h-8 text-gold" />
          <span className="font-serif italic text-2xl tracking-tight">MyTeacher</span>
        </Link>
        
        <div className="relative z-10">
          <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-6">Membresía Vitalicia</span>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-6xl font-serif leading-tight mb-6"
          >
            Inicia tu <br />
            <span className="italic">Legado</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/40 text-lg font-serif italic max-w-md"
          >
            Únete a una red exclusiva de mentes brillantes dedicadas a la maestría académica.
          </motion.p>
        </div>
        
        <div className="text-[10px] uppercase tracking-widest text-white/20 relative z-10">
          © 2026 MyTeacher — Excelencia Privada
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
           <div className="w-full h-full border-t border-l border-white/20 ml-20 mt-20"></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12">
        <div className="max-w-md w-full">
          <div className="lg:hidden mb-12 flex justify-center">
            <Link to="/" className="flex items-center gap-2">
              <BookOpen className="w-8 h-8 text-gold" />
              <span className="font-serif italic text-2xl tracking-tight">MyTeacher</span>
            </Link>
          </div>

          <h1 className="text-4xl font-serif mb-2">Crear Cuenta</h1>
          <p className="text-white/40 font-serif italic mb-10 border-b border-white/5 pb-6">Formaliza tu registro en nuestra plataforma de élite</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Nombre Completo</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Juan Pérez"
                    className="w-full px-0 py-3 bg-transparent border-b border-white/10 rounded-none focus:border-gold transition-all outline-none font-serif text-base italic placeholder:text-white/10"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Tipo de Miembro</label>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setUserType('estudiante')}
                    className={`px-4 py-2 text-[9px] uppercase tracking-widest border transition-all ${
                      userType === 'estudiante' 
                      ? 'border-gold text-gold bg-gold/5' 
                      : 'border-white/10 text-white/40 hover:border-white/30'
                    }`}
                  >
                    Estudiante
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType('tutor')}
                    className={`px-4 py-2 text-[9px] uppercase tracking-widest border transition-all ${
                      userType === 'tutor' 
                      ? 'border-gold text-gold bg-gold/5' 
                      : 'border-white/10 text-white/40 hover:border-white/30'
                    }`}
                  >
                    Tutor
                  </button>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Correo Electrónico</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="juan@email.com"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 rounded-none focus:border-gold transition-all outline-none font-serif text-base italic placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 mb-3">Clave de Acceso</label>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full px-0 py-3 bg-transparent border-b border-white/10 rounded-none focus:border-gold transition-all outline-none font-serif text-base placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-dark py-5 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all mt-6 shadow-2xl"
            >
              Registrar Colección
            </button>
          </form>

          <p className="mt-12 text-center text-[10px] uppercase tracking-widest text-white/30">
            ¿Ya eres miembro? <Link to="/login" className="text-gold font-bold hover:underline">Iniciar Sesión</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
