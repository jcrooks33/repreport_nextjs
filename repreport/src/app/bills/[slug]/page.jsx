// src/app/bills/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import React from 'react';
import { notFound } from 'next/navigation';
import { billsData } from '@/data/billsData';
import BillDetailClient from '../../../components/BillDetailClient' // <-- Client component

// Parse CSV with support for quoted fields
function parseCSV(csvString) {
  const lines = csvString.trim().split('\n');
  const headers = lines[0].split(',').map((h) => h.trim());
  
  const data = [];
  
  // Process each line
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const row = {};
    
    // Special handling for quoted fields that may contain commas
    let values = [];
    let currentValue = '';
    let inQuotes = false;
    
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        // End of field
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    
    // Add the last field
    values.push(currentValue.trim());
    
    // Remove quotes from values
    values = values.map(val => val.replace(/^"(.*)"$/, '$1'));
    
    // Assign values to headers
    headers.forEach((header, index) => {
      row[header] = values[index] || '';
    });
    
    data.push(row);
  }
  
  return { headers, data };
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
    
    // Extract unique values for filtering
    const uniqueStates = [...new Set(tableData.data.map(row => row['State']))].sort();
    const uniqueParties = [...new Set(tableData.data.map(row => row['Party']))].sort();
    const uniqueVotes = [...new Set(tableData.data.map(row => row['Vote']))].sort();
    
    // Add the filter options to the tableData
    tableData.filterOptions = {
      states: uniqueStates,
      parties: uniqueParties,
      votes: uniqueVotes
    };
    
    // Sort the data alphabetically by State
    if (tableData && tableData.data) {
      tableData.data.sort((a, b) =>
        a['State'].localeCompare(b['State'])
      );
    }
  } catch (error) {
    tableData = { error: 'Error loading CSV data' };
  }

  return (
    <BillDetailClient
      title={bill.title}
      bps={bill.bps}
      pork={bill.pork}
      tableData={tableData}
      tweets={bill.tweets} // Pass the tweets array directly
      articles={bill.articles}
      passed={bill.passed}
    />
  );
}
