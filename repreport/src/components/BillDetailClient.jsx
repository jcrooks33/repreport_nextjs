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

export default function BillDetailClient({ title, bps, pork, tableData, tweetIds }) {
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
    return tweetIds.map((id, idx) => (
      <div key={idx} className={styles.tweet}>
        <Tweet id={id} />
      </div>
    ));
  };

  // If mobile, render a tabbed interface
  if (isMobile) {
    return (
      <div className={styles.container}>
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
        />
      </div>
    );
  }

  // Otherwise (desktop), show two-column layout
  return (
    <div className={styles.container}>
        <div className={styles.billCard}>
      <h1>{title}</h1>
      <ul>
        {bps.map((bp, idx) => (
          <li key={idx}>{bp}</li>
        ))}
      </ul>
      <p>{pork}</p>
</div>
      <div className={styles.twoColumn}>
        <div className={styles.left}>
          {renderTable()}
        </div>
        <div className={styles.right}>
          {renderTweets()}
        </div>
      </div>
    </div>
  );
}

// Simple tabbed interface for mobile
function MobileTabs({ table, tweets }) {
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
      </div>

      <div className={styles.tabContent}>
        {activeTab === 'table' ? table : tweets}
      </div>
    </div>
  );
}
