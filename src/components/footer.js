import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>Copyright © 2023 All rights reserved | Made with ❤️ by EduTech
        </p>
        <div className={styles.links}>
          <a href="/contact" className={styles.link}>Contact Us</a>
          <a href="/about" className={styles.link}>About Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
