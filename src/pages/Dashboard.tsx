import Sidebar from '../components/layout/Sidebar';
import { ArrowRight, UserCheck } from 'lucide-react';
import { TUTORS } from '../data';
import TutorCard from '../components/ui/TutorCard';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-dark text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-12">
        <div className="max-w-5xl mx-auto">
          <header className="mb-16 pb-8 border-b border-white/5">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Centro de Miembros</span>
            <h1 className="text-5xl font-serif mb-2">
              Bienvenido, <span className="italic font-normal">Juan</span>.
            </h1>
            <p className="text-white/40 text-sm italic font-serif">Vista curada de tu estado académico actual.</p>
          </header>

          {/* Next Lesson Card */}
          <section className="mb-20">
            <div className="bg-white/5 rounded-none border border-white/10 p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden backdrop-blur-md shadow-2xl">
              <div className="relative z-10 w-full md:w-auto">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-8">Curadurías Activas</p>
                <div className="flex items-center gap-6">
                  <img 
                    src={TUTORS[0].image} 
                    className="w-20 h-20 rounded-full border border-white/20 grayscale hover:grayscale-0 transition-all duration-500" 
                    alt="Maria Garcia"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="text-3xl font-serif mb-1">{TUTORS[0].name}</h3>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">{TUTORS[0].specialty}</p>
                    <p className="text-gold font-serif italic">Presentación programada para las 3:00 PM</p>
                  </div>
                </div>
              </div>
              <Link 
                to="/session/1"
                className="relative z-10 bg-white text-dark px-10 py-4 rounded-sm text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all w-full md:w-auto text-center"
              >
                Acceder a Sesión
              </Link>

              {/* Decorative line */}
              <div className="absolute right-0 top-0 w-1/2 h-[1px] bg-gold/20"></div>
              <div className="absolute left-0 bottom-0 w-[1px] h-1/2 bg-gold/20"></div>
            </div>
          </section>

          {/* Recommended Tutors */}
          <section>
            <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
              <div>
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Recomendaciones</span>
                <h2 className="text-2xl font-serif">Mentores <span className="italic">Personalizados</span></h2>
              </div>
              <Link to="/search" className="text-[10px] uppercase tracking-widest text-white/40 hover:text-white mb-1">Explorar Directorio Completo</Link>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              {TUTORS.slice(3, 6).map((tutor) => (
                <div key={tutor.id}>
                  <TutorCard tutor={tutor} />
                </div>
              ))}
            </motion.div>
          </section>
        </div>
      </main>
    </div>
  );
}
