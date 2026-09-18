import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      
      {/* Add pt-12 so content starts below the navbar */}
      <main className="mx-auto max-w-7xl px-6 pt-16 pb-20">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Scroll down to test the sticky navbar blur effect...
        </h1>
        <div className="h-[1500px] mt-8 rounded-2xl border border-dashed border-slate-800 p-8 bg-slate-900/50">
          <p className="text-slate-400">Keep scrolling!</p>
        </div>
      </main>
    </div>
  );
}

export default App;