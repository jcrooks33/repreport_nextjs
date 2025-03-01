import Link from 'next/link';
import styles from '../css/Newsletters.module.css';

export default function HomepageNewsletters({ newsletters }) {
  // Take only the first 3 newsletters for homepage display
  const displayNewsletters = newsletters.slice(0, 3);
  
  return (
    <section className={styles.newslettersSection}>
      <div className={styles.newslettersContainer}>
        <h2 className={styles.sectionTitle}>Newsletter Collection</h2>
        
        <div className={styles.newslettersGrid}>
          {displayNewsletters.map((newsletter, index) => (
            <div key={index} className={styles.newsletterCard}>
              <h3 className={styles.newsletterTitle}>
                {newsletter.title}
              </h3>
              
              <p className={styles.newsletterDate}>
                RepReport: {newsletter.date}
              </p>
              
              <div className={styles.readMoreContainer}>
                <Link href={`/newsletter/${newsletter.slug}`} className={styles.readMoreLink}>
                  Read More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className={styles.viewAllContainer}>
          <Link href="/newsletter" className={styles.viewAllButton}>
            View All Newsletters
          </Link>
        </div>
      </div>
    </section>
  );
}