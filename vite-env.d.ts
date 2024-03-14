/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_URL: string
}

interface ImportMeta {
  env: ImportMetaEnv
}


declare module '*.svg';