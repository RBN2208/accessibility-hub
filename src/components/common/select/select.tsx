import styles from './select.module.scss';

export default function Select({options}: {options: string[]}) {
  return (
    <select className={styles.select} name="" id="">
      {options.map(opt => (
        <option value={opt}>{opt}</option>
      ))}
    </select>
  )
}
