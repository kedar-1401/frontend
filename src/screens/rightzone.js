import React from "react";
import styles from './rightzone.module.css'
import "./Login.css";

const RHeader = () => {
  return (
    <div class="container">
      <div className={styles.main1} style={{ display: 'flex' }}> {/* Added style for Flexbox */}
        <div className={styles.left1}></div>
        <div className={`${styles.right1} ${styles.alignRight}`}> {/* Added alignRight class */}
          <section className="section-hero">
            <div className="container grid grid-two-cols">
              <div className="">
                <h1>Get Started Today</h1>
                <p>
                  Ready to take the first step towards a more efficient and secure
                  IT infrastructure? Contact us today for a free consultation and
                  let's discuss how Thapa Technical can help your business thrive in
                  the digital age.
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">connect now</button>
                  </a>
                  <a href="/services">
                    <button className="btn secondary-btn">learn more</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RHeader;
