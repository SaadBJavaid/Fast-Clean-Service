import styles from "./BackgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <div className={styles.videoContainer}>
      <video
        src="/video1.mp4" // Path to the video in the public folder
        autoPlay
        loop
        muted
        className={styles.video}
      />
      {/* Gradient overlay applied via CSS */}
    </div>
  );
};

export default BackgroundVideo;
