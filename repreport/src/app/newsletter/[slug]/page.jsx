import React from 'react';
import Link from 'next/link';
import styles from '@/css/NewsletterDetail.module.css';
import { newsletterData } from '@/data/newslettersData';

// Pre-render newsletter pages based on available slugs
export async function generateStaticParams() {
  const slugs = Object.keys(newsletterData);
  return slugs.map((slug) => ({ slug }));
}

// Force static rendering
export const dynamic = 'force-static';

export default async function NewsletterPage({ params }) {
  const { slug } = params;
  const newsletter = newsletterData[slug];

  if (!newsletter) {
    return (
      <div className={styles.container}>
        <div className={styles.errorCard}>
          <h1>Newsletter Not Found</h1>
          <p>The newsletter you're looking for doesn't exist or has been moved.</p>
          <Link href="/newsletters" className={styles.backButton}>
            Return to Newsletters
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Link href="/newsletters" className={styles.backLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Newsletters
          </Link>
          <h1 className={styles.title}>{newsletter.title}</h1>
          <div className={styles.date}>RepReport: {newsletter.date || 'No date available'}</div>
          
          {newsletter.bills && newsletter.bills.length > 0 && (
            <div className={styles.billsList}>
              <h2 className={styles.billsHeader}>Bills Covered:</h2>
              <ul>
                {newsletter.bills.map((bill) => (
                  <li key={bill.id} className={styles.billItem}>
                    <Link href={`/bills/${bill.id}`} className={styles.billLink}>
                      {bill.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.newsletterContent}>
          {newsletter.html ? (
            <div dangerouslySetInnerHTML={{ __html: newsletter.html }} />
          ) : (
            <div className={styles.noContent}>
              <p>No newsletter content available.</p>
            </div>
          )}
        </div>
        
        <div className={styles.footer}>
          <hr className={styles.divider} />
          <div className={styles.navigation}>
            <Link href="/newsletters" className={styles.navButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="9" x2="15" y2="9"></line>
                <line x1="9" y1="12" x2="15" y2="12"></line>
                <line x1="9" y1="15" x2="15" y2="15"></line>
              </svg>
              All Newsletters
            </Link>

            <Link href="/signup" className={styles.subscribeButton}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Subscribe to RepReport
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}