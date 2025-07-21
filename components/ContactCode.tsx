import styles from '@/styles/ContactCode.module.css';
import {
  FaSquareGithub,
  FaSquareWhatsapp,
  FaSquareInstagram,
  FaSquareEnvelope,
} from 'react-icons/fa6';

// 🔠 Creamos un tipo con los nombres permitidos de redes
type Social = 'email' | 'github' | 'instagram' | 'whatsapp';

// 🔗 Mapeamos cada red con su ícono visual, usando React.ReactNode como tipo
const iconMap: Record<Social, React.ReactNode> = {
  email: <FaSquareEnvelope size={20} />,
  github: <FaSquareGithub size={20} />,
  instagram: <FaSquareInstagram size={20} />,
  whatsapp: <FaSquareWhatsapp size={20} />,
};

// 📫 Lista de elementos de contacto
const contactItems: { social: Social; link: string; href: string }[] = [
  {
    social: 'email',
    link: 'acsalazar-19@hotmail.com',
    href: 'mailto:acsalazar-19@hotmail.com',
  },
  {
    social: 'github',
    link: 'AcSsalazar',
    href: 'https://github.com/AcSsalazar',
  },
  {
    social: 'instagram',
    link: 'ssalazar.andress',
    href: 'https://www.instagram.com/ssalazar.andress',
  },
  {
    social: 'whatsapp',
    link: '+57 301 420 1146',
    href: 'https://wa.me/573014201146',
  },
];

// 📦 Componente que renderiza los contactos como código estilo VSCode
const ContactCode = () => {
  return (
    <div className={styles.code}>
      {/* Línea de apertura tipo código */}
      <p className={styles.line}>
        <span className={styles.keyword}>const</span>
        <span className={styles.className}> socials =</span> &#123;
      </p>

      {/* Recorremos la lista de contactos */}
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.icon}>{iconMap[item.social]}</span>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            {item.link}
          </a>
          ,
        </p>
      ))}

      {/* Línea de cierre */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
