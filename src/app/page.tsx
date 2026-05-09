export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-6 font-sans">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Daniel</h1>
          <p className="text-sm text-gray-500">Good to see you today.</p>
        </div>
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
          DN
        </div>
      </header>

      <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-2xl p-6 text-white shadow-lg mb-6">
        <p className="text-xs opacity-80 uppercase tracking-widest mb-1">Total Balance</p>
        <h2 className="text-3xl font-bold mb-4">₦4,250,000.00</h2>
        <div className="flex gap-4">
          <button className="bg-white text-blue-700 px-4 py-2 rounded-lg text-sm font-semibold">Transfer</button>
          <button className="bg-blue-600 bg-opacity-50 border border-blue-400 px-4 py-2 rounded-lg text-sm font-semibold">Pay Bills</button>
        </div>
      </div>
    </main>
  );
}