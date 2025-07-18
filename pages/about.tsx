'use client';

import styles from '@/styles/AboutPage.module.css';
import React, { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

// Registrar componentes
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
        <div className={styles.subtitle}>Electronic Engineer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m an electronic engineer from Colombia. I primarily work with React,
              Next, Python and AWS.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with React and Django for the backend, but
              you&apos;ll also find me working with Python notebooks, AWS and Data Analytics. I
              really enjoy frontend implementation.

            I build fully responsive web applications using modern technologies, focus 
            on intuitive user experiences and dynamic data visualizations. 
            My work supports machine learning 
            models, neural networks, AI agents, and data analysis reporting—turning complex data into clear, actionable insights
            through frontend friendly interfaces.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Tessact</span> as Software Engineer
              2, working with a lean team of 4 frontend engineers to build a next-gen video
              creation suite.
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
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming and writing, I like to read dystopian novels, listen to calm
              piano music or just relax.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
