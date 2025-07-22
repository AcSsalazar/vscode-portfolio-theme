export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Market Place with Wompi',
    description:'Fully functional marketplace web application integrated with Bancolombia’s Wompi payment gateway.',
    logo: '/logos/mp-icon2.svg',
    link: 'https://github.com/AcSsalazar/Market_Place_with_Wompi_API',
    slug: 'market-wompi',
  },
  {
    title: 'VSCode Portfolio Fork',
    description:
      'A Visual Studio Code–themed developer portfolio built with Next.js and CSS Modules, including skills visualizations.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/AcSsalazar/vscode-portfolio-theme',
    slug: 'vscode-portfolio',
  },
  {
    title: 'XGB and RF Diabetes Classificator',
    description:
      'A complete predictor for diabetes diagnosis using pre-trained XGBoost and Random Forest models. Includes a user interface and input preprocessing.',
    logo: '/logos/ML-icon.svg',
    link: 'https://github.com/AcSsalazar/XGB_Diabetes_Classificator',
    slug: 'ml-predictor',
  },
  {
    title: 'RAG system with Pinecone and LangChain',
    description:
      'Retrieval-Augmented Generation (RAG) system using Pinecone vector database and LangChain for document-based question answering.',
    logo: '/logos/ai-platform.svg',
    link: 'https://github.com/AcSsalazar/RAG_with_LangChain_and_Pinecone',
    slug: 'smart-pdf-based-responses',
  },
];
