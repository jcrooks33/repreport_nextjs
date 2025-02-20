import fs from 'fs';
import path from 'path';
import React from 'react';
import { billsData } from '@/data/billsData';
import { notFound } from 'next/navigation';
import styles from '@/css/BillDetail.module.css';
import { Tweet } from 'react-tweet'; // This package is assumed to support SSR

// Simple CSV parser: assumes first line contains comma-separated headers.
function parseCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',').map((h) => h.trim());
  const data = lines.slice(1).map((line) => {
    const values = line.split(',').map((val) => val.trim());
    const row = {};
    headers.forEach((header, i) => {
      row[header] = values[i] || '';
    });
    return row;
  });
  return { headers, data };
}

// Extract tweet ID from embed HTML (looks for /status/ID).
function extractTweetId(embedHtml) {
  const match = embedHtml.match(/\/status\/(\d+)/);
  return match ? match[1] : null;
}

export async function generateStaticParams() {
  // Pre-generate pages for all bills
  return billsData.map((bill) => ({ slug: bill.slug }));
}

export default function BillDetailPage({ params }) {
  const { slug } = params;
  const bill = billsData.find((b) => b.slug === slug);
  if (!bill) {
    notFound();
  }

  // Load CSV file and parse it into table data.
  const csvPath = path.join(process.cwd(), 'public', bill.csv);
  let tableData = null;
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    tableData = parseCSV(csvContent);
  } catch (error) {
    tableData = { error: 'Error loading CSV data' };
  }

  return (
    <div className={styles.container}>
      {/* Header Section: Title, bullet points, and pork text */}
      <h1>{bill.title}</h1>
      <ul>
        {bill.bps.map((bp, idx) => (
          <li key={idx}>{bp}</li>
        ))}
      </ul>
      <p>{bill.pork}</p>

      {/* Two-Column Layout */}
      <div className={styles.twoColumn}>
        {/* Left Column: CSV table */}
        <div className={styles.left}>
          {tableData.error ? (
            <p>{tableData.error}</p>
          ) : (
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
          )}
        </div>

        {/* Right Column: Tweets */}
        <div className={styles.right}>
          {bill.tweets.map((tweetHtml, idx) => {
            const tweetId = extractTweetId(tweetHtml);
            return tweetId ? (
              <div key={idx} className={styles.tweet}>
                <Tweet id={tweetId} />
              </div>
            ) : (
              <p key={idx}>Error loading tweet.</p>
            );
          })}
        </div>
      </div>
    </div>
  );
}
