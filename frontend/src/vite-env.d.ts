/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_WALLETCONNECT_PROJECT_ID: string
  readonly VITE_MONAD_RPC_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}