import React from 'react';
import cn from 'classnames';

import styles from './Header.module.scss';

export default function Header(props) {
  return (
    <div className={cn(styles.content_box, 'header')}>
      <div className={styles.content_box1}>
        /*This group structure is not ready for flow layout, please resolve the ❗alone items in pxCode editor.*/
        <img className={styles.image11} src={require('assets/0b785671b2c5e5c0182a2c2d3282e56c.png')} alt="alt text" />
        <img className={styles.image12} src={require('assets/006ae2c1b8feea33a0d81b1e9ce9ed57.png')} alt="alt text" />
        <img className={styles.icon1} src={require('assets/18f13af5dfb3044b25a495505c1b573a.png')} alt="alt text" />
        <px-grid x="1413px 10fr 17fr" y="67.5px minmax(0px, 20fr) 49.5fr" absolute>
          <h5 className={styles.highlights1}>1</h5>
        </px-grid>
        <div className={styles.rect4} />
        <img className={styles.image13} src={require('assets/1568cbe9c7bb320dd391c60ac84c2a1c.png')} alt="alt text" />
        <px-grid x="1132px 146fr 162fr" y="73px minmax(0px, 26fr) 38fr" absolute>
          <h2 className={styles.medium_title2_box}>
            <div className={styles.medium_title2}>
              <span className={styles.medium_title2_span0}>Search</span>
              <span className={styles.medium_title2_span1}>  </span>
            </div>
          </h2>
        </px-grid>
        <px-grid x="407px 85fr 948fr" y="74px minmax(36px,36fr) 27fr" absolute>
          <h2 className={styles.medium_title3}>Home</h2>
        </px-grid>
        <img className={styles.image14} src={require('assets/46742e8cfcd8867ec250f7253f497afa.png')} alt="alt text" />
        <img className={styles.image15} src={require('assets/e6026a075d5d915c5aaad38ecc841ec7.png')} alt="alt text" />
        <px-grid x="661px 103fr 676fr" y="74px minmax(36px,36fr) 27fr" absolute>
          <h2 className={styles.medium_title3}>Products</h2>
        </px-grid>
        <img className={styles.icon2} src={require('assets/cb5ed5e83c009f94a313c68788cc45b1.png')} alt="alt text" />
        <px-grid x="1129px 136fr 175fr" y="13px minmax(22px,22fr) 102fr" absolute>
          <h5 className={styles.highlights2}>91 080 64646</h5>
        </px-grid>
        <px-grid x="435px 335fr 670fr" y="12px minmax(22px,22fr) 103fr" absolute>
          <h5 className={styles.highlights3}>91 91 080 64646 / 98453 16542</h5>
        </px-grid>
        <px-grid x="837px 204fr 399fr" y="12px minmax(25px,25fr) 100fr" absolute>
          <h5 className={styles.highlights31}>vkraft@yahoo.com</h5>
        </px-grid>
        <img className={styles.image16} src={require('assets/aec3380a7d5bbd72e5773f6cc48d31e6.png')} alt="alt text" />
        <px-grid x="521px 103fr 816fr" y="75px minmax(35px,35fr) 27fr" absolute>
          <h2 className={styles.medium_title3}>About Us</h2>
        </px-grid>
        <px-grid x="822px 132fr 486fr" y="74px minmax(36px,36fr) 27fr" absolute>
          <h2 className={styles.medium_title3}>Contact Us</h2>
        </px-grid>
        <px-grid x="983px 105fr 352fr" y="74px minmax(36px,36fr) 27fr" absolute>
          <h2 className={styles.medium_title3}>Gallery</h2>
        </px-grid>
        <img className={styles.image17} src={require('assets/2a8ac7a721e04f6263692f0cb98ce02a.png')} alt="alt text" />
      </div>
    </div>
  );
}

Header.inStorybook = true;
