
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { troubleshootComputerIssue, type TroubleshootComputerIssueOutput } from '@/ai/flows/smart-troubleshooting-tool';
import { Loader2, Search, Wrench, ShieldCheck, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function SmartTroubleshooter() {
  const [problem, setProblem] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TroubleshootComputerIssueOutput | null>(null);

  const handleTroubleshoot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!problem.trim()) return;

    setLoading(true);
    try {
      const output = await troubleshootComputerIssue({ problemDescription: problem });
      setResult(output);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-primary/10 overflow-hidden bg-white/50 backdrop-blur-sm">
      <CardHeader className="tech-gradient text-white pb-8">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="h-5 w-5" />
          <span className="text-xs font-bold uppercase tracking-widest opacity-80">AI Diagnostic Engine</span>
        </div>
        <CardTitle className="text-2xl font-bold">Smart Troubleshooter</CardTitle>
        <CardDescription className="text-blue-100">
          Describe your PC or software problem and let our AI suggest instant fixes.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 -mt-4 bg-white rounded-t-3xl">
        <form onSubmit={handleTroubleshoot} className="flex gap-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="e.g., My laptop is running slow and freezing..."
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className="pl-10 h-12 rounded-xl"
              disabled={loading}
            />
          </div>
          <Button type="submit" disabled={loading || !problem.trim()} className="h-12 px-6 rounded-xl tech-gradient">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Diagnose"}
          </Button>
        </form>

        {result && (
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h4 className="flex items-center gap-2 font-bold text-primary mb-2">
                <Wrench className="h-4 w-4" />
                Diagnosis Summary
              </h4>
              <p className="text-sm text-foreground/80 leading-relaxed bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                {result.diagnosisSummary}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-3">Recommended Fixes</h4>
              <ul className="space-y-3">
                {result.troubleshootingSteps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm items-start">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-foreground/80">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Alert variant="destructive" className="bg-red-50 border-red-100 text-red-900 rounded-xl">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="text-xs font-bold uppercase tracking-tight">Disclaimer</AlertTitle>
              <AlertDescription className="text-xs italic">
                {result.disclaimer}
              </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
