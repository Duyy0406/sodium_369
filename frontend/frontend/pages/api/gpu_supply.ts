// pages/api/gpu_supply.ts
import { Interface, JsonRpcProvider } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

type Ok = { ok: true; supply: string; raw: string };
type Err = { ok: false; error: string };
type Resp = Ok | Err;

const CONTRACT_ADDRESS = '0x4bF8D2E79E33cfd5a8348737CA91bE5F65Ea7dd9';

const CONTRACT_ABI = [
  {
    inputs: [],
    name: 'totalGpuSupply',
    outputs: [ { internalType: 'uint256', name: '', type: 'uint256' } ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Resp>,
) {
  try {
    const rpcUrl = process.env.NODE_RPC_URL || process.env.NEXT_PUBLIC_NETWORK_RPC_URL;
    console.log('RPC URL:', rpcUrl);
    console.log('Environment variables:', {
      NODE_RPC_URL: process.env.NODE_RPC_URL,
      NEXT_PUBLIC_NETWORK_RPC_URL: process.env.NEXT_PUBLIC_NETWORK_RPC_URL
    });
    
    if (!rpcUrl) {
      return res.status(400).json({ ok: false, error: 'NODE_RPC_URL or NEXT_PUBLIC_NETWORK_RPC_URL is not set in env' });
    }

    // Test RPC connection first
    const provider = new JsonRpcProvider(rpcUrl);
    
    try {
      // Check if the RPC endpoint is reachable
      await provider.getNetwork();
      console.log('RPC connection successful');
    } catch (rpcError) {
      console.error('RPC connection failed:', rpcError);
      return res.status(400).json({ 
        ok: false, 
        error: `RPC connection failed: ${rpcError instanceof Error ? rpcError.message : 'Unknown RPC error'}` 
      });
    }

    const iface = new Interface(CONTRACT_ABI);
    const data = iface.encodeFunctionData('totalGpuSupply', []);

    console.log('Calling contract:', CONTRACT_ADDRESS, 'with RPC:', rpcUrl);
    
    try {
      const raw = await provider.call({ to: CONTRACT_ADDRESS, data, blockTag: 'latest' });

      if (!raw || raw === '0x') {
        return res.status(200).json({ ok: false, error: 'No supply found - contract may not be deployed or function returned empty' });
      }

      const decimal = BigInt(raw).toString();
      console.log('Contract call successful, supply:', decimal);

      return res.status(200).json({ ok: true, supply: decimal, raw });
    } catch (contractError) {
      console.error('Contract call failed:', contractError);
      return res.status(400).json({ 
        ok: false, 
        error: `Contract call failed: ${contractError instanceof Error ? contractError.message : 'Unknown contract error'}` 
      });
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'unknown error';
    console.error('GPU supply API error:', e);
    return res.status(500).json({ ok: false, error: `Server error: ${msg}` });
  }
}
