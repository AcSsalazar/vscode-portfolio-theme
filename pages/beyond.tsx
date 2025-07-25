import BeyondGallery from '@/components/BeyondGallery';

import styles from '@/styles/BeyondPage.module.css';

const BeyondPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}> &#60; Beyond Code &#47;&#62; </h1>
      <p className={styles.pageSubtitle}>
         I decided to share some of my passions and hobbies here, as they are a fundamental part of my 
         life and help keep me motivated beyond the professional sphere. These aspects truly play 
         a meaningful role in who I am.
      </p>
      <div className={styles.container}>
        
          <BeyondGallery/>
        
      </div>
      <section>
        <p className={styles.pageSubtitleEnd}>
          Thanks for stopping by! That was a little glimpse into the things I love.  
          Most of the time, you&apos;ll find me reading, enjoying coffee or beer, or practicing guitar or drums. 
         <span className={styles.seeYou}>   See you around </span><span className={styles.cursor}>|</span>
        </p>
    
        
          
    
      </section>
      </div>
      
  );
};


export default BeyondPage;

 

