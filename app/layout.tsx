import "./globals.css";

export const metadata = {
  title: "Emiliano Cuellar | Web3 Product Portfolio",
  description: "A rebuilt portfolio featuring a custom Dazed Wallet visual, NFT marketplace direction, and zk-ID verification concept."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
