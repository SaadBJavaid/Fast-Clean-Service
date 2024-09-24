// components/VantaWrapper.js
"use client";

import VantaBackground from "../../components/Vanta/Vanta";
import {useState} from "react";
import styles from "./VantaWrapper.module.css"; // Ensure this file exists

export default function VantaWrapper({ children }) {
  const [effect, setEffect] = useState({
    /* any specific effect options */
  });

  return (
    <div className={styles.wrapper}>
      <VantaBackground effect={effect} />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
