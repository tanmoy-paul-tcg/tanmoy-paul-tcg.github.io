import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BootstrapClient from '../components/BootstrapClient';
import { DarkModeProvider } from '../context/DarkModeContext';
import { getSiteTheme } from '../lib/db';

export const metadata = {
  title: 'Materials Modelling Laboratory | TCG CREST',
  description: 'Research group of Dr. Tanmoy Paul at TCG CREST - Computational materials science for next-generation batteries and energy storage devices.',
};

export default async function RootLayout({ children }) {
  let siteTheme = 'classic';
  try {
    siteTheme = await getSiteTheme();
  } catch (e) {
    // fallback to classic
  }

  return (
    <html lang="en" data-bs-theme="dark" data-site-theme={siteTheme}>
      <body>
        <DarkModeProvider>
          <Header />
          {children}
          <Footer />
        </DarkModeProvider>
        <BootstrapClient />
      </body>
    </html>
  );
}
