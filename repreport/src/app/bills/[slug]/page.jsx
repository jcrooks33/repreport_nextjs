// src/app/bills/[slug]/page.jsx
import { billsData } from '@/data/billsData';
import { notFound } from 'next/navigation';
import styles from '@/css/BillDetail.module.css'; // optional styling

export async function generateStaticParams() {
  // Pre-generate pages for all bills
  return billsData.map((bill) => ({ slug: bill.slug }));
}

export default function BillDetailPage({ params }) {
  const { slug } = params;
  const bill = billsData.find((b) => b.slug === slug);

  if (!bill) {
    // If the bill doesn't exist, you can trigger a 404
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1>{bill.title}</h1>
      <p>{bill.description}</p>
      {/* Additional details and layout for the bill can go here */}
    </div>
  );
}
