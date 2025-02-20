import styles from '../css/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p className={styles.p}>©RepReport. All Rights Reserved</p>
                <div className={styles.socialLinks}>
                </div>
            </div>
        </footer>
    );
}
