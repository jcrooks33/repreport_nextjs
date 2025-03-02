import Link from 'next/link';
import styles from '../css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo and tagline section */}
        <div className={styles.logoSection}>
          <div className={styles.logoWrapper}>
            <div className={styles.logoContainer}>
              <div className={styles.logoCircle}>
                <span className={styles.logoLetter}>R</span>
              </div>
              <h2 className={styles.logoText}>RepReport</h2>
            </div>
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
            <Link href="/bills" className={styles.footerLink}>Bills</Link>
            <Link href="/newsletter" className={styles.footerLink}>Newsletters</Link>
            <Link 
              className={styles.footerLink}
              href="https://www.house.gov/representatives/find-your-representative" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Find My Rep
            </Link>
          </nav>
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