/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  // tambahkan variabel lain di sini kalau nanti butuh
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
