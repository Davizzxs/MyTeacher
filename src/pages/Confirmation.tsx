import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { CheckCircle2, Video, Calendar, Clock, Monitor } from 'lucide-react';
import { motion } from 'motion/react';
import { TUTORS } from '../data';

export default function Confirmation() {
  const location = useLocation();
  const data = location.state || { tutor: TUTORS[0], modality: 'Online' };
  const { tutor, modality } = data;

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      
      <main className="max-w-xl mx-auto px-12 py-32 text-center relative">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           className="w-24 h-24 border border-gold/40 text-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl backdrop-blur-md"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-serif mb-4 text-white"
        >
          Curaduría <span className="italic">Confirmada</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white/40 font-serif italic text-lg mb-16"
        >
           Tu compromiso académico ha sido registrado exitosamente en nuestra colección.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-none p-10 mb-12 shadow-xl text-left backdrop-blur-md"
        >
          <div className="flex items-center gap-6 border-b border-white/5 pb-8 mb-8">
            <img 
              src={tutor.image} 
              className="w-20 h-20 rounded-none border border-white/10 grayscale" 
              alt={tutor.name}
              referrerPolicy="no-referrer"
            />
            <div>
              <span className="text-gold text-[9px] uppercase tracking-[0.3em] block mb-1">Mentor</span>
              <h3 className="font-serif text-2xl text-white">{tutor.name}</h3>
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold font-sans">{tutor.specialty}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
              <div className="flex items-center gap-3 text-white/30">
                <Calendar className="w-3.5 h-3.5 text-gold" />
                Fecha
              </div>
              <span className="text-white font-serif italic text-lg capitalize tracking-normal">15 de Marzo, 2026</span>
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
              <div className="flex items-center gap-3 text-white/30">
                <Clock className="w-3.5 h-3.5 text-gold" />
                Intervalo
              </div>
              <span className="text-white font-serif italic text-lg tracking-normal">15:00 - 16:00</span>
            </div>
            <div className="flex justify-between items-center text-[10px] uppercase tracking-widest font-bold">
              <div className="flex items-center gap-3 text-white/30">
                <Monitor className="w-3.5 h-3.5 text-gold" />
                Mediación
              </div>
              <span className="text-white font-serif italic text-lg tracking-normal">{modality === 'Online' ? 'Digital (HD)' : modality}</span>
            </div>
          </div>
        </motion.div>

        <Link 
          to={`/session/${tutor.id}`}
          className="w-full bg-white text-dark py-6 rounded-sm text-[10px] uppercase tracking-widest font-bold flex items-center justify-center gap-3 hover:bg-gold transition-all shadow-2xl"
        >
          <Video className="w-4 h-4" />
          Acceder a Sesión Digital
        </Link>
      </main>
    </div>
  );
}
