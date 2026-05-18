import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import { TUTORS } from '../data';
import { Star, MapPin, Users, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export default function TutorProfile() {
  const { id } = useParams();
  const tutor = TUTORS.find(t => t.id === id) || TUTORS[0];

  const reviews = [
    { id: '1', rating: 5, comment: 'Excelente tutora, muy paciente y clara.', date: 'Hace 2 días' },
    { id: '2', rating: 5, comment: 'Me ayudó mucho con cálculo diferencial.', date: 'Hace 1 semana' }
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-12 py-20 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 border border-white/5 rounded-3xl p-12 mb-12 shadow-2xl backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row gap-12 items-start mb-16 border-b border-white/5 pb-12">
            <img 
              src={tutor.image} 
              alt={tutor.name} 
              className="w-40 h-40 rounded-none border border-white/10 grayscale hover:grayscale-0 transition-all duration-500 shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Perfil de Mentor</span>
                  <h1 className="text-5xl font-serif mb-2">{tutor.name}</h1>
                  <p className="text-white/40 font-serif italic text-lg">{tutor.specialty} con {id === '1' ? '5' : '4'} años de dedicación académica.</p>
                </div>
                <div className="md:text-right">
                  <p className="text-4xl font-serif text-gold leading-none pb-1">{tutor.pricePerHour}€</p>
                  <p className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Por Sesión</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-10 text-[10px] uppercase tracking-widest font-bold text-white/40">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-white">{tutor.rating}</span>
                  <span className="opacity-50">({tutor.reviewsCount} Curadurías)</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/20" />
                  <span>Ubicación Verificada</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-white/20" />
                  <span>200+ Interacciones</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-12">
            {tutor.subjects.map((sub) => (
              <span key={sub} className="px-5 py-2 border border-white/10 bg-white/[0.02] text-white/60 text-[9px] uppercase tracking-widest font-bold rounded-full hover:border-gold hover:text-white transition-all cursor-default">
                {sub}
              </span>
            ))}
          </div>

          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-4">Biografía</h2>
          <p className="text-white/60 font-serif italic text-xl leading-relaxed mb-16">
            "{tutor.bio}"
          </p>

          <div className="pt-12 border-t border-white/5">
            <h3 className="text-[10px] uppercase tracking-[0.4em] text-gold mb-10">Evaluación del Cliente</h3>
            <div className="space-y-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-transparent border-l border-gold/30 pl-8 py-2">
                  <div className="flex text-gold mb-4 gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 font-serif italic text-lg mb-4">"{review.comment}"</p>
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-bold">{review.date}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-10 bg-dark/80 backdrop-blur-xl border-t border-white/5 flex justify-center z-50">
        <Link 
          to={`/booking/${tutor.id}`}
          className="max-w-md w-full bg-white text-dark py-5 rounded-sm text-[10px] uppercase tracking-widest font-bold text-center hover:bg-gold transition-all shadow-2xl"
        >
          Asegurar Reserva
        </Link>
      </div>
    </div>
  );
}
