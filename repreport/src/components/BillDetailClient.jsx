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

export default function BillDetailClient({ title, bps, pork, tableData, tweets, articles, passed }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  // Party filter state for tweets
  const [activePartyFilter, setActivePartyFilter] = useState('All');
  
  // Table filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [partyFilter, setPartyFilter] = useState('All Parties');
  const [voteFilter, setVoteFilter] = useState('All Votes');
  const [stateFilter, setStateFilter] = useState('All States');
  
  // Filter tweets based on selected party
  const filteredTweets = tweets ? tweets.filter(tweet => {
    if (activePartyFilter === 'All') return true;
    return tweet.party === activePartyFilter;
  }) : [];
  
  // Filter table data based on filters
  const filteredTableData = tableData && tableData.data ? tableData.data.filter(row => {
    // Apply search filter (for Rep name)
    const matchesSearch = searchTerm === '' || 
      (row['Rep'] && row['Rep'].toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Apply party filter
    const matchesParty = partyFilter === 'All Parties' || row['Party'] === partyFilter;
    
    // Apply vote filter
    const matchesVote = voteFilter === 'All Votes' || row['Vote'] === voteFilter;
    
    // Apply state filter
    const matchesState = stateFilter === 'All States' || row['State'] === stateFilter;
    
    return matchesSearch && matchesParty && matchesVote && matchesState;
  }) : [];
  
  // Render table
  const renderTable = () => {
    if (tableData && tableData.error) {
      return <p>{tableData.error}</p>;
    }
    
    if (!tableData || !tableData.headers) {
      return <p>No voting data available.</p>;
    }
    
    // Get unique filter values from tableData
    const partyOptions = tableData.filterOptions?.parties || [];
    const voteOptions = tableData.filterOptions?.votes || [];
    const stateOptions = tableData.filterOptions?.states || [];
    
    return (
      <div className={styles.tableContainer}>
        <h2>Representatives Voting Record</h2>
        <div className={styles.tableFilters}>
          <input 
            type="text" 
            placeholder="Search representatives" 
            className={styles.searchInput} 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select 
            className={styles.filterDropdown}
            value={partyFilter}
            onChange={(e) => setPartyFilter(e.target.value)}
          >
            <option>All Parties</option>
            {partyOptions.map(party => (
              <option key={party} value={party}>{party}</option>
            ))}
          </select>
          <select 
            className={styles.filterDropdown}
            value={voteFilter}
            onChange={(e) => setVoteFilter(e.target.value)}
          >
            <option>All Votes</option>
            {voteOptions.map(vote => (
              <option key={vote} value={vote}>{vote}</option>
            ))}
          </select>
          <select 
            className={styles.filterDropdown}
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
          >
            <option>All States</option>
            {stateOptions.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>
        <div className={styles.tableScrollWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                {tableData.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredTableData.length > 0 ? (
                filteredTableData.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {tableData.headers.map((header, cellIndex) => (
                      <td key={cellIndex}>{row[header]}</td>
                    ))}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={tableData.headers.length} className={styles.noResults}>
                    No representatives match your filters
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Render tweets (statements)
  const renderTweets = () => {
    if (!tweets || !tweets.length) {
      return <p>No tweets available.</p>;
    }
    
    return (
      <div className={styles.statementsSection}>
        <h2>Representative Statements</h2>
        <div className={styles.filterTabs}>
          <button 
            className={`${styles.filterTab} ${activePartyFilter === 'All' ? styles.activeFilterTab : ''}`}
            onClick={() => setActivePartyFilter('All')}
          >
            All
          </button>
          <button 
            className={`${styles.filterTab} ${activePartyFilter === 'Democrat' ? styles.activeFilterTab : ''}`}
            onClick={() => setActivePartyFilter('Democrat')}
          >
            Democrat
          </button>
          <button 
            className={`${styles.filterTab} ${activePartyFilter === 'Republican' ? styles.activeFilterTab : ''}`}
            onClick={() => setActivePartyFilter('Republican')}
          >
            Republican
          </button>
          <button 
            className={`${styles.filterTab} ${activePartyFilter === 'Independent' ? styles.activeFilterTab : ''}`}
            onClick={() => setActivePartyFilter('Independent')}
          >
            Independent
          </button>
        </div>
        <div className={styles.tweetsContainer}>
          <div className={`${styles.tweetsGrid} ${isMobile ? styles.tweetsMobileGrid : ''}`}>
            {filteredTweets.length > 0 ? (
              filteredTweets.map((tweet, idx) => (
                isMobile ? (
                  <Tweet key={idx} id={tweet.id} />
                ) : (
                  <div key={idx} className={styles.tweetCard}>
                    <Tweet id={tweet.id} />
                  </div>
                )
              ))
            ) : (
              <p className={styles.noResults}>No tweets available from {activePartyFilter} representatives</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderArticles = () => {
    return (
      <div className={styles.articlesSection}>
        <h2>Related Articles</h2>
        <p className={styles.articleSubheading}>News coverage about this bill</p>
        <div className={styles.articlesContainer}>
          {articles && articles.length ? (
            <div className={styles.articlesGrid}>
              {articles.map((article, index) => (
                <div key={index} className={styles.articleCard}>

                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <p className={styles.articleSource}>{article.source} • {article.date}</p>
                  <p className={styles.articleExcerpt}>{article.excerpt}</p>
                  <a 
                    href={article.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.readMoreLink}
                  >
                    Read full article
                  </a>
                </div>
              ))}
            </div>
          ) : (
            <p>No articles available.</p>
          )}
        </div>
      </div>
    );
  };

  // Summary Section
  const renderSummary = () => {
    return (
      <div className={styles.summaryCard}>
        <h1>{title}</h1>
        <p className={styles.subheading}>Key points about this legislation</p>
        <ul className={styles.keyPointsList}>
          {bps && bps.map((bp, idx) => (
            <li key={idx}>{bp}</li>
          ))}
        </ul>
        {pork && <p className={styles.additionalInfo}>{pork}</p>}
      </div>
    );
  };

  // Mobile view: use stacked sections with tabs for data/tweets/articles
  if (isMobile) {
    return (
      <div className={styles.containerMobile}>
        <div className={styles.headerSection}>
          <h1 className={styles.siteTitle}>Bill Tracker</h1>
        </div>
        
        {renderSummary()}
        
        <MobileTabs 
          summary={renderSummary()}
          table={renderTable()} 
          tweets={renderTweets()} 
          articles={renderArticles()} 
        />
      </div>      
    );
  }

  // Desktop view: stacked layout matching the screenshots
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.siteTitle}>Bill Tracker</h1>
      </div>
      
      {/* Top section - Summary */}
      {renderSummary()}
      
      {/* Middle section - Statements/Tweets with fixed height */}
      {renderTweets()}
      
      {/* Bottom section - Two columns: Table and Articles */}
      <div className={styles.twoColumnSection}>
        <div className={styles.leftColumn}>
          {renderTable()}
        </div>
        <div className={styles.rightColumn}>
          {renderArticles()}
        </div>
      </div>
    </div>
  );
}

// Improved tabbed interface for mobile
function MobileTabs({ summary, table, tweets, articles }) {
  const [activeTab, setActiveTab] = useState('statements');

  return (
    <div className={styles.mobileTabsContainer}>
      <div className={styles.tabBar}>
        <button
          className={`${styles.tabButton} ${activeTab === 'statements' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('statements')}
        >
          Statements
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'voting' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('voting')}
        >
          Voting
        </button>
        <button
          className={`${styles.tabButton} ${activeTab === 'articles' ? styles.activeTab : ''}`}
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </button>
      </div>
      <div className={styles.tabContent}>
        {activeTab === 'statements' && <div className={styles.mobileSection}>{tweets}</div>}
        {activeTab === 'voting' && <div className={styles.mobileSection}>{table}</div>}
        {activeTab === 'articles' && <div className={styles.mobileSection}>{articles}</div>}
      </div>
    </div>
  );
}