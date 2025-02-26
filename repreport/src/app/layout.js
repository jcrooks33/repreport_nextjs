// app/layout.js
import '../App.css'; // or import your global CSS
import Navbar from '../components/nav';
import Footer from '../components/footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>RepReport</title>
      </head>
      <body>
        <div className="wrapper">
          <header className="header">
            <Navbar />
          </header>
          <main className="main">{children}</main>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
}
