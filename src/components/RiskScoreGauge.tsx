import { cn } from '@/lib/utils';
import { RiskLevel } from '@/types';

export default function RiskScoreGauge({ score, riskLevel }: { score: number, riskLevel: RiskLevel }) {
  let color = 'text-green-600';
  let bgColor = 'bg-green-50 border-green-200';
  if (riskLevel === 'Medium') {
    color = 'text-amber-600';
    bgColor = 'bg-amber-50 border-amber-200';
  } else if (riskLevel === 'High') {
    color = 'text-red-600';
    bgColor = 'bg-red-50 border-red-200';
  }

  return (
    <div className={cn("p-6 rounded-xl flex items-center space-x-6 border", bgColor)}>
      <div className={cn("flex flex-col items-center justify-center bg-white rounded-full w-24 h-24 shadow-sm border", color === 'text-red-600' ? 'border-red-200' : 'border-slate-100')}>
        <span className={cn("text-3xl font-bold", color)}>{score}</span>
        <span className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider">Index</span>
      </div>
      <div>
        <h3 className={cn("text-xl font-bold tracking-tight", color)}>
          Risiko {riskLevel === 'High' ? 'Kritis' : riskLevel === 'Medium' ? 'Sedang' : 'Rendah'}
        </h3>
        <p className="text-sm text-slate-600 mt-2 max-w-md">
          Skor kepatuhan berbasis analisis engine otomatis. Makin tinggi skor, makin aman alur operasional Anda.
        </p>
      </div>
    </div>
  );
}
