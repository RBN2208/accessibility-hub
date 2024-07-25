'use client'

import { useRef } from 'react';

import styles from './reportbox.module.scss';
import common from '../../app/common-styles.module.scss';

export default function ReportBox({title, level, reference}: {title: string, level: string, reference: string}) {
  const fileInputRef = useRef<null | HTMLInputElement>(null);

  const triggerUpload = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div className={styles.reportBox}>
      <div className={styles.levelHint}>{level}</div>
      <div className={styles.reportHeading}>
        <h4>{title}</h4>
        <a className={common.highlightAnchor} href={reference}>Get more additional Informations about this criteria</a>
      </div>
      <div className={styles.reportState}>
        <label htmlFor={'state'}>Status des Kriteriums</label>
        <select name="state" id="state">
          <option value="checked">checked</option>
          <option value="passed">passed</option>
        </select>
      </div>
      <div className={styles.reportUpload}>
        <label htmlFor="upload">Bilder zur Kennzeichnung</label>
        <button onClick={triggerUpload}>Bilder hochladen</button>
        <input type="file" ref={fileInputRef} id="upload" multiple={true}/>
      </div>
      <div className={styles.reportDescription}>
        <label htmlFor="description">Weiterführende Informationen</label>
        <textarea name="description" id={'description'} cols="30" rows="10" />
      </div>
    </div>
  )
}
