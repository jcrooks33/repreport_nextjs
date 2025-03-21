import Link from 'next/link';
import styles from '@/css/NewslettersPage.module.css';

// You can replace this with an import from your data file
const newsletterData = [
    {
      slug: 'doe-sba-rural-medal-budget-acts',
      title: 'DOE and SBA Research, Rural Small Business Resilience, Medal of Honor, and 2025 Congressional Budget Acts',
      date: '2/27/25',
      description: '',
      topics: ['Small Business', 'Budget']
    },
  {
    slug: 'small-businesses-fraud-and-advocacy-acts',
    title: 'Assisting Small Businesses Not Fraudsters, Small Business Advocacy Improvements, and SPUR Acts',
    date: '2/25/25',
    description: '',
    topics: ['Small Business']
  },
  {
    slug: 'midnight-agent-raul-gonzalez-acts',
    title: 'Midnight Rules Relief and Agent Raul Gonzalez Officer Safety Acts',
    date: '2/14/25',
    description: 'Analysis and voting breakdown of two major acts tackling regulatory processes and law enforcement safety.',
    topics: ['Law Enforcement', 'Regulation']
  },
  {
    slug: 'china-paperwork-acts',
    title: 'China Exchange Rate Transparency and Protect Small Businesses from Excessive Paperwork Acts of 2025',
    date: '2/11/25',
    description: 'Examining international trade policies and domestic business regulations in these two recent bills.',
    topics: ['International Trade', 'Small Business']
  },
  {
    slug: 'fentanyl-energy-acts',
    title: 'HALT Fentanyl and Protecting American Energy Production Acts',
    date: '2/7/25',
    description: 'The latest bipartisan efforts to combat the fentanyl crisis and strengthen domestic energy production.',
    topics: ['Healthcare', 'Energy']
  },
  {
    slug: 'nutria-alaska-acts',
    title: 'Alaska and Nutria Acts',
    date: '2/5/25',
    description: 'Updates on Alaskan land management policies and invasive species control measures.',
    topics: ['Environment', 'Conservation']
  },
  {
    slug: 'ohia-forests-abortion-acts',
    title: 'Ohia, Forests, and Abortion Survivors Protection Acts',
    date: '1/29/25',
    description: 'Recent legislation covering forest conservation efforts and healthcare regulations.',
    topics: ['Environment', 'Healthcare']
  },
  {
    slug: 'laken-protection-illegitimate-acts',
    title: 'Laken Riley, Protection of Women, and Illegitimate Court Counteraction Acts',
    date: '1/22/25',
    description: 'Analysis of new bills focusing on womens safety and judicial oversight.',
    topics: ['Public Safety', 'Judicial']
  },
  {
    slug: 'american-relief-act',
    title: 'The American Relief Act and more',
    date: '1/17/25',
    description: 'A complete breakdown of the economic relief package and accompanying legislation.',
    topics: ['Economy', 'Tax Policy']
  },
];

export default function NewslettersPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h1 className={styles.pageTitle}>Newsletter Collection</h1>
          <p className={styles.pageDescription}>
            Our archive of RepReport newsletters, providing concise analysis of recent Congressional activity.
          </p>
        </div>

      

        <div className={styles.newslettersGrid}>
          {newsletterData.map((newsletter) => (
            <div key={newsletter.slug} className={styles.newsletterCard}>
              <div className={styles.newsletterDate}>RepReport: {newsletter.date}</div>
              
              <h2 className={styles.newsletterTitle}>
                {newsletter.title}
              </h2>
              
              <p className={styles.newsletterDescription}>
                {newsletter.description}
              </p>
              
              <div className={styles.newsletterTopics}>
                {newsletter.topics && newsletter.topics.map((topic, index) => (
                  <span key={index} className={styles.topic}>
                    {topic}
                  </span>
                ))}
              </div>
              
              <div className={styles.newsletterFooter}>
                <Link href={`/newsletter/${newsletter.slug}`} className={styles.readMoreLink}>
                  Read Full Newsletter
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
}