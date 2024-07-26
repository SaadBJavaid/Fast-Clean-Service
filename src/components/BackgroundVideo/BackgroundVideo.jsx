import styles from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video src="/video1.mp4" autoPlay loop muted className={styles.video} />
    </div>
  );
};

export default BackgroundVideo;
