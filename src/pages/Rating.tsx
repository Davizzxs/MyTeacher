import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { TUTORS } from '../data';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function Rating() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutor = TUTORS.find(t => t.id === id) || TUTORS[0];
  const [rating, setRating] = useState(4);
  const [hoverRating, setHoverRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-12 py-20 pb-40 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="bg-white/5 border border-white/5 rounded-none p-16 shadow-2xl backdrop-blur-md relative overflow-hidden"
        >
          <img 
            src={tutor.image} 
            alt={tutor.name} 
            className="w-24 h-24 rounded-none mx-auto mb-10 object-cover border border-white/10 grayscale contrast-125 shadow-xl"
            referrerPolicy="no-referrer"
          />

          <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Evaluación Final</span>
          <h1 className="text-4xl font-serif mb-2 tracking-tight">Calificar a <span className="italic">{tutor.name}</span></h1>
          <p className="text-white/40 font-serif italic text-lg mb-16">¿Cómo describirías la calidad de este encuentro?</p>

          <div className="flex justify-center gap-4 mb-20">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                className="transition-all transform hover:scale-110 active:scale-95"
              >
                <Star 
                  className={`w-12 h-12 transition-all ${
                    star <= (hoverRating || rating) 
                      ? 'text-gold fill-gold glow-gold' 
                      : 'text-white/5'
                  }`} 
                />
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative">
              <label className="block text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-4 text-left">Comentario Propietario</label>
              <textarea 
                placeholder="Describe los matices de tu experiencia..."
                className="w-full h-40 bg-transparent border-b border-white/10 focus:border-gold outline-none transition-all resize-none font-serif italic text-xl placeholder:text-white/5"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-white text-dark py-6 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all shadow-2xl mt-10"
            >
              Registrar Evaluación
            </button>
          </form>

          {/* Decorative accents */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-white/5 mr-8 mt-8 pointer-events-none"></div>
        </motion.div>
      </main>
    </div>
  );
}
