import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cadence",
  description: "Single and Ready to Jingle",
};

const myStyles = {
  color: '#FF0000', // Red hex color
  backgroundColor: '#F0F8FF' // Light blue hex color
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ backgroundColor: '#003D66' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
