import { useState } from 'react';

import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
  
      <main className="flex-grow">
       
        
        {/* Example trigger button for testing the modal */}
        <div className="text-center py-10">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-500 transition-all"
          >
            Open Interactive Modal
          </button>
        </div>
      </main>

      {/* The Modal Component */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Get Started with BrandUI"
      >
        <p className="text-slate-400 text-sm leading-relaxed">
          Enter your project configuration details below or proceed to instantly provision your new React development environment with Tailwind CSS.
        </p>
      </Modal>
    </div>
  );
}

export default App;