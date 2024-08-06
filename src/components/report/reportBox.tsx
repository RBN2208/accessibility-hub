'use client'

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './reportbox.module.scss';
import common from '../../app/common-styles.module.scss';

export default function ReportBox({title, level, reference}: {title: string, level: string, reference: string}) {
  const fileInputRef = useRef<null | HTMLInputElement>(null);
  const [randomId, setRandomId] = useState('');

  const triggerUpload = () => {
    if (fileInputRef && fileInputRef.current) {
      fileInputRef.current.click();
    }
  };



  useEffect(() => {
    setRandomId(uuidv4());
  }, [])

  return (
    <div className={styles.reportBox}>
      <div className={styles.levelHint}>{level}</div>
      <div className={styles.reportHeading}>
        <h4>{title}</h4>
        <a className={common.highlightAnchor} href={reference}>Weiterführende Informationen zu diesem Kriterium</a>
      </div>
      <div className={styles.reportState}>
        <label htmlFor={'state' + randomId}>Status des Kriteriums</label>
        <select name="state" id={'state' + randomId}>
          <option value="checked">checked</option>
          <option value="passed">passed</option>
        </select>
      </div>
      <div className={styles.reportUpload}>
        <label htmlFor={'upload' + randomId}>Bilder zur Kennzeichnung</label>
        <button onClick={triggerUpload}>Bilder hochladen</button>
        <input type="file" ref={fileInputRef} id={'upload' + randomId} multiple={true}/>
      </div>
      <div className={styles.reportDescription}>
        <label htmlFor={'description' + randomId}>Weiterführende Informationen</label>
        <textarea name="description" id={'description' + randomId} cols="30" rows="10" />
      </div>
    </div>
  )
}
