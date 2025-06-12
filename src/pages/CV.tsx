
import { ArrowLeft, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const CV = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rorpheeyah_CV.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ThemeToggle />
      
      {/* Header */}
      <header className="px-6 py-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
          
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </header>

      {/* CV Content */}
      <main className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Curriculum Vitae
            </h1>
            <p className="text-lg text-muted-foreground">
              Software Engineer & Full-Stack Developer
            </p>
          </div>

          {/* CV Preview */}
          <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
            <div className="p-6 border-b border-border bg-muted/30">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-semibold">CV Preview</h2>
              </div>
            </div>
            
            <div className="aspect-[8.5/11] bg-background">
              <iframe
                src="/resume.pdf"
                className="w-full h-full border-0"
                title="CV Preview"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 text-center">
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 text-lg"
            >
              <Download className="w-5 h-5" />
              Download PDF
            </button>
            <p className="mt-4 text-sm text-muted-foreground">
              Click the button above to download the PDF version of my CV
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CV;
