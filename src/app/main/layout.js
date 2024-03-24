import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cadence",
  description: "Single and Ready to Jingle",
};

const myStyles = {
    background: 'linear-gradient(180deg, rgb(0, 153, 255) 0%, rgba(0, 153, 255, 0) 100%)',
    height: '1080px',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '1920px',
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={myStyles} className={inter.className}>{children}</body>
    </html>
  );
}