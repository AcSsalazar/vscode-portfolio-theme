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
          width={836}
          height={980}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>The music</p>
            <p className={styles.opacityLow}>
              I really enjoy feeling and listening to good music — I&apos;m a big fan of Hi-Res audio and &apos;90s vibes. 
              I love old formats, and I have a small collection of vinyl records and compact discs.
            </p>
          </div>
        </div>
      </div>
            <div className={styles.imgBox}>
        <Image 
          src="/medellin.jpeg"
          alt="Medellin in Night"
          width={836}
          height={980}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>The City</p>
            <p className={styles.opacityLow}>
              Medellín is one of my favorite cities — and also my current home. 
              It&apos;s located in a beautiful region of Colombia with an amazing mix of mountains, 
              rivers, and charming towns.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image 
          src="/cumbal.jpeg"
          alt="Lake Cumbal"
          width={836}
          height={980}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Nature</p>
            <p className={styles.opacityLow}>The smells, sounds, and feeling of freedom that nature provides are irreplaceable to me. 
              Walking and enjoying the landscape is one of the best feelings I know.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.imgBox}>
        <Image 
          src="/vintage.jpeg"
          alt="Vintage Music Formats"
          width={813}
          height={1080}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Lens</p>
            <p className={styles.opacityLow}>There&apos;s something special about the look of film photography — it always captures my attention. 
              I&apos;ve started collecting vintage cameras.
            </p>
          </div>
        </div>
      </div>

            <div className={styles.imgBox}>
        <Image 
          src="/enginebmw.jpeg"
          alt="Motorsport & Mechanics"
          width={840}
          height={980}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Mortorsport</p>
            <p className={styles.opacityLow}>The pure sound of conbustion engines, the pursuit of limits, 
              and the awesome engineering behind motorsports has been one of my biggest passions since I was a kid.
            </p>
          </div>
        </div>
      </div>


      <div className={styles.imgBox}>
        <Image 
          src="/landscape.jpeg"
          alt="Bike landscape"
          width={526}
          height={880}
        />
        <div className={styles.transparentBox}>
          <div className={styles.caption}>
            <p>Trocha</p>
            <p className={styles.opacityLow}>It&apos;s absolute disconnection from routine — 
              I forget everything when I go through the incomparable trochas of Colombia</p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default BeyondGallery;