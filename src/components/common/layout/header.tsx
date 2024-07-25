import Link from 'next/link';
import Anchor from '@/components/common/anchor';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          Accessibility Hub
        </Link>
      </div>
      <nav aria-label={'Navigation'}>
        <ul className={styles.headerList}>
          <li>
            <Anchor url="/report" label="Report" />
          </li>
          <li>
            <Anchor url="/lighthouse" label="Lighthouse" />
          </li>
        </ul>
      </nav>
    </header>
  )
}
