"use client";

import { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Navbar from '@/components/Navbar';
import RiskScoreGauge from '@/components/RiskScoreGauge';
import HighlighterText from '@/components/HighlighterText';
import FindingDetailCard from '@/components/FindingDetailCard';
import { SCENARIOS } from '@/lib/engine/scenarios';
import { AuditResult } from '@/types';
import { analyzeText } from '@/lib/engine/analyzer';
import { FileText, ArrowRight, RefreshCcw, ShieldAlert, CheckCircle, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Home() {
  const [text, setText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const componentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'Risk_Copilot_Audit_Report',
  });
  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setIsAnalyzing(true);
    setResult(null);
    try {
      const res = await analyzeText(text, 'demo');
      setResult(res);
    } catch (e) {
      console.error(e);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const loadScenario = (id: string) => {
    const sc = SCENARIOS.find(s => s.id === id);
    if (sc) {
      setText(sc.text);
      setResult(null);
    }
  };

  const reset = () => {
    setText('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isAnalyzing && !result && (
          <div className="mb-8 p-8 bg-slate-900 rounded-2xl text-white shadow-xl overflow-hidden relative">
             <div className="absolute top-0 right-0 p-12 opacity-10">
               <ShieldAlert className="w-64 h-64" />
             </div>
             <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white">
                Audit SOP operasional Anda sebelum risiko menjadi insiden.
              </h1>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Platform intelijen compliance untuk mendeteksi ambiguitas, celah kontrol akses, dan potensi eksposur data sensitif pada dokumen kerja.
              </p>
            </div>
          </div>
        )}

        <div ref={componentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8 print:p-8 print:block">
          
          {/* LEFT COLUMN: Input or Result Text */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            {result ? (
               <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="h-[600px] flex flex-col">
                 <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-800 flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-slate-500" /> Dokumen Teranalisis
                    </h2>
                    <div className="flex gap-2 print:hidden">
                      <button onClick={() => handlePrint()} className="text-sm text-slate-600 hover:text-slate-800 font-medium flex items-center py-2 px-3 hover:bg-slate-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4 mr-2" /> Unduh Laporan
                      </button>
                      <button onClick={reset} className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center py-2 px-3 hover:bg-blue-50 rounded-lg transition-colors">
                        <RefreshCcw className="w-4 h-4 mr-2" /> Mulai Baru
                      </button>
                    </div>
                 </div>
                 <HighlighterText text={text} findings={result.findings} />
               </motion.div>
            ) : (
              <div className="flex flex-col h-[500px] md:h-[600px] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="border-b border-slate-100 bg-slate-50 px-4 py-3 flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-slate-700">Workspace Audit</h2>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Plain Text</span>
                </div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Paste SOP, instruksi kerja, atau workflow operasional di sini..."
                  className="w-full h-full p-6 focus:outline-none resize-none font-mono text-sm leading-relaxed text-slate-700 placeholder-slate-400"
                />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Scenarios or Insights */}
          <div className="flex flex-col space-y-6">
            <AnimatePresence mode="wait">
              {result ? (
                 <motion.div key="result" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="flex flex-col space-y-6">
                   <RiskScoreGauge score={result.score} riskLevel={result.overallRisk} />
                   
                   <div className="bg-slate-900 rounded-xl p-6 text-white shadow-lg border-t-4 border-slate-700">
                      <h3 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-3">Audit Summary</h3>
                      <p className="text-sm leading-relaxed text-slate-100">{result.summary}</p>
                   </div>

                   <div className="flex-1 overflow-hidden flex flex-col">
                     <h3 className="text-lg font-bold text-slate-800 flex items-center sticky top-0 bg-slate-50 pt-2 pb-4 z-10">
                       <CheckCircle className="w-5 h-5 mr-2 text-slate-500" /> Detail Temuan ({result.findings.length})
                     </h3>
                     <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2 pb-10">
                       {result.findings.map((finding) => (
                         <FindingDetailCard key={finding.id} finding={finding} />
                       ))}
                       {result.findings.length === 0 && (
                         <p className="text-slate-500 italic text-sm p-4 text-center bg-white border border-slate-200 rounded-lg">Tidak ditemukan pola risiko. Proses ini diidentifikasi aman.</p>
                       )}
                     </div>
                   </div>
                 </motion.div>
              ) : isAnalyzing ? (
                 <motion.div key="analyzing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="h-full flex flex-col items-center justify-center text-slate-500 py-32 bg-white rounded-xl border border-slate-200 shadow-sm">
                    <RefreshCcw className="w-12 h-12 animate-spin text-blue-600 mb-6" />
                    <p className="font-semibold text-slate-700 text-lg">Menganalisis Kepatuhan...</p>
                    <p className="text-sm mt-2 text-slate-400 text-center px-8">Memindai ambiguitas dan celah keamanan kontrol menggunakan rule engine.</p>
                 </motion.div>
              ) : (
                <motion.div key="scenarios" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col h-full">
                   <h2 className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-4">Template Eksperimen</h2>
                   
                   <div className="space-y-3 mb-8 flex-1">
                     {SCENARIOS.map((sc) => (
                       <button
                         key={sc.id}
                         onClick={() => loadScenario(sc.id)}
                         className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm transition-all group relative overflow-hidden"
                       >
                         <h3 className="font-bold text-slate-800 group-hover:text-blue-800 text-sm">{sc.title}</h3>
                         <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">{sc.description}</p>
                       </button>
                     ))}
                   </div>

                   <button 
                     onClick={handleAnalyze}
                     disabled={text.trim().length < 10}
                     className={cn(
                       "w-full py-4 mt-auto rounded-xl font-bold flex items-center justify-center transition-all duration-300",
                       text.trim().length >= 10 
                         ? "bg-blue-600 text-white shadow-md hover:shadow-lg hover:bg-blue-700 active:scale-[0.98]" 
                         : "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200"
                     )}
                   >
                     Analisis Risiko {text.trim().length >= 10 && <ArrowRight className="w-4 h-4 ml-2 animate-pulse" />}
                   </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
    </div>
  );
}
