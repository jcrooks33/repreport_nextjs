import Link from 'next/link';
import styles from '@/css/Bills.module.css';
import { billsData } from '@/data/billsData';

export default function BillsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Recent Legislation</h1>
          <p className={styles.pageDescription}>
            Track the latest bills in Congress with summaries, voting records, and analysis.
          </p>
        </div>

        <div className={styles.filterSection}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search bills" 
              className={styles.searchInput} 
            />
            <button className={styles.searchButton}>
              Search
            </button>
          </div>
          
          <div className={styles.filterOptions}>
            <select className={styles.filterSelect}>
              <option value="all">All Bills</option>
              <option value="passed">Passed</option>
              <option value="pending">Pending</option>
              <option value="failed">Failed</option>
            </select>
            
            <select className={styles.filterSelect}>
              <option value="all">All Sponsors</option>
              <option value="republican">Republican</option>
              <option value="democrat">Democrat</option>
              <option value="bipartisan">Bipartisan</option>
            </select>
            
            <select className={styles.filterSelect}>
              <option value="all">All Categories</option>
              <option value="healthcare">Healthcare</option>
              <option value="economy">Economy</option>
              <option value="environment">Environment</option>
              <option value="defense">Defense</option>
              <option value="immigration">Immigration</option>
            </select>
          </div>
        </div>

        <div className={styles.billsGrid}>
          {billsData.map((bill) => (
            <div key={bill.slug} className={styles.billCard}>
              <div className={styles.billDate}>{bill.date}</div>
              
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
        
        <div className={styles.pagination}>
          <button className={styles.paginationButton}>Previous</button>
          <div className={styles.pageNumbers}>
            <span className={`${styles.pageNumber} ${styles.activePageNumber}`}>1</span>
            <span className={styles.pageNumber}>2</span>
            <span className={styles.pageNumber}>3</span>
            <span className={styles.pageNumber}>...</span>
            <span className={styles.pageNumber}>6</span>
          </div>
          <button className={styles.paginationButton}>Next</button>
        </div>
      </div>
    </div>
  );
}