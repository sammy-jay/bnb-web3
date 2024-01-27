import "@/styles/globals.css";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi/react";

import { WagmiConfig } from "wagmi";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import {
	arbitrum,
	avalanche,
	bsc,
	fantom,
	gnosis,
	mainnet,
	optimism,
	polygon,
} from "wagmi/chains";
import ConnectButton from "@/components/ConnectButton";
import BottomBar from "@/components/BottomBar";

const chains = [
	mainnet,
	bsc,
];

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const metadata = {
	name: "Blockchain Investment",
	description: "A Blockchain Investment Platform",
	url: "https://web3modal.com",
	icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

export default function App({ Component, pageProps }: AppProps) {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		setReady(true);
	}, []);
	return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>
          <ConnectButton />
          <Component {...pageProps} />
          <div className="h-[96px]" />
          <BottomBar />
        </WagmiConfig>
      ) : null}
    </>
  );
}
