
import Link from 'next/link';
import styles from '../css/Nav.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.img}
          src="https://mcusercontent.com/4c0f3950dc0f76487d3277a17/images/29a6dce6-8349-3205-7721-84703e973c06.png"
          alt="Description"
        />
        <h1>RepReport</h1>
      </div>

      <div className={styles.links}>
        {/* Use Next.js Link for internal routing */}
        <Link href="/" className={styles.linkItem}>
          Home
        </Link>
        {/* External links remain as plain anchor tags */}
        <a
          href="https://www.house.gov/representatives/find-your-representative"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkItem}
        >
          Find My Rep
        </a>
      </div>
    </nav>
  );
}
