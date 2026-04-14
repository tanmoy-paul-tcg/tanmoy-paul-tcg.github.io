import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapClient from '../components/BootstrapClient';

export const metadata = {
  title: 'Materials Modelling Laboratory | TCG CREST',
  description: 'Research group of Dr. Tanmoy Paul at TCG CREST - Computational materials science for next-generation batteries and energy storage devices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body>
        <Header />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
