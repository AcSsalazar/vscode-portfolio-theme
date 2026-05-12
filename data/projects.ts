export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [

    {
    title: "Speech Emotion Recognition with CBiGRU",
    description:
      "Full academic guidance for building your own speech recognition model from scratch using RAVDESS and CREMA databases. The project includes data preprocessing, model training, and evaluation.",
    logo: "/logos/ai-platform.svg",
    link: "https://github.com/AcSsalazar/RAG_with_LangChain_and_Pinecone",
    slug: "speech-emotion-recognition",
  },
  
  {
    title: "Full-Stack base E-commerce with Wompi API",
    description:
      "Fully functional E-comerce web application integrated with Bancolombia’s Wompi payment gateway.",
    logo: "/logos/mp-icon1.svg",
    link: "https://github.com/AcSsalazar/Market_Place_with_Wompi_API",
    slug: "ecommerce-wompi",
  },

  {
    title: "XGB Diabetes Classificator",
    description:
      "A complete predictor for diabetes diagnosis using pre-trained XGBoost and Random Forest models. Includes a user interface and input preprocessing.",
    logo: "/logos/ML-icon.svg",
    link: "https://github.com/AcSsalazar/XGB_Diabetes_Classificator",
    slug: "diabetes-classificator-xbgboost",
  },

  {
    title: "GeoSPTLab: Geotechnical Engineering Platform",
    description:
      "A professional web application for calculating geotechnical soil resistance parameters (φ′, c′, E, Su, τ) from Standard Penetration Test (SPT) results.",
    logo: "/logos/soil.svg",
    link: "https://github.com/AcSsalazar/GeoSPTLab",
    slug: "geosptlab",
  },
  {
    title: "VSCode-theme Portfolio",
    description:
      "A Visual Studio Code–themed developer portfolio built with Next.js and CSS Modules, including skills visualizations.",
    logo: "/logos/vsc.svg",
    link: "https://github.com/AcSsalazar/vscode-portfolio-theme",
    slug: "vscode-portfolio",
  },
];
