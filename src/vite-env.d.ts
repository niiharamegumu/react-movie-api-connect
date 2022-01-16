/// <reference types="vite/client" />

// 【環境変数】TypeScript用のIntelliSense
interface ImportMetaEnv {
  readonly VITE_MOVIE_API_BASE_URL: string;
  readonly VITE_MOVIE_API_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
