// File: app/components/RIPProfile/WalletCoins.tsx
import React from 'react';
import { Card, CardContent } from "@/ /ui/card";
import { FaCoins } from 'react-icons/fa';

interface WalletCoinsProps {
  coins: number;
}

export const WalletCoins: React.FC<WalletCoinsProps> = ({ coins }) => {
  return (
    <Card className="bg-amber-500 text-black shadow-lg">
      <CardContent className="flex items-center justify-between p-4">
        <FaCoins className="text-4xl" />
        <div className="text-right">
          <p className="text-sm font-semibold">Wallet Coins</p>
          <p className="text-3xl font-bold">{coins}</p>
        </div>
      </CardContent>
    </Card>
  );
};