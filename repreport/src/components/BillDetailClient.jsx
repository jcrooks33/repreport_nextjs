'use client';
import React, { useState, useEffect } from 'react';
import { Tweet } from 'react-tweet';
import styles from '@/css/BillDetail.module.css';

// Hook: Detects whether the screen matches a given CSS media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}

export default function BillDetailClient({ title, bps, pork, tableData, tweetIds, articles, passed }) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Render table
  const renderTable = () => {
    if (tableData.error) {
      return <p>{tableData.error}</p>;
    }
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            {tableData.headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {tableData.headers.map((header, cellIndex) => (
                <td key={cellIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

// Render tweets
const renderTweets = () => {
  if (!tweetIds.length) {
    return <p>No tweets available.</p>;
  }
  return (
    <div>
      <h1>The top tweets from Reps and Committees that name the bill</h1>
      {tweetIds.map((id, idx) => (
        <div key={idx} className={styles.tweet}>
          <Tweet id={id} />
        </div>
      ))}
    </div>
  );
};


  // Render articles
  const renderArticles = () => {
    return (
      articles && articles.length ? (
        <ul className={styles.articleList}>
          {articles.map((link, index) => (
            <li key={index} className={styles.articleItem}>
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.articleLink}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles available.</p>
      )
    );
  };

  // Mobile view: use tabbed interface
  if (isMobile) {
    return (
      <div className={styles.containerMobile}>
        <div className={styles.billCard}>
          <h1>{title}</h1>
          <ul>
            {bps.map((bp, idx) => (
              <li key={idx}>{bp}</li>
            ))}
          </ul>
          <p>{pork}</p>
        </div>
        <MobileTabs 
          table={renderTable()} 
          tweets={renderTweets()} 
          articles={renderArticles()} 
        />
      </div>      
    );
  }

  // Desktop view: two columns with independent stacking
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {/* Left Column: Top Left (small card) then Bottom Left (large card) */}
        <div className={`${styles.column} ${styles.leftColumn}`}>
          <div className={`${styles.card} ${styles.smallCard}`}>
          <div className={styles.scrollable}>
            <h1>{title}: {passed}</h1>
            <ul>
              {bps.map((bp, idx) => (
                <li key={idx}>{bp}</li>
              ))}
            </ul>
            <p>{pork}</p>
          </div>
          </div>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <div className={styles.scrollable}>{renderTable()}</div>
          </div>
        </div>
        {/* Right Column: Top Right (large card) then Bottom Right (small card) */}
        <div className={`${styles.column} ${styles.rightColumn}`}>
          <div className={`${styles.card} ${styles.largeCard}`}>
            <div className={styles.scrollable}>{renderTweets()}</div>
          </div>
          <div className={`${styles.card} ${styles.smallCard}`}>
          <div className={styles.scrollable}>
            {articles && articles.length ? (
              <ul className={styles.articleList}>
                {articles.map((link, index) => (
                  <li key={index} className={styles.articleItem}>
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.articleLink}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No articles available.</p>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Simple tabbed interface for mobile
function MobileTabs({ table, tweets, articles }) {
  const [activeTab, setActiveTab] = useState('table');

  return (
    <div>
      <div className={styles.tabBar}>
        <button
          className={activeTab === 'table' ? styles.activeTab : ''}
          onClick={() => setActiveTab('table')}
        >
          Table
        </button>
        <button
          className={activeTab === 'tweets' ? styles.activeTab : ''}
          onClick={() => setActiveTab('tweets')}
        >
          Tweets
        </button>
        <button
          className={activeTab === 'articles' ? styles.activeTab : ''}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'table' && table}
        {activeTab === 'tweets' && tweets}
        {activeTab === 'articles' && articles}
      </div>
    </div>
  );
}