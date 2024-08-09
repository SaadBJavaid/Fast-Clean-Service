import styles from "./CTA.module.css";

const CTA = ({ scrolled }) => {
  return (
    <div className={styles.ctaContainer}>
      <div
        className={styles.ctaButton}
        style={{
          bottom: scrolled ? "120px" : "160px",
          right: scrolled ? "10px" : "62px",
        }}
      ></div>
      <p
        className={styles.name}
        style={{
          bottom: scrolled ? "40px" : "60px",
          right: scrolled ? "10px" : "40px",
        }}
      >
        BOOK NOW
      </p>
    </div>
  );
};

export default CTA;
