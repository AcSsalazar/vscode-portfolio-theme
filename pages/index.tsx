import { useState, useEffect } from 'react';
import Link from 'next/link';
import { VscArrowRight } from 'react-icons/vsc';
import styles from '@/styles/HomePage.module.css';

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
const codeLines = [
    { code: '#     Engineer | Data Specialist | Full Stack Dev    ', type: 'object-method' },
    { code: '', type: 'blank' },
    { code: '#   Hi visitor, welcome to my portfolio :) ', type: 'object-method' },
    { code: 'Here_you_will_find = ', type: 'variable' },
    { code: '{', type: 'comment' },
    { code: '1: [Profile, skills, and_education],', type: 'function-call' },
    { code: '2: "Contact Channels",', type: 'function-call' }, // Corrección: "Channels"
    { code: '3: "Public Projects",', type: 'function-call' },
    { code: '4: "Hobbies and Interests",', type: 'function-call' }, // Corrección: "Interests"
    { code: '5: "GitHub Overview" ', type: 'function-call' },
    { code: '}', type: 'comment' },
    { code: 'print("Hope you enjoy navigating it!")', type: 'function' }, // Corrección: "navigating"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>


        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Andres <span className={styles.accentText}>Salazar</span><span className={styles.pleca}>|</span>
          </h1>

              <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ''
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ''
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

          <div className={styles.actionLinks}>
            <Link href="/about" className={styles.primaryLink}>
              About Me<VscArrowRight />
            </Link>
            

          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <p className={styles.codeBlock1}>{'𝜋'}</p>
        <div className={styles.codeBlock2}>{'<div>'}</div>
        <div className={styles.codeBlock3}>{'.py'}</div>
        <div className={styles.codeBlock4}>{'.json'}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{'.js'}</div>
        <div className={styles.codeSymbol2}>{'φ'}</div>
        <div className={styles.codeSymbol3}>{'.csv'}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
