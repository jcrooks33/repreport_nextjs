import Link from 'next/link';
import styles from '../css/HomepageBills.module.css';

export default function HomepageBills({ bills }) {
  // Take only the first 3 bills for homepage display
  const displayBills = bills.slice(0, 3);
  
  return (
    <section className={styles.billsSection}>
      <div className={styles.billsContainer}>
      <h2 className={styles.sectionTitle}>Recent Legislation</h2>
        <div className={styles.billsGrid}>
          {displayBills.map((bill) => (
            <div key={bill.slug} className={styles.billCard}>
              <div className={styles.billDate}>
                {bill.date}
              </div>
              
              <h2 className={styles.billTitle}>
                {bill.title}
              </h2>
              
              <p className={styles.billDescription}>
                {bill.description || bill.bps?.[0]?.substring(0, 120)}...
              </p>
              
              <div className={styles.billTags}>
                {bill.tags && bill.tags.map((tag, index) => (
                  <span key={index} className={styles.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className={styles.billFooter}>
                <div className={styles.sponsorInfo}>
                  {bill.sponsor === 'Democrat' && (
                    <span className={styles.democratBadge}>D</span>
                  )}
                  {bill.sponsor === 'Republican' && (
                    <span className={styles.republicanBadge}>R</span>
                  )}
                  {bill.sponsor === 'Bipartisan' && (
                    <div className={styles.bipartisanBadges}>
                      <span className={styles.republicanBadge}>R</span>
                      <span className={styles.democratBadge}>D</span>
                    </div>
                  )}
                  <span className={styles.sponsorText}>
                    {bill.sponsor === 'Bipartisan' ? 'Bipartisan' : 
                     bill.sponsor === 'Democrat' ? 'Democrat-led' : 
                     bill.sponsor === 'Republican' ? 'Republican-led' : ''}
                  </span>
                </div>
                
                <Link href={`/bills/${bill.slug}`} className={styles.readMoreLink}>
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
          <Link href="/bills" className={styles.viewAllButton}>
            View All Bills
          </Link>
        </div>
      </div>
    </section>
  );
}