import Link from 'next/link';
import styles from '../css/Nav.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <div className={styles.logoSection}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <div className={styles.logoCircle}>
                <span className={styles.logoLetter}>R</span>
              </div>
              <h1 className={styles.logoText}>RepReport</h1>
            </div>
          </Link>
        </div>

        <div className={styles.linksSection}>
          <Link href="/" className={styles.linkItem}>
            Home
          </Link>
          <Link 
            href="https://www.house.gov/representatives/find-your-representative" 
            className={styles.linkItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            Find My Rep
          </Link>
          <Link href="/bills" className={styles.linkItem}>
            Bills
          </Link>
          <Link href="/newsletter" className={styles.linkItem}>
            Newsletters
          </Link>
          <Link href="/about" className={styles.linkItem}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}