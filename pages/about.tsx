'use client';

import styles from '@/styles/AboutPage.module.css';
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import Link from 'next/link';
// Register the components
echarts.use([TitleComponent, RadarChart, CanvasRenderer]);

const AboutPage = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Estado: categoría seleccionada
  const [category, setCategory] = useState<'Full-Stack' | 'Software' | 'Others'>('Full-Stack');

  // Datos e indicadores
  const indicators = {
    
    'Full-Stack': [
      { name: 'Python', max: 10 },
      { name: 'CSS', max: 10 },
      { name: 'JS', max: 10 },
      { name: 'HTML', max: 10 },
      { name: 'SQL', max: 10 }
    ],
    'Software': [
      { name: 'Studio One', max: 10 },
      { name: 'VScode', max: 10 },
      { name: 'Office Package', max: 10 },
      { name: 'DaVinci Resolve', max: 10 },
      { name: 'Magix', max: 10 }
    ],
    'Others': [
      { name: 'Hostinger', max: 10 },
      { name: 'AWS', max: 10 },
      { name: 'WordPress', max: 10 },
      { name: 'Cpanel', max: 10 },
      { name: 'Vercel', max: 10 }
    ]
  };

  const dataSets = {
    'Full-Stack': [[6, 7, 5, 7, 5]],
    'Software': [[8, 6, 5, 6, 7]],
    'Others': [[7, 7, 7, 5, 5]]
  };

  const colors = {
    'Full-Stack': '#F9713C',
    'Software': '#4238ccff',
    'Others': '#79cf71ff'
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });

    const resizeHandler = () => myChart.resize();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      myChart.dispose();
    };
  }, []);

  // Actualiza el chart cuando cambia la categoría
  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.getInstanceByDom(chartRef.current);
    if (!myChart) return;

    myChart.setOption(
      {
        backgroundColor: 'transparent',
        
        title: {
          
          left: 'center',
          textStyle: { color: '#eee' }
        },
        radar: {
          indicator: indicators[category],
          shape: 'circle',
          splitNumber: 5,


          axisName: {
            color: 'rgb(238,197,102)',
           },
            
          splitLine: {
            lineStyle: {
              color: [
                'rgba(238,197,102,0.1)',
                'rgba(238,197,102,0.2)',
                'rgba(238,197,102,0.4)',
                'rgba(238,197,102,0.6)',
                'rgba(238,197,102,0.8)',
                'rgba(238,197,102,1)'
              ].reverse()
            }
          },
          splitArea: { show: false },
          axisLine: { lineStyle: { color: 'rgba(238,197,102,0.5)' } }
        },
        series: [
          {
            name: category,
            type: 'radar',
            data: dataSets[category],
            symbol: 'circle',
            symbolSize: 6,
            lineStyle: { width: 2, opacity: 0.9 },
            itemStyle: { color: colors[category] },
            areaStyle: { opacity: 0.3, color: colors[category] },
            animationDuration: 200,
            animationDurationUpdate: 100,
            animationEasingUpdate: 'cubicOut'
          }
        ]
      },
      { notMerge: true } // Reemplaza completamente para cambiar indicadores
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

return (
  <div className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Andres Salazar</h1>
      <div className={styles.subtitle}>Electronic Engineer - Data Analyst</div>

      <div className={styles.aboutContent}>
        <section className={styles.section}>
          <p className={styles.paragraph}>
            Hey! I&apos;m an electronic engineer from Colombia. I primarily work with React,
            Next.js, Python, and AWS.
          </p>
          <p className={styles.paragraph}>
            My main focus is frontend development using React, often paired with Django for the backend.
            But I also spend a good amount of time working with Python notebooks, AWS services, and data analytics.
            I genuinely enjoy bringing interfaces to life through clean, responsive design.
            <br /><br />
            I build fully responsive web applications using modern technologies, with a strong focus
            on intuitive user experiences and dynamic data visualizations.
            My work often supports machine learning models, neural networks, AI agents, and analytical reports—
            translating complex data into clear, actionable insights through user-friendly interfaces.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.paragraph}>
            I&apos;ve worked for almost two years as a <span className={styles.highlight}>junior</span> developer,
            building web applications with Django Rest Framework and React or Next.js.
            I&apos;ve also customized websites and e-commerce platforms in WordPress, where I created functional code snippets
            to implement things like custom forms, sliders, and third-party integrations.
            Additionally, I worked on CSS restyling and landing page development.
            <br /><br />
            Beyond coding, I also configured web hosting environments to support Python applications, APIs, and email services.
          </p>
        </section>

        {/* Botones de selección */}
        <div className={styles.buttonGroup}>
          {(['Full-Stack', 'Software', 'Others'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              style={{
                padding: '0.5rem 1rem',
                background: category === cat ? colors[cat] : '#333',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div
          className={styles.chartContainer}
          ref={chartRef}
          style={{ width: '100%', height: '400px' }}
        />


        <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
<p className={styles.paragraph}>
I hold a degree in Electronic Engineering from the <Link href='https://unal.edu.co/' className={styles.linksunal}> National University of Colombia</Link>
(UNAL), and I completed a postgraduate specialization in Data Science and Artificial Intelligence from the <Link href='https://udemedellin.edu.co/' className={styles.linksudem}>
Universidad De Medellín</Link>.
This academic background gave me solid foundations in both hardware and software. 
I see this field as a continuous journey of learning—always discovering useful papers, tools, and concepts that inspire me to improve.
</p>



</section>

      </div>



    </div>
  </div>
);
}

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
