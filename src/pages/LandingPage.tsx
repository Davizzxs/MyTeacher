import Navbar from '../components/layout/Navbar';
import { TUTORS } from '../data';
import TutorCard from '../components/ui/TutorCard';
import { motion } from 'motion/react';
import { Video, Star, ShieldCheck, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="max-w-5xl mx-auto px-12 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-5 py-1.5 border border-gold/30 text-gold text-[10px] uppercase tracking-[0.4em] font-bold rounded-full mb-10"
          >
            Excelencia Definida
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-7xl md:text-8xl font-serif leading-[1.05] text-white mb-10 tracking-tight"
          >
            Espacios de <br />
            <span className="italic font-normal">Aprendizaje</span> Elevados
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/40 mb-12 max-w-xl mx-auto leading-relaxed font-serif italic"
          >
            Mentoría académica personalizada diseñada para quienes valoran la precisión, la privacidad y el arte de una educación de élite.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-10"
          >
            <Link 
              to="/search" 
              className="bg-white text-dark px-12 py-4 rounded-sm text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-dark transition-all shadow-2xl"
            >
              Explorar Colección
            </Link>
            <div 
              onClick={() => alert('Reproduciendo introducción...')}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div className="w-12 h-[1px] bg-white/20 group-hover:bg-gold transition-all"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/60 group-hover:text-white">Ver Introducción</span>
            </div>
          </motion.div>
        </div>

        {/* Background elements */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <div className="w-full h-full flex flex-wrap">
             {[...Array(16)].map((_, i) => (
               <div key={i} className="w-1/4 h-1/4 border border-white/20"></div>
             ))}
           </div>
        </div>
      </section>

      {/* Features Status Bar */}
      <section className="py-16 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="flex flex-col items-start gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Tecnología</p>
              <div className="space-y-1">
                <p className="font-serif text-2xl">Presencia HD</p>
                <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-wider">Encuentros de video inmersivos</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Curaduría</p>
              <div className="space-y-1">
                <p className="font-serif text-2xl">Mentores de Élite</p>
                <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-wider">Expertos académicos seleccionados a mano</p>
              </div>
            </div>
            
            <div className="flex flex-col items-start gap-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Seguridad</p>
              <div className="space-y-1">
                <p className="font-serif text-2xl">Extremo a Extremo</p>
                <p className="text-[11px] text-white/40 leading-relaxed uppercase tracking-wider">Privacidad absoluta y encriptación</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex justify-between items-end mb-20 border-b border-white/5 pb-10">
            <div>
              <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-4">Destacados</span>
              <h2 className="text-5xl font-serif">Curadurías <span className="italic">Seleccionadas</span></h2>
            </div>
            <Link to="/search" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white mb-2">Ver Colección Completa</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {TUTORS.slice(0, 3).map((tutor) => (
              <div key={tutor.id}>
                <TutorCard tutor={tutor} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-12 flex justify-between items-end">
          <div className="flex gap-20">
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-white/30">Registro Verificado</p>
              <p className="font-serif text-xl">500+</p>
            </div>
            <div className="space-y-1">
              <p className="text-[9px] uppercase tracking-widest text-white/30">Alcance Global</p>
              <p className="font-serif text-xl">24 Países</p>
            </div>
          </div>
          <div className="text-right">
             <p className="text-[9px] uppercase tracking-[0.3em] text-white/30 mb-4">© 2026 MyTeacher — Excelencia Propietaria</p>
             <div className="flex gap-8 justify-end text-[10px] uppercase tracking-widest text-white/60">
              <span className="cursor-pointer hover:text-white">Instagram</span>
              <span className="cursor-pointer hover:text-white">LinkedIn</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
