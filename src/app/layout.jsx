import './globals.css';

export const metadata = {
  title: 'Vimansha Jayarathna — AI/ML Engineer & Full-Stack Developer',
  description: 'Building intelligent systems — from model to production.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}