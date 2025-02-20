import styles from '../css/About.module.css';

export default function About() {
  return (
    <section className={styles.aboutSection}>
      {/* Left side: text content */}
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>Stay Informed</h1>
        <p className={styles.subheading}>
          {/*Get quick, personalized updates on what's happening in Congress.*/}
          Nonpartisan, concise, and dependable political media.
        </p>

        <div className={styles.infoBlocks}>
          <div className={styles.infoBlock}>
            <h3>How it works...</h3>
            <ul>
              <li>Enter your Email</li>
              <li>Select your State</li>
              <li>Select your Congressional Rep.</li>
              <li>Subscribe</li>
            </ul>
          </div>
          <hr className={styles.divider} />
          <div className={styles.infoBlock}>
            <h3>What you get...</h3>
            <ul>
              <li>Summaries of each bill Congress votes on</li>
              <li>Personalized updates on how your Rep. voted</li>
              <li>Explanation of the “pork” hidden within bills</li>
              <li>Breakdown of how both parties voted</li>
              <li>Delivered to your inbox, 2-3x per week</li>
              <li>Totally Free!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right side: image */}
      <div className={styles.imageContainer}>
        <img
            src="https://mcusercontent.com/4c0f3950dc0f76487d3277a17/images/bfea30bf-72b4-b783-b164-acbfbc15ab9d.jpg"
          alt="Capitol building"
        />
      </div>
    </section>
  );
}
