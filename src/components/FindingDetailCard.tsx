import { Finding } from '@/types';
import { cn } from '@/lib/utils';

export default function FindingDetailCard({ finding }: { finding: Finding }) {
  const isHigh = finding.severity === 'High';
  const isMedium = finding.severity === 'Medium';
  const isLow = finding.severity === 'Low';

  return (
    <div className="bg-white border text-sm border-slate-200 rounded-lg p-4 shadow-sm mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-slate-800">{finding.category}</span>
        <span className={cn(
          "px-2 py-1 rounded-full text-xs font-bold",
          isHigh && "bg-red-100 text-red-700",
          isMedium && "bg-amber-100 text-amber-700",
          isLow && "bg-green-100 text-green-700"
        )}>
          {finding.severity}
        </span>
      </div>
      
      <div className="mb-3">
        <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Celah Ditemukan</div>
        <q className="italic text-slate-700 bg-slate-50 px-2 py-1 border-l-2 border-slate-300 block mb-2">
          {finding.excerpt}
        </q>
        {finding.regulationMapping && (
          <div className="inline-flex items-center px-2 py-1 bg-slate-800 text-white text-[10px] uppercase font-bold rounded shadow-sm">
            <span className="mr-1">🏛️ Regulasi:</span> {finding.regulationMapping}
          </div>
        )}
      </div>

      <div className="mb-3">
         <div className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-1">Penjelasan Singkat</div>
         <p className="text-slate-600">{finding.explanation}</p>
      </div>

      <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
         <div className="text-xs text-blue-800 uppercase tracking-widest font-semibold mb-1">Next Best Action</div>
         <p className="text-blue-900 font-medium">{finding.recommendation}</p>
      </div>
    </div>
  );
}
