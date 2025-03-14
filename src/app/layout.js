import "./globals.css";
import ReduxProvider from "@/store/Provider";

export const metadata = {
  title: "Comfy Sloth",
  description: "It is an ecommerece store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
