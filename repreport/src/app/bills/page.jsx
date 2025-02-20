// src/app/bills/page.jsx
import Link from 'next/link';
import styles from '@/css/Bills.module.css'; // optional CSS module for styling
import { billsData } from '@/data/billsData'; // assume you have an array of bills

export default function BillsPage() {
  return (
    <div className={styles.container}>
      <h1>All Bills</h1>
      <ul className={styles.billList}>
        {billsData.map((bill) => (
          <li key={bill.slug} className={styles.billItem}>
            <Link href={`/bills/${bill.slug}`} className={styles.billLink}>
            <h2>{bill.title}</h2>
            <p>{bill.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
