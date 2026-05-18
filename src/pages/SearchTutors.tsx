import { useState } from 'react';
import Sidebar from '../components/layout/Sidebar';
import { Search, ChevronDown, Filter } from 'lucide-react';
import { TUTORS } from '../data';
import TutorCard from '../components/ui/TutorCard';
import { motion } from 'motion/react';

export default function SearchTutors() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTutors = TUTORS.filter(tutor => 
    tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tutor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-dark text-white font-sans">
      <Sidebar />
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <header className="mb-16">
            <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Directorio</span>
            <h1 className="text-5xl font-serif mb-10">Explorar <span className="italic">Colección</span></h1>
            
            <div className="relative mb-10 group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-white/20 w-5 h-5 group-focus-within:text-gold transition-colors" />
              <input 
                type="text" 
                placeholder="Busca por materia, nombre o especialidad..."
                className="w-full pl-10 pr-4 py-6 bg-transparent border-b border-white/5 focus:border-gold outline-none transition-all font-serif text-xl italic placeholder:text-white/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-8 items-center border-b border-white/5 pb-10">
              <span className="text-[10px] uppercase tracking-widest text-white/30 mr-4">Filtrar por:</span>
              {[
                { label: 'Disciplina', icon: Filter },
                { label: 'Nivel Académico', icon: ChevronDown },
                { label: 'Modalidad', icon: ChevronDown },
                { label: 'Rango de Honorarios', icon: ChevronDown }
              ].map((filter) => (
                <button 
                  key={filter.label}
                  onClick={() => alert(`Filtrando por ${filter.label}...`)}
                  className="flex items-center gap-3 text-[10px] uppercase tracking-widest text-white/50 hover:text-gold transition-all group"
                >
                  <filter.icon className="w-3 h-3 text-white/20 group-hover:text-gold" />
                  {filter.label}
                </button>
              ))}
            </div>
          </header>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredTutors.map((tutor) => (
              <motion.div
                key={tutor.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <TutorCard tutor={tutor} />
              </motion.div>
            ))}
          </motion.div>

          {filteredTutors.length === 0 && (
            <div className="text-center py-40 border border-dashed border-white/5">
              <p className="text-white/20 font-serif italic text-xl tracking-tight">No se encontraron mentores que coincidan con los criterios de búsqueda.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
