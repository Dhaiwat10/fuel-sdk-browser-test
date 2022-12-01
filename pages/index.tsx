import { Wallet, WalletUnlocked } from 'fuels';
import { useEffect, useState } from 'react';

export default function Home() {
  const [wallet, setWallet] = useState<WalletUnlocked>();

  useEffect(() => {
    setWallet(Wallet.generate());
  }, []);

  return (
    <div>
      <h1>Fuel SDK browser test</h1>

      <p>Newly generated wallet address: {wallet?.address.toString()}</p>
    </div>
  );
}
