import Head from 'next/head';

interface CustomHeadProps {
  title: string;
}

const CustomHead = ({ title }: CustomHeadProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Andres Camilo Salazar is a full-stack web developer and data analyst, ready to face new challenges."
      />
      <meta
        name="keywords"
        content="Andres Camilo Salazar, acsalazar, web developer, portfolio, full-stack developer, data analyst, MERN stack, Python, React, Django, data visualization, AI"
      />
      <meta property="og:title" content="Andres Camilo's Portfolio" />
      <meta
        property="og:description"
        content="Full-stack developer and data analyst — building powerful tools and data visualizations that bring insights to life."
      />
      <meta property="og:image" content="https://i.imgur.com/fss14YL.png" />
      <meta property="og:url" content="https://acsalazar.com" />
      <meta name="twitter:card" content="image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Andres Camilo Salazar',
};

