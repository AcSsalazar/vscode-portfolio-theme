import Image from 'next/image';

import styles from '@/styles/Titlebar.module.css';

const Titlebar = () => {
  return (
    <section className={styles.titlebar}>
      <Image 
        src="/logos/vscode_icon.svg"
        alt="VSCode Icon"
        height={15}
        width={15}
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>
      <p className={styles.title}>Andres Salazar Porfolio - Visual Studio Code</p>
      <div className={styles.windowButtons}>
       
        <span className={styles.minimize}>

          <Image
            src="/minimize.png"
            alt="Minimize Icon"
            height={15}
            width={15}
            
          />

        </span>
        <span className={styles.maximize}>

          <Image
            src="/maximize2.png"
            alt="Maximize Icon"
            height={15}
            width={16}
          />
        </span>
        <span className={styles.close}>

          <Image 
            src="/close.png"
            alt="Close Icon"
            height={15}
            width={15}
          />
        </span>
      </div>
    </section>
  );
};

export default Titlebar;
