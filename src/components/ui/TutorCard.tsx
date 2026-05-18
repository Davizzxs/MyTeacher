import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import { Tutor } from '../../types';

interface TutorCardProps {
  tutor: Tutor;
}

export default function TutorCard({ tutor }: TutorCardProps) {
  return (
    <Link 
      to={`/tutor/${tutor.id}`}
      className="bg-white/5 border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/[0.08] transition-all group backdrop-blur-sm"
      id={`tutor-card-${tutor.id}`}
    >
      <div className="relative mb-6">
        <img 
          src={tutor.image} 
          alt={tutor.name} 
          className="w-20 h-20 rounded-full object-cover border border-white/10 group-hover:border-gold transition-colors"
          referrerPolicy="no-referrer"
        />
      </div>
      <h3 className="font-serif italic text-xl text-white mb-1">{tutor.name}</h3>
      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-4 font-medium">{tutor.specialty}</p>
      <div className="flex items-center gap-1.5 mb-6">
        <Star className="w-3 h-3 text-gold fill-gold" />
        <span className="text-xs font-bold text-white/80">{tutor.rating}</span>
      </div>
      <p className="text-gold font-serif text-2xl tracking-tight">{tutor.pricePerHour}€<span className="text-[10px] text-white/20 uppercase tracking-widest font-sans ml-1">/sesión</span></p>
    </Link>
  );
}
