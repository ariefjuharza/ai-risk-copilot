import { ShieldCheck, Cloud } from 'lucide-react';

export default function Navbar() {
  const mode = process.env.NEXT_PUBLIC_APP_MODE === 'azure' ? 'Azure Mode' : 'Demo Mode';

  return (
    <nav className="border-b border-slate-200 bg-white sticky top-0 z-10 w-full shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <ShieldCheck className="h-8 w-8 text-blue-600 mr-2" />
            <span className="font-bold text-xl tracking-tight text-slate-800">
              Risk<span className="text-blue-600">Copilot</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-slate-100 flex items-center px-3 py-1.5 rounded-full border border-slate-200">
              <Cloud className="h-4 w-4 text-slate-500 mr-2" />
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-widest">{mode}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
