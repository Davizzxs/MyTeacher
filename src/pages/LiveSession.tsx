import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Mic, 
  Video, 
  Monitor, 
  MessageSquare, 
  MoreVertical, 
  PhoneOff,
  Send
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { TUTORS } from '../data';

export default function LiveSession() {
  const { id } = useParams();
  const navigate = useNavigate();
  const tutor = TUTORS.find(t => t.id === id) || TUTORS[0];
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [time, setTime] = useState('01:23:45');

  const handleEndCall = () => {
    navigate(`/rating/${tutor.id}`);
  };

  return (
    <div className="h-screen bg-[#111317] text-white flex flex-col overflow-hidden font-sans">
      {/* Top Header */}
      <header className="p-8 flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/40">Transmisión de Élite — {tutor.specialty}</p>
        </div>
        <div className="text-sm font-mono text-gold tracking-widest bg-gold/5 px-4 py-1 border border-gold/20">
          {time}
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex p-10 gap-10 min-h-0">
        {/* Main Video */}
        <div className="flex-1 relative bg-white/5 rounded-none overflow-hidden shadow-2xl border border-white/5">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop" 
            alt="Tutor" 
            className="w-full h-full object-cover grayscale opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-10 left-10 bg-dark/80 backdrop-blur-md px-6 py-3 border border-white/10 text-[10px] uppercase tracking-widest font-bold">
            {tutor.name}
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-gold/20 m-6 pointer-events-none"></div>
        </div>

        {/* Sidebar */}
        <AnimatePresence>
          {isChatOpen && (
            <motion.aside 
              initial={{ opacity: 0, x: 20, width: 0 }}
              animate={{ opacity: 1, x: 0, width: '400px' }}
              exit={{ opacity: 0, x: 20, width: 0 }}
              className="flex flex-col gap-8"
            >
              {/* User Video */}
              <div className="h-64 bg-white/5 rounded-none overflow-hidden relative border border-white/5 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=400&auto=format&fit=crop" 
                  alt="Student" 
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-gold/80 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-dark">
                  Tú
                </div>
              </div>

              {/* Chat */}
              <div className="flex-1 bg-white/[0.02] backdrop-blur-md rounded-none flex flex-col border border-white/5 shadow-2xl overflow-hidden">
                <div className="p-6 border-b border-white/5 text-[9px] uppercase tracking-[0.3em] font-bold text-gold">
                  Canal Seguro
                </div>
                <div className="flex-1 p-6 space-y-6 overflow-y-auto">
                  <div className="space-y-2">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-white/40">{tutor.name}</p>
                    <div className="bg-white/5 px-6 py-4 rounded-none border border-white/5">
                      <p className="text-sm font-serif italic text-white/60">¿Puedes explicar el paso 3?</p>
                    </div>
                  </div>
                  <div className="space-y-2 ml-10">
                    <p className="text-[9px] uppercase tracking-widest font-bold text-gold text-right">Tú</p>
                    <div className="bg-gold/5 px-6 py-4 rounded-none border border-gold/10">
                      <p className="text-sm font-serif italic text-gold/80 text-right">Claramente, activando monitor...</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex gap-4 border-t border-white/5">
                  <input 
                    type="text" 
                    placeholder="Escribir mensaje..."
                    className="flex-1 bg-transparent border-b border-white/10 rounded-none px-0 py-3 text-sm outline-none focus:border-gold transition-colors font-serif italic"
                  />
                  <button className="text-gold p-2 hover:text-white transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* Controls Bar */}
      <footer className="p-12 flex justify-center items-center relative">
        <div className="bg-white/5 px-10 py-6 rounded-none flex items-center gap-10 border border-white/10 shadow-3xl backdrop-blur-xl">
          <button className="text-white/40 hover:text-white transition-all transform hover:scale-110">
            <Mic className="w-5 h-5" />
          </button>
          <button className="text-white/40 hover:text-white transition-all transform hover:scale-110">
            <Video className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className={`${isChatOpen ? 'text-gold' : 'text-white/40'} hover:text-white transition-all transform hover:scale-110`}
          >
            <MessageSquare className="w-5 h-5" />
          </button>
          <button className="text-white/40 hover:text-white transition-all transform hover:scale-110">
            <Monitor className="w-5 h-5" />
          </button>
          <button className="text-white/40 hover:text-white transition-all transform hover:scale-110">
            <MoreVertical className="w-5 h-5" />
          </button>
          <div className="w-[1px] h-10 bg-white/10"></div>
          <button 
            onClick={handleEndCall}
            className="p-5 bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-2xl"
          >
            <PhoneOff className="w-6 h-6" />
          </button>
        </div>
      </footer>
    </div>
  );
}
