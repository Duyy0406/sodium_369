// frontend/ui/gpuSupplyDashboard/GpuSupplyDashboard.tsx

import React, { useState, useEffect } from 'react';

// --- Configuration ---
const REFRESH_INTERVAL = 5000; // 5s

// Type for API response
type ApiResponse = 
  | { ok: true; supply: string; raw: string }
  | { ok: false; error: string };

const GpuSupplyDashboard: React.FC = () => {
  const [gpuSupply, setGpuSupply] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupply = async () => {
      try {
        const origin = typeof window !== 'undefined' ? window.location.origin : '';
        const res = await fetch(`${origin}/api/gpu-supply`);
        const body = await res.json() as ApiResponse;
        
        if (!res.ok || !body.ok) {
          throw new Error(body.ok === false ? body.error : `HTTP ${res.status}`);
        }
        
        setGpuSupply(body.supply); // ✅ Fixed: use body.supply instead of body.decimal
        setError(null);
      } catch (e: any) {
        console.error('GPU supply fetch failed:', e);
        setError(e?.message || 'Failed to fetch GPU supply.');
        setGpuSupply('N/A');
      } finally {
        setLoading(false);
      }
    };

    // initial + interval
    fetchSupply();
    const t = setInterval(fetchSupply, REFRESH_INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="container mx-auto p-6 my-8 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Total GPU Supply</h2>
      {loading ? (
        <span className="text-4xl font-semibold text-gray-600">Loading...</span>
      ) : (
        <span className="text-6xl font-black text-indigo-700 block my-4">
          {gpuSupply === null ? "N/A" : gpuSupply}
        </span>
      )}
      {error && <p className="text-red-600 font-semibold mt-4">{error}</p>}
      <p className="text-sm text-gray-500 mt-6">Updates every 5 seconds.</p>
    </div>
  );
};

export default GpuSupplyDashboard;
