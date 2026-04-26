import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center">
            <img 
              src="/logo_krm.png" 
              alt="KrM Corp" 
              className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <div className="text-sm font-medium tracking-wide">
            © 2026 | KrM Corp
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
