
import { UserProvider } from '../context/UserContext';
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <UserProvider>
        {children}
        </UserProvider>
      </body>
    </html>
  );
}
