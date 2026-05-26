export default function RootLayout({ children }) {
  return (
    <html lang="uz">
      <body style={{ margin: 0, fontFamily: "Arial" }}>
        {children}
      </body>
    </html>
  );
}
