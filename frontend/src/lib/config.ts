import {defineChain, http} from "viem";
import {getDefaultConfig} from "connectkit";
import {createConfig} from "wagmi";

const MonadTestnet = defineChain({
  id: 10143, // ✅ Monad Testnet Chain ID
  name: "Monad Testnet",
  nativeCurrency: {
    name: "Monad",
    symbol: "MON",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://testnet-rpc.monad.xyz"],
      webSocket: ["wss://testnet-rpc.monad.xyz"],
    },
    public: {
      http: ["https://testnet-rpc.monad.xyz"],
      webSocket: ["wss://testnet-rpc.monad.xyz"],
    },
  },
  blockExplorers: {
    default: {
      name: "Monad Explorer",
      url: "https://explorer.testnet.monad.xyz",
    },
  },
});

const config = createConfig(
  getDefaultConfig({
    chains: [MonadTestnet],
    transports: {
      [MonadTestnet.id]: http(import.meta.env.VITE_MONAD_RPC_URL),
    },
    walletConnectProjectId: import.meta.env.VITE_WALLETCONNECT_PROJECT_ID,
    appName: "Monad DApp",
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default config;