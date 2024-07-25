'use client';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Heading from '@/components/heading/heading';
import styles from './accordion.module.scss';

export default function Accordion({title, children, headingLevel}) {
  const [isOpen, setIsOpen] = useState(false);
  const [controlsId, setControlsId] = useState('');
  const [titleId, setTitleId] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  const className = `${styles.expandableContent} ${isOpen ? styles.active : ''}`;
  useEffect(() => {
    setControlsId(uuidv4());
    setTitleId(uuidv4());
  }, [])

  return (
    <div className={styles.expandable}>
      <Heading level={headingLevel}>
        <button
          id={titleId}
          className={styles.expandableButton}
          onClick={toggle}
          type={'button'}
          aria-controls={controlsId}
          aria-expanded={isOpen}
        >
          {title} <span>{isOpen ? '-' : '+'}</span>
        </button>
      </Heading>
      <section
        id={controlsId}
        className={className}
        aria-labelledby={titleId}
      >
        {children}
      </section>
    </div>
  )
}
