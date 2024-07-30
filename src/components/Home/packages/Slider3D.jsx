import styles from "./Slider3D.module.css";

const Slider3D = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ "--quantity": 6 }}>
        <div className={styles.item} style={{ "--position": 1 }}>
          <img src="/images/dragon_1.jpg" alt="Dragon 1" />
        </div>
        <div className={styles.item} style={{ "--position": 2 }}>
          <img src="/images/dragon_2.jpg" alt="Dragon 2" />
        </div>
        <div className={styles.item} style={{ "--position": 3 }}>
          <img src="/images/dragon_3.jpg" alt="Dragon 3" />
        </div>
        <div className={styles.item} style={{ "--position": 4 }}>
          <img src="/images/dragon_4.jpg" alt="Dragon 4" />
        </div>
        <div className={styles.item} style={{ "--position": 5 }}>
          <img src="/images/dragon_5.jpg" alt="Dragon 5" />
        </div>
        <div className={styles.item} style={{ "--position": 6 }}>
          <img src="/images/dragon_6.jpg" alt="Dragon 6" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.model}></div>
      </div>
    </div>
  );
};

export default Slider3D;
