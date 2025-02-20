import React from 'react';
import { newsletterData } from '@/data/newslettersData';

// Pre-render newsletter pages based on available slugs.
export async function generateStaticParams() {
  const slugs = Object.keys(newsletterData);
  return slugs.map((slug) => ({ slug }));
}

// Force static rendering.
export const dynamic = 'force-static';

export default async function NewsletterPage({ params }) {
  const { slug } = params;
  const newsletter = newsletterData[slug];

  // Newsletter content only.
  const newsletterContent = (
    <div>
      {newsletter.html ? (
        <div dangerouslySetInnerHTML={{ __html: newsletter.html }} />
      ) : (
        <p>No newsletter content available.</p>
      )}
    </div>
  );

  return (
    <div style={{ padding: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{newsletter.title}</h1>
      {newsletterContent}
    </div>
  );
}
