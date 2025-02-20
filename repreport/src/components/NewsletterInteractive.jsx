'use client';

import { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';

const columns = [
  { header: 'Rep Name', accessorKey: 'House_Rep_Name' },
  { header: 'Party', accessorKey: 'House_Rep_Party' },
  { header: 'State', accessorKey: 'House_Rep_State' },
  { header: 'Vote', accessorKey: 'House_Rep_Vote' },
];

export default function NewsletterInteractive({ newsletter }) {
  const [content, setContent] = useState('');
  const [votesData, setVotesData] = useState([]);
  const [activeTab, setActiveTab] = useState('votes');
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [bills, setBills] = useState(newsletter?.bills || []);
  const [selectedBill, setSelectedBill] = useState(newsletter?.bills?.[0] || null);
  const twitterScriptLoaded = useRef(false);

  // Set the newsletter content
  useEffect(() => {
    if (newsletter?.html) {
      setContent(newsletter.html);
    }
  }, [newsletter]);

  // Load CSV for the selected bill
  useEffect(() => {
    if (!selectedBill) return;

    Papa.parse(selectedBill.csv, {
      download: true,
      header: true,
      complete: (results) => {
        setVotesData(results.data);
      },
      error: (err) => console.error('Error parsing CSV:', err),
    });
  }, [selectedBill]);

  // Load Twitter widget script once and process all tweet embeds
  useEffect(() => {
    if (!twitterScriptLoaded.current) {
      twitterScriptLoaded.current = true;
      
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.charset = 'utf-8';
      
      script.onload = () => {
        // Once the script loads, call widgets.load() to process all tweet embeds
        window.twttr.widgets.load();
      };
      
      document.body.appendChild(script);
    }
  }, [bills]);

  const table = useReactTable({
    data: votesData,
    columns,
    state: { sorting, globalFilter },
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: 'includesString',
  });

  // Styles (you can keep your existing style objects)
  const containerStyle = {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
  };

  const leftPanelStyle = {
    flex: 1,
    borderRight: '1px solid #ccc',
    overflowY: 'auto',
    padding: '1rem',
  };

  const rightPanelStyle = {
    flex: '0 0 40%',
    overflowY: 'auto',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  };

  const stickyHeaderStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    zIndex: 10,
    paddingTop: '1rem',
    paddingBottom: '1rem',
    borderBottom: '1px solid #eee',
  };

  const billSelectorContainerStyle = {
    display: 'flex',
    overflowX: 'auto',
    gap: '0.5rem',
    marginBottom: '1rem',
  };

  const billPillStyle = (isActive) => ({
    flexShrink: 0,
    padding: '0.5rem 1rem',
    borderRadius: '9999px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    background: isActive ? '#007bff' : '#f1f1f1',
    color: isActive ? '#fff' : '#000',
  });

  const tabContainerStyle = {
    display: 'flex',
    borderBottom: '1px solid #ccc',
    marginBottom: '1rem',
    gap: '1rem',
  };

  const tabButtonStyle = (isActive) => ({
    padding: '0.5rem 1rem',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderBottom: isActive ? '2px solid #007bff' : '2px solid transparent',
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto',
  };

  const mediaQuery = `
    @media (max-width: 800px) {
      .responsive-container {
        flex-direction: column;
      }
      .left-panel, .right-panel {
        width: 100%;
        flex: unset;
        border-right: none;
        border-bottom: 1px solid #ccc;
      }
    }
  `;

  return (
    <>
      <style>{mediaQuery}</style>
      <div className="responsive-container" style={containerStyle}>
        <div className="left-panel" style={leftPanelStyle}>
          <article dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <div className="right-panel" style={rightPanelStyle}>
          <div style={stickyHeaderStyle}>
            {bills?.length > 0 && (
              <div style={billSelectorContainerStyle}>
                {bills.map((bill) => (
                  <button
                    key={bill.id}
                    onClick={() => setSelectedBill(bill)}
                    style={billPillStyle(selectedBill?.id === bill.id)}
                  >
                    {bill.title}
                  </button>
                ))}
              </div>
            )}

            <div style={tabContainerStyle}>
              <button
                style={tabButtonStyle(activeTab === 'votes')}
                onClick={() => setActiveTab('votes')}
              >
                Representative Votes
              </button>
              <button
                style={tabButtonStyle(activeTab === 'tweets')}
                onClick={() => setActiveTab('tweets')}
              >
                Related Tweets
              </button>
            </div>
          </div>

          {activeTab === 'votes' && (
            <>
              <h2>Representative Votes</h2>
              <input
                type="text"
                value={globalFilter}
                onChange={(e) => setGlobalFilter(e.target.value)}
                placeholder="Search all columns..."
                style={{
                  marginBottom: '1rem',
                  padding: '0.5rem',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
              <table style={tableStyle}>
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          style={{
                            cursor: 'pointer',
                            border: '1px solid #ccc',
                            padding: '8px',
                            background: '#f9f9f9',
                          }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽',
                          }[header.column.getIsSorted()] ?? null}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          style={{ border: '1px solid #ccc', padding: '8px' }}
                        >
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeTab === 'tweets' && (
            <>
              <h2>Related Tweets</h2>
              {/* Render only the selected bill’s tweets */}
              {selectedBill?.tweets?.map((tweetHTML, index) => (
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: tweetHTML }}
                  style={{ marginTop: '1rem' }}
                />
              ))}
            </>
          )}
        </div>
      </div>

      {/* Hidden container: renders all tweet embed HTML for all bills once */}
      <div style={{ display: 'none' }}>
        {bills.flatMap(bill => bill.tweets || []).map((tweetHTML, index) => (
          <div key={`hidden-${index}`} dangerouslySetInnerHTML={{ __html: tweetHTML }} />
        ))}
      </div>
    </>
  );
}
