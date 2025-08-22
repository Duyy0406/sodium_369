// pages/api/gpu-supply.ts
import { Interface, JsonRpcProvider } from 'ethers';
import type { NextApiRequest, NextApiResponse } from 'next';

type Ok = { ok: true; supply: string; decimal: string; raw: string }; // ✅ Changed supply to decimal
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
    const rpcUrl = process.env.NODE_RPC_URL;
    if (!rpcUrl) {
      return res.status(500).json({ ok: false, error: 'NODE_RPC_URL is not set in env' });
    }

    const iface = new Interface(CONTRACT_ABI);
    const data = iface.encodeFunctionData('totalGpuSupply', []);

    const provider = new JsonRpcProvider(rpcUrl);
    const raw = await provider.call({ to: CONTRACT_ADDRESS, data, blockTag: 'latest' });

    if (!raw || raw === '0x') {
      return res.status(200).json({ ok: false, error: 'No supply found' });
    }

    const decimal = BigInt(raw).toString(); // ✅ Changed variable name to match response

    return res.status(200).json({ ok: true, supply: decimal, decimal, raw }); // ✅ Return decimal instead of supply
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'unknown error';
    return res.status(500).json({ ok: false, error: msg });
  }
}
