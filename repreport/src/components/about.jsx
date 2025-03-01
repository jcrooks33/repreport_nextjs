import styles from '../css/About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      {/* Left side: How it works */}
      <div className={styles.column}>
        <h2 className={styles.heading}>How it works</h2>
        
        <div className={styles.stepList}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Enter your Email</h3>
              <p>Sign up with your email address to get started.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Select your State</h3>
              <p>Choose your state to narrow down your representatives.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Select your Congressional Rep</h3>
              <p>Pick your specific representative to track their voting.</p>
            </div>
          </div>
          
          <div className={styles.step}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Subscribe</h3>
              <p>Start receiving personalized updates about your representative's voting record.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: What you get */}
      <div className={styles.column}>
        <h2 className={styles.heading}>What you get</h2>
        
        <div className={styles.benefitsList}>
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Summaries of each bill Congress votes on</h3>
              <p>Clear, concise explanations of complex legislation.</p>
            </div>
          </div>
          
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Personalized updates on how your Rep. voted</h3>
              <p>Track your representative's voting record on issues that matter to you.</p>
            </div>
          </div>
          
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Explanation of the "pork" hidden within bills</h3>
              <p>Uncover the hidden provisions and special interests in legislation.</p>
            </div>
          </div>
          
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Breakdown of how both parties voted</h3>
              <p>See the partisan divide on important legislation.</p>
            </div>
          </div>
          
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Delivered to your inbox, 2-3x per week</h3>
              <p>Regular updates without overwhelming your inbox.</p>
            </div>
          </div>
          
          <div className={styles.benefit}>
            <div className={styles.checkmark}>✓</div>
            <div className={styles.benefitContent}>
              <h3>Totally Free!</h3>
              <p>Access to all these features at no cost to you.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}