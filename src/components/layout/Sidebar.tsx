import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Search, 
  BookOpen, 
  History, 
  User, 
  BookMarked,
  LogOut,
  Calendar,
  Layers,
  Star as StarIcon
} from 'lucide-react';
import { cn } from '../../lib/utils';

interface SidebarProps {
  role?: 'student' | 'tutor';
  activeTab?: string;
  setActiveTab?: (tab: string) => void;
}

export default function Sidebar({ role = 'student', activeTab, setActiveTab }: SidebarProps) {
  const location = useLocation();
  
  const studentNav = [
    { label: 'Inicio', icon: Home, path: '/dashboard' },
    { label: 'Buscar tutor', icon: Search, path: '/search' },
    { label: 'Mis tutorías', icon: BookMarked, path: '/dashboard?tab=tutorias' },
    { label: 'Historial', icon: History, path: '/dashboard?tab=historial' },
    { label: 'Perfil', icon: User, path: '/dashboard?tab=perfil' },
  ];

  const tutorNav = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'disponibilidad', label: 'Disponibilidad', icon: Calendar },
    { id: 'solicitudes', label: 'Solicitudes', icon: Layers },
    { id: 'historial', label: 'Historial', icon: History },
    { id: 'calificaciones', label: 'Calificaciones', icon: StarIcon },
    { id: 'perfil', label: 'Perfil', icon: User },
  ];

  const items = role === 'student' ? studentNav : tutorNav;

  return (
    <aside className="w-16 lg:w-64 bg-white/5 border-r border-white/5 flex flex-col h-screen sticky top-0 backdrop-blur-md z-40 transition-all duration-300">
      <div className="p-4 lg:p-8 border-b border-white/5 mb-8 text-center lg:text-left">
        <Link to="/" className="flex items-center gap-2 justify-center lg:justify-start">
          <BookOpen className="text-gold w-6 h-6 shrink-0" />
          <span className="font-serif italic text-2xl text-white tracking-tight hidden lg:block">MyTeacher</span>
        </Link>
      </div>

      <div className="px-6 mb-10 hidden lg:block">
        <div className="bg-white/5 rounded-none border border-white/5 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-dark font-serif italic text-xl font-bold shrink-0">
            {role === 'student' ? 'J' : 'G'}
          </div>
          <div className="overflow-hidden">
            <p className="text-[10px] uppercase tracking-widest font-bold text-white leading-none mb-1">
              {role === 'student' ? 'Juan Pérez' : 'Profr. García'}
            </p>
            <p className="text-[9px] text-white/30 truncate uppercase tracking-tighter">
              {role === 'student' ? 'Estudiante Elite' : 'Mentor Senior'}
            </p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-2 lg:px-4 space-y-2">
        {items.map((item: any) => {
          if (role === 'student') {
            const isActive = location.pathname === item.path || (item.path.includes('?') && location.search === item.path.split('?')[1]);
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex items-center gap-4 px-3 lg:px-6 py-4 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold transition-all",
                  isActive 
                    ? "bg-white/10 text-gold border-r-2 border-gold" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          } else {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  if (setActiveTab) setActiveTab(item.id);
                  else alert(`Navegando a ${item.label}`);
                }}
                className={cn(
                  "w-full flex items-center gap-4 px-3 lg:px-6 py-4 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold transition-all text-left",
                  isActive 
                    ? "bg-white/10 text-gold border-r-2 border-gold" 
                    : "text-white/40 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="hidden lg:block">{item.label}</span>
              </button>
            );
          }
        })}
      </nav>

      <div className="p-4 lg:p-6 mt-auto">
        <Link to="/login" className="flex items-center gap-4 px-3 lg:px-6 py-4 w-full rounded-none text-[10px] uppercase tracking-[0.2em] font-bold text-red-400 hover:bg-red-500/10 transition-all">
          <LogOut className="w-4 h-4 shrink-0" />
          <span className="hidden lg:block">Cerrar sesión</span>
        </Link>
      </div>
    </aside>
  );
}
