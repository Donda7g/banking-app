import "./globals.css";

export const metadata = {
  title: "Banking App",
  description: "Modern Mobile Banking Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
