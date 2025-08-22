// pages/gpu_supply.tsx
import dynamic from 'next/dynamic';

const GpuSupplyDashboard = dynamic(
  () => import('../ui/gpuSupplyDashboard/GpuSupplyDashboard'),
  { ssr: false },
);

export default function GpuSupplyPage() {
  return (
    <main className="p-6">
      <GpuSupplyDashboard/>
    </main>
  );
}
