import Image from 'next/image';
import styles from '@/styles/BeyondGallery.module.css';
import React from 'react';

function BeyondGallery() {
  return (
    <section className={styles.section}>
    <div className={styles.galleryImage}>
      <div className={styles.imgBox}>
        <Image 
          src="/music.jpeg"
          alt="Deep House Music :)"
          width={636}
          height={780}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>The music</p>
            <p className={styles.opacityLow}>I really enjoy to feel & listen good music, big fan of Hi-Res, 90&apos; vives & I
                                             the old formats, I have a litle collection of Vinyls and compact DC&apos;s.</p>
          </div>
        </div>
      </div>
            <div className={styles.imgBox}>
        <Image 
          src="/medellin.jpeg"
          alt="Medellin in Night"
           width={636}
          height={780}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>The City</p>
            <p className={styles.opacityLow}>One of my favorites cities, where im actuallly living righ now, just always goods vives here </p>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image 
          src="/cumbal.jpeg"
          alt="Lake Cumbal"
          width={636}
          height={780}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Nature</p>
            <p className={styles.opacityLow}>Smells, sounds and freedom feling provided by nature has not replace for me, walking and enjoyng the landscape is 
              one of the best fellings for me.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image 
          src="/vintage.jpeg"
          alt="Vintage Music Formats"
          width={636}
          height={780}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Tea Talk</p>
            <p className={styles.opacityLow}>Composite</p>
          </div>
        </div>
      </div>

            <div className={styles.imgBox}>
        <Image 
          src="/motorsport.jpeg"
          alt="Motorsport & Mechanics"
          width={526}
          height={680}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Tea Talk</p>
            <p className={styles.opacityLow}>Composite</p>
          </div>
        </div>
      </div>


      <div className={styles.imgBox}>
        <Image 
          src="/landscape.jpeg"
          alt="Bike landscape"
          width={526}
          height={680}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Trocha</p>
            <p className={styles.opacityLow}>Abosolute disconection with the rutinne, 
              I forggott everything when i go trough the uncomparable Colombian trochas</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default BeyondGallery;