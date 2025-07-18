import styles from '@/styles/ContactCode.module.css';
import { FaSquareGithub, FaSquareWhatsapp, FaSquareInstagram, FaSquareEnvelope } from 'react-icons/fa6';

const iconMap = {
  email: <FaSquareEnvelope/>,
  github: <FaSquareGithub/>,
  instagram: <FaSquareInstagram/>, 
  whatsapp: <FaSquareWhatsapp/>,
};

const contactItems = [

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

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.keyword}>const</span>
        <span className={styles.className}> socials =</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          <span className={styles.icon}>{iconMap[item.social]}</span>
          &nbsp;&nbsp;&nbsp;{item.social}:{''}
          <a href={item.href} target="_blank" rel="noopener" className={styles.link}>
           {item.link}
          </a>
          ,
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
