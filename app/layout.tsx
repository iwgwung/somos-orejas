import './globals.css';

export const metadata = {
  title: 'Somos Orejas | Accesorios para mascotas',
  description: 'Accesorios de diseño, confort y seguridad para tu mascota.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
