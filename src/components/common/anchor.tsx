import Link from 'next/link';
import common from '@/app/common-styles.module.scss';

export default function Anchor({label = "", url = "", cssClass = ""}: {label: string, url: string, cssClass?: string}) {
  const additionalClasses = common.defaultAnchor + ' ' + cssClass;
  return <Link className={additionalClasses} href={url} title={label}>{label}</Link>
}
