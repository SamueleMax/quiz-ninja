import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "Quiz Ninja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
