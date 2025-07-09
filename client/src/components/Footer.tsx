import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-300">
              © 2024 Uttam Dabhi. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <button
              onClick={scrollToTop}
              className="text-slate-600 dark:text-slate-300 hover:text-primary transition-colors duration-200 inline-flex items-center gap-2"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
