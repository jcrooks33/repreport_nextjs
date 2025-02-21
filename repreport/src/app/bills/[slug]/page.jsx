// src/app/bills/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import React from 'react';
import { notFound } from 'next/navigation';
import { billsData } from '@/data/billsData';
import BillDetailClient from '../../../components/BillDetailClient' // <-- Client component

// Parse CSV
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
  return billsData.map((bill) => ({ slug: bill.slug }));
}

export default async function BillDetailPage({ params }) {
  const { slug } = await params;

  // Now use slug for any async operations like data fetching:
  const bill = billsData.find((b) => b.slug === slug);
  if (!bill) {
    notFound();
  }

  // --- Parse the CSV server-side ---
  const csvPath = path.join(process.cwd(), 'public', bill.csv);
  let tableData = null;
  try {
    const csvContent = fs.readFileSync(csvPath, 'utf8');
    tableData = parseCSV(csvContent);
    // Sort the data alphabetically by House_Rep_State
    if (tableData && tableData.data) {
    tableData.data.sort((a, b) =>
      a['State'].localeCompare(b['State'])
    );
  }
  } catch (error) {
    tableData = { error: 'Error loading CSV data' };
  }

  // --- Extract Tweet IDs ---
  const tweetIds = bill.tweets
    .map((tweetHtml) => extractTweetId(tweetHtml))
    .filter((id) => !!id); // Filter out nulls

  return (
    <BillDetailClient
      title={bill.title}
      bps={bill.bps}
      pork={bill.pork}
      tableData={tableData}
      tweetIds={tweetIds}
      articles={bill.articles}
      passed={bill.passed}
    />
  );
}
