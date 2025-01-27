"use client";

import { PrivyProvider } from "@privy-io/react-auth";

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<PrivyProvider
			appId="clykppswk00yj93o2l8angue6"
			config={{
				// Customize Privy's appearance in your app
				appearance: {
					theme: "dark",
					accentColor: "#676FFF"
				},
				// Create embedded wallets for users who don't have a wallet
				embeddedWallets: {
					createOnLogin: "users-without-wallets",
				},
			}}
		>
			{children}
		</PrivyProvider>
	);
}
