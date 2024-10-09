/// <reference types="vite/client" />

interface EnvVars {
  vite_url: string;
  vite_service: string;
  vite_bot: string;
  vite_token: string;
}

declare global {
  const envVars: EnvVars;
}

