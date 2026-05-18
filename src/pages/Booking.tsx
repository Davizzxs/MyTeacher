import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { TUTORS } from '../data';
import { Calendar, Clock, Monitor } from 'lucide-react';
import { motion } from 'motion/react';

export default function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutor = TUTORS.find(t => t.id === id) || TUTORS[0];
  const [modality, setModality] = useState<'Online' | 'Presencial'>('Online');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation', { state: { tutor, modality } });
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-12 py-20 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/5 rounded-none p-16 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="mb-16 border-b border-white/5 pb-10">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2 text-center">Protocolo de Reserva</span>
            <h1 className="text-4xl font-serif text-center mb-4">Programar <span className="italic">Encuentro</span></h1>
            <p className="text-white/40 font-serif italic text-center">Con {tutor.name} — {tutor.specialty}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4">
                Fecha de la Sesión
              </label>
              <input 
                type="date" 
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-gold outline-none transition-all font-serif text-xl italic"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-4">
                Hora de Inicio
              </label>
              <input 
                type="time" 
                className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-gold outline-none transition-all font-serif text-xl"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-6">
                Modalidad de Presencia
              </label>
              <div className="grid grid-cols-2 gap-8">
                <button
                  type="button"
                  onClick={() => setModality('Online')}
                  className={`py-4 text-[10px] uppercase tracking-widest font-bold border transition-all ${
                    modality === 'Online' 
                    ? 'border-gold text-gold bg-gold/5' 
                    : 'border-white/5 text-white/30 hover:border-white/10'
                  }`}
                >
                  Digital (HD)
                </button>
                <button
                  type="button"
                  onClick={() => setModality('Presencial')}
                  className={`py-4 text-[10px] uppercase tracking-widest font-bold border transition-all ${
                    modality === 'Presencial' 
                    ? 'border-gold text-gold bg-gold/5' 
                    : 'border-white/5 text-white/30 hover:border-white/10'
                  }`}
                >
                  Presencial
                </button>
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-dark py-6 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all shadow-2xl mt-10"
            >
              Confirmar Reserva
            </button>
          </form>

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/5 mr-8 mt-8 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-white/5 ml-8 mb-8 pointer-events-none"></div>
        </motion.div>
      </main>
    </div>
  );
}
