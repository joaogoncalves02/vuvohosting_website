import Header from "../components/Header";

export const metadata = {
  title: "NABO: NOS Accounts Back Office",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmE/jHBZWrZ0YyF1vYhvH+8ABd7Sk2vE"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
