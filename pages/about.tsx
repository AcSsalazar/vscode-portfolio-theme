"use client";

import styles from "@/styles/AboutPage.module.css";
import React, { useEffect, useRef, useState } from "react";
import * as echarts from "echarts/core";
import { RadarChart } from "echarts/charts";
import { TitleComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import Link from "next/link";
// Register the components
echarts.use([TitleComponent, RadarChart, CanvasRenderer]);

const AboutPage = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Estado: categoría seleccionada
  const [category, setCategory] = useState<
    "Full-Stack" | "AI & Data Science" | "Infrastructure"
  >("Full-Stack");

  // Datos e indicadores
  const indicators = {
    "Full-Stack": [
      { name: "Python", max: 10 },
      { name: "CSS", max: 10 },
      { name: "JS", max: 10 },
      { name: "HTML", max: 10 },
      { name: "SQL", max: 10 },
    ],
    "AI & Data Science": [
      { name: "Pytorch", max: 10 },
      { name: "GitHub Copilot", max: 10 },
      { name: "OpenCode", max: 10 },
      { name: "Scikit-Learn", max: 10 },
      { name: "TensorFlow", max: 10 },
    ],
    Infrastructure: [
      { name: "Render", max: 10 },
      { name: "AWS", max: 10 },
      { name: "VPS", max: 10 },
      { name: "Cpanel", max: 10 },
      { name: "Vercel", max: 10 },
    ],
  };

  const dataSets = {
    "Full-Stack": [[9, 10, 8, 10, 7]],
    "AI & Data Science": [[9, 7, 7, 8, 8]],
    Infrastructure: [[7, 8, 7, 9, 8]],
  };

  const colors = {
    "Full-Stack": "#F9713C",
    "AI & Data Science": "#4238ccff",
    Infrastructure: "#79cf71ff",
  };

  useEffect(() => {
    if (!chartRef.current) return;

    const myChart = echarts.init(chartRef.current, null, {
      renderer: "canvas",
      useDirtyRect: false,
    });

    const resizeHandler = () => myChart.resize();
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
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
        backgroundColor: "transparent",

        title: {
          left: "center",
          textStyle: { color: "#eee" },
        },
        radar: {
          indicator: indicators[category],
          shape: "circle",
          splitNumber: 5,

          axisName: {
            color: "rgb(238,197,102)",
          },

          splitLine: {
            lineStyle: {
              color: [
                "rgba(238,197,102,0.1)",
                "rgba(238,197,102,0.2)",
                "rgba(238,197,102,0.4)",
                "rgba(238,197,102,0.6)",
                "rgba(238,197,102,0.8)",
                "rgba(238,197,102,1)",
              ].reverse(),
            },
          },
          splitArea: { show: false },
          axisLine: { lineStyle: { color: "rgba(238,197,102,0.5)" } },
        },
        series: [
          {
            name: category,
            type: "radar",
            data: dataSets[category],
            symbol: "circle",
            symbolSize: 6,
            lineStyle: { width: 2, opacity: 0.9 },
            itemStyle: { color: colors[category] },
            areaStyle: { opacity: 0.3, color: colors[category] },
            animationDuration: 200,
            animationDurationUpdate: 100,
            animationEasingUpdate: "cubicOut",
          },
        ],
      },
      { notMerge: true }, // Reemplaza completamente para cambiar indicadores
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Andres Salazar</h1>
        {/*         <div className={styles.subtitle}>
          
        </div> */}

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m an Electronics Engineer from Colombia focused on
              AI-powered web applications, full-stack development, and machine
              learning systems. I primarily work with React, Next.js, Python,
              FastAPI, and AWS.
            </p>

            <p className={styles.paragraph}>
              My work combines modern frontend development with backend
              architectures, data processing, and AI integration. I enjoy
              building responsive interfaces, scalable APIs, and interactive
              data visualizations that transform complex information into
              intuitive user experiences.
              <br />
              <br />
              I&apos;ve worked on projects involving neural networks, signal
              processing, multimodal AI pipelines, and analytical platforms,
              always with a strong focus on performance, usability, and clean
              software architecture.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Over the past few years, I&apos;ve worked on full-stack
              applications using React, Next.js, Django, and FastAPI, developing
              scalable systems focused on automation, business workflows, and
              data-driven interfaces.
              <br />
              <br />
              My experience includes REST API integration, cloud deployments,
              database management, technical SEO, and infrastructure
              configuration across platforms such as AWS, Render, Vercel, and
              VPS environments. I&apos;ve also customized WordPress and
              e-commerce solutions through advanced JavaScript integrations and
              UI improvements.
              <br />
              <br />
              Beyond web development, I actively work on AI and Deep Learning
              projects, building CNN-based models, signal processing pipelines,
              and interactive interfaces for machine learning applications.
            </p>
          </section>

          {/* Botones de selección */}
          <div className={styles.buttonGroup}>
            {(
              ["Full-Stack", "AI & Data Science", "Infrastructure"] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                style={{
                  padding: "0.5rem 1rem",
                  background: category === cat ? colors[cat] : "#333",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontFamily: "JetBrains Mono, monospace",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div
            className={styles.chartContainer}
            ref={chartRef}
            style={{ width: "100%", height: "400px" }}
          />

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education</h2>
            <p className={styles.paragraph}>
              I hold a B.Sc. in Electronics Engineering from the
              <Link href="https://unal.edu.co/" className={styles.linksunal}>
                {" "}
                National University of Colombia
              </Link>{" "}
              and a postgraduate specialization in Data Science and Artificial
              Intelligence from the
              <Link
                href="https://udemedellin.edu.co/"
                className={styles.linksudem}
              >
                {" "}
                University of Medellín
              </Link>
              .
              <br />
              <br />
              My academic background provided strong foundations in software
              engineering, signal processing, machine learning, and
              computational systems. I&apos;m continuously exploring new
              technologies, research papers, and AI tools to improve both my
              technical and problem-solving skills.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
