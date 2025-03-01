import Link from 'next/link';
import styles from '../css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo and tagline section */}
        <div className={styles.logoSection}>
          <div className={styles.logoContainer}>
            <div className={styles.logoCircle}>
              <span className={styles.logoLetter}>R</span>
            </div>
            <h2 className={styles.logoText}>RepReport</h2>
          </div>
          <p className={styles.tagline}>
            Simplifying politics with nonpartisan, accurate updates 
            on what your representatives are doing in DC.
          </p>
        </div>
        
        {/* Quick Links section */}
        <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <nav className={styles.footerNav}>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/find-my-rep" className={styles.footerLink}>Find My Rep</Link>
            <Link href="/bills" className={styles.footerLink}>Bill Tracker</Link>
            <Link href="/about" className={styles.footerLink}>About</Link>
          </nav>
        </div>
        
        {/* Resources section */}
        <div className={styles.resourcesSection}>
          <h3 className={styles.sectionTitle}>Resources</h3>
          <nav className={styles.footerNav}>
            <Link href="/faq" className={styles.footerLink}>FAQ</Link>
            <Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="/terms" className={styles.footerLink}>Terms of Service</Link>
            <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
          </nav>
        </div>
        
        {/* Subscribe section */}
        <div className={styles.subscribeSection}>
          <h3 className={styles.sectionTitle}>Subscribe</h3>
          <p className={styles.subscribeText}>
            Get the latest updates delivered to your inbox.
          </p>
          <form className={styles.subscribeForm}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.emailInput} 
              required 
            />
            <button type="submit" className={styles.joinButton}>
              Join
            </button>
          </form>
        </div>
      </div>
      
      {/* Copyright info with divider */}
      <div className={styles.divider}></div>
      <div className={styles.copyrightContainer}>
        <p className={styles.copyright}>© RepReport. All Rights Reserved.</p>
      </div>
    </footer>
  );
}