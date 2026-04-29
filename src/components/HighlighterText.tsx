import { Finding } from '@/types';

export default function HighlighterText({ text, findings }: { text: string; findings: Finding[] }) {
  // Sort findings by length descending so that longer matches replace first without breaking shorter subsets
  const sortedFindings = [...findings].sort((a, b) => b.excerpt.length - a.excerpt.length);

  let highlightedText = text;

  // Escape HTML before injecting marks
  highlightedText = highlightedText
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

  sortedFindings.forEach((finding) => {
    // Escape the excerpt so it matches the escaped text
    const escapedExcerpt = finding.excerpt
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const colorClass = finding.severity === 'High' ? 'bg-red-200 text-red-900 font-medium rounded px-1' : 
                       (finding.severity === 'Medium' ? 'bg-amber-200 text-amber-900 font-medium rounded px-1' : 'bg-green-200 text-green-900 font-medium rounded px-1');
                       
    const regex = new RegExp(`(${escapedExcerpt})`, 'g');
    highlightedText = highlightedText.replace(regex, `<mark class="${colorClass}">$1</mark>`);
  });

  // Preserve newlines
  highlightedText = highlightedText.replace(/\n/g, '<br />');

  return (
    <div 
      className="bg-white p-6 rounded-lg border border-slate-200 shadow-inner font-mono text-sm leading-7 text-slate-800 h-full overflow-y-auto"
      dangerouslySetInnerHTML={{ __html: highlightedText }}
    />
  );
}
