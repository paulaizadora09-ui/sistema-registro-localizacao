import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { title: 'Registro de Localização', description: 'Registro autorizado de localização vinculada a contratos.' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
