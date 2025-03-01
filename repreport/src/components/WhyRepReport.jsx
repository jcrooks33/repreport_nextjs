import Link from 'next/link';
import styles from '../css/WhyRepReport.module.css';

export default function WhyRepReport() {
  return (
    <section className={styles.whySection}>
      <div className={styles.container}>
        <div className={styles.headerSection}>
          <h2 className={styles.mainHeading}>Stay Informed</h2>
          <p className={styles.subheading}>Nonpartisan, concise, and dependable political media.</p>
        </div>
        
        <div className={styles.contentGrid}>
          {/* Left side: Capitol Image */}
          <div className={styles.imageColumn}>
            <img 
              src="https://mcusercontent.com/4c0f3950dc0f76487d3277a17/images/bfea30bf-72b4-b783-b164-acbfbc15ab9d.jpg"
              alt="Capitol Building"
              className={styles.capitolImage}
            />
          </div>
          
          {/* Right side: Why RepReport */}
          <div className={styles.infoColumn}>
            <h3 className={styles.whyTitle}>Why RepReport?</h3>
            
            <div className={styles.reasonItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.reasonContent}>
                <h4>Nonpartisan Coverage</h4>
                <p>We present the facts without political bias.</p>
              </div>
            </div>
            
            <div className={styles.reasonItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.reasonContent}>
                <h4>Simplified Explanations</h4>
                <p>Complex legislation explained in plain language.</p>
              </div>
            </div>
            
            <div className={styles.reasonItem}>
              <div className={styles.checkmark}>✓</div>
              <div className={styles.reasonContent}>
                <h4>Personalized Updates</h4>
                <p>Information tailored to your representatives and interests.</p>
              </div>
            </div>
            
            <Link href="/signup" className={styles.subscribeButton}>
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}