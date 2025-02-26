// src/app/map/components/ProvinceModal.js
"use client";

import { useEffect, useState } from 'react';
import styles from '../map.module.css';

export default function ProvinceModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [province, setProvince] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const handleShowProvinceDetail = (event) => {
      setProvince(event.detail.province);
      setData(event.detail.data);
      setIsOpen(true);
    };

    window.addEventListener('showProvinceDetail', handleShowProvinceDetail);
    return () => window.removeEventListener('showProvinceDetail', handleShowProvinceDetail);
  }, []);

  if (!isOpen || !data) return null;

  return (
    <div className={styles.provinceModal}>
      <div className={styles.modalContent}>
        <div className={styles.modalImage}>
          <img src={data.image} alt={province} />
        </div>
        <div className={styles.modalText}>
          <h2>{province}</h2>
          <p>{data.description}</p>
          <div className={styles.scentProfiles}>
            {data.scents.map((scent, index) => (
              <div key={index} className={styles.scentProfile}>
                <h3>{scent.name}</h3>
                <ul>
                  {scent.notes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <button onClick={() => window.open(data.pdf, '_blank')}>查看完整报告</button>
        </div>
      </div>
      <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
        关闭
      </button>
    </div>
  );
}