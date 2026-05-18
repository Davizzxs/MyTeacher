import Sidebar from '../components/layout/Sidebar';
import { 
  Users, 
  Clock, 
  Star, 
  TrendingUp, 
  Check, 
  X,
  Calendar as CalendarIcon,
  Plus
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const STATS = [
  { label: 'Estudiantes', value: '42', icon: Users, color: 'text-blue-400' },
  { label: 'Horas impartidas', value: '156', icon: Clock, color: 'text-orange-400' },
  { label: 'Rating', value: '4.9', icon: Star, color: 'text-gold' },
  { label: 'Ingresos', value: '3,900€', icon: TrendingUp, color: 'text-purple-400' },
];

const UPCOMING_SESSIONS = [
  { id: 1, name: 'Juan Pérez', subject: 'Cálculo', time: 'Hoy, 3:00 PM', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&h=100&auto=format&fit=crop' },
  { id: 2, name: 'Ana López', subject: 'Álgebra', time: 'Mañana, 10:00 AM', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&h=100&auto=format&fit=crop' },
];

const REQUESTS = [
  { id: 1, name: 'Pedro Ruiz', subject: 'Estadística', time: 'Mar 17, 2:00 PM', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop' },
  { id: 2, name: 'Laura Díaz', subject: 'Geometría', time: 'Mar 18, 4:30 PM', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop' },
];

const HISTORY = [
  { id: 1, student: 'Juan Pérez', date: 'Mar 10, 2026', subject: 'Cálculo', status: 'Completada' },
  { id: 2, student: 'Ana López', date: 'Mar 8, 2026', subject: 'Álgebra', status: 'Completada' },
  { id: 3, student: 'Pedro Ruiz', date: 'Mar 5, 2026', subject: 'Estadística', status: 'Cancelada' },
  { id: 4, student: 'Laura Díaz', date: 'Mar 3, 2026', subject: 'Geometría', status: 'Completada' },
];

const DAYS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'];
const HOURS = ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'];

const INITIAL_AVAILABILITY = [
  { day: 'Lun', time: '8:00' },
  { day: 'Lun', time: '10:00' },
  { day: 'Mar', time: '8:00' },
  { day: 'Mar', time: '12:00' },
  { day: 'Jue', time: '9:00' },
  { day: 'Vie', time: '9:00' },
  { day: 'Sáb', time: '11:00' },
  { day: 'Dom', time: '12:00' },
];

export default function TutorDashboard() {
  const [activeTab, setActiveTab] = useState('inicio');
  const [availability, setAvailability] = useState(INITIAL_AVAILABILITY);
  const [requests, setRequests] = useState(REQUESTS);

  const toggleAvailability = (day: string, time: string) => {
    const exists = availability.find(a => a.day === day && a.time === time);
    if (exists) {
      setAvailability(availability.filter(a => !(a.day === day && a.time === time)));
    } else {
      setAvailability([...availability, { day, time }]);
    }
  };

  const handleRequest = (id: number, accept: boolean) => {
    alert(accept ? 'Solicitud aceptada' : 'Solicitud rechazada');
    setRequests(requests.filter(r => r.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-dark text-white font-sans">
      <Sidebar role="tutor" setActiveTab={setActiveTab} activeTab={activeTab} />
      
      <main className="flex-1 p-12 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'inicio' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <header className="mb-16">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Panel del Tutor</span>
                <h1 className="text-5xl font-serif mb-2">Bienvenido de nuevo, <span className="italic">Profr. García</span></h1>
                <p className="text-white/40 italic font-serif">Tu resumen de actividad y rendimiento.</p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                {STATS.map((stat) => (
                  <div key={stat.label} className="bg-white/5 border border-white/5 p-8 backdrop-blur-sm">
                    <stat.icon className={`w-6 h-6 ${stat.color} mb-6`} />
                    <p className="text-3xl font-serif mb-1">{stat.value}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <section>
                <div className="flex items-end justify-between mb-10 border-b border-white/5 pb-6">
                  <h2 className="text-2xl font-serif">Próximas <span className="italic">Sesiones</span></h2>
                </div>
                <div className="space-y-6">
                  {UPCOMING_SESSIONS.map((session) => (
                    <div key={session.id} className="bg-white/5 border border-white/5 p-8 flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <img src={session.image} className="w-16 h-16 grayscale rounded-none border border-white/10" alt={session.name} referrerPolicy="no-referrer" />
                        <div>
                          <p className="text-xl font-serif">{session.name}</p>
                          <p className="text-[10px] uppercase tracking-widest text-white/40">{session.subject}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gold font-serif italic mb-1">{session.time}</p>
                        <button onClick={() => alert('Iniciando sesión...')} className="text-[9px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-white transition-colors">Entrar al Aula</button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activeTab === 'disponibilidad' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <header className="mb-16 flex justify-between items-end">
                <div>
                  <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Configuración</span>
                  <h1 className="text-5xl font-serif mb-2">Gestionar <span className="italic">Disponibilidad</span></h1>
                </div>
                <button 
                  onClick={() => alert('Horario guardado exitosamente')}
                  className="bg-white text-dark px-8 py-3 text-[10px] uppercase tracking-widest font-bold hover:bg-gold transition-all"
                >
                  <Plus className="w-4 h-4 inline-block mr-2" />
                  Agregar horario
                </button>
              </header>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="p-4 border border-white/5 text-[10px] uppercase tracking-widest text-white/20"></th>
                      {DAYS.map(day => (
                        <th key={day} className="p-4 border border-white/5 text-[10px] uppercase tracking-widest text-white/40 font-bold">{day}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {HOURS.map(hour => (
                      <tr key={hour}>
                        <td className="p-4 border border-white/5 text-[10px] uppercase tracking-widest text-white/20 text-center font-mono">{hour}</td>
                        {DAYS.map(day => {
                          const isAvailable = availability.find(a => a.day === day && a.time === hour);
                          return (
                            <td key={day} className="p-1 border border-white/5">
                              <button 
                                onClick={() => toggleAvailability(day, hour)}
                                className={`w-full h-12 transition-all ${isAvailable ? 'bg-gold/20 text-gold border border-gold/30' : 'hover:bg-white/5'}`}
                              >
                                {isAvailable && <span className="text-[8px] uppercase tracking-tighter">Disponible</span>}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {activeTab === 'solicitudes' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <header className="mb-16 pb-8 border-b border-white/5">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Pendientes</span>
                <h1 className="text-5xl font-serif mb-2">Solicitudes de <span className="italic">Tutoría</span></h1>
              </header>

              <div className="space-y-6">
                {requests.map((request) => (
                  <div key={request.id} className="bg-white/5 border border-white/5 p-8 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <img src={request.image} className="w-20 h-20 grayscale border border-white/10" alt={request.name} referrerPolicy="no-referrer" />
                      <div>
                        <h3 className="text-2xl font-serif mb-1">{request.name}</h3>
                        <p className="text-[10px] uppercase tracking-widest text-gold mb-2">{request.subject}</p>
                        <div className="flex items-center gap-4 text-white/30 text-[10px] uppercase tracking-widest">
                          <CalendarIcon className="w-3 h-3" />
                          {request.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleRequest(request.id, false)}
                        className="px-8 py-3 border border-red-500/20 text-red-500 text-[9px] uppercase tracking-widest font-bold hover:bg-red-500 hover:text-white transition-all flex items-center gap-2"
                      >
                        <X className="w-3 h-3" /> Rechazar
                      </button>
                      <button 
                        onClick={() => handleRequest(request.id, true)}
                        className="px-8 py-3 bg-white text-dark text-[9px] uppercase tracking-widest font-bold hover:bg-gold transition-all flex items-center gap-2"
                      >
                        <Check className="w-3 h-3" /> Aceptar
                      </button>
                    </div>
                  </div>
                ))}
                {requests.length === 0 && (
                  <div className="py-40 text-center border border-dashed border-white/5">
                    <p className="text-white/20 font-serif italic text-xl">No hay solicitudes pendientes en este momento.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'historial' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <header className="mb-16">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] block mb-2">Archivo</span>
                <h1 className="text-5xl font-serif mb-2">Historial de <span className="italic">Sesiones</span></h1>
              </header>

              <div className="bg-white/5 border border-white/5 overflow-hidden">
                <table className="w-full text-left">
                  <thead className="bg-white/5 border-b border-white/5">
                    <tr>
                      <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/30 truncate">Estudiante</th>
                      <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/30 truncate">Fecha</th>
                      <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/30 truncate">Materia</th>
                      <th className="px-8 py-6 text-[10px] uppercase tracking-widest text-white/30 truncate text-right">Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {HISTORY.map((item) => (
                      <tr key={item.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="px-8 py-6 font-serif italic text-lg">{item.student}</td>
                        <td className="px-8 py-6 text-sm text-white/40">{item.date}</td>
                        <td className="px-8 py-6 text-sm text-white/40">{item.subject}</td>
                        <td className="px-8 py-6 text-right">
                          <span className={`px-4 py-1 text-[8px] uppercase tracking-widest font-bold ${
                            item.status === 'Completada' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
