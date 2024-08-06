import styles from "../page.module.scss";
import Accordion from '@/components/accordion/accordion';
import ReportBox from '@/components/report/reportBox';

import { WCAG } from '@/data/criterias';
import Select from '@/components/common/select/select';

export default function Home() {
  const levelOptions = ['A', 'AA', 'AAA'];

  return (
    <main className={styles.main}>
      {WCAG.map(guideline => (
        <Accordion key={guideline.name} title={guideline.name} headingLevel="h2">
          {guideline.guideLines.map(criteria => (
            <Accordion key={criteria.name} title={criteria.name} headingLevel="h3">
              {criteria.criterias.map(res => (
                <ReportBox
                  key={res.name}
                  title={res.name}
                  level={res.level}
                  reference={res.reference}
                />
              ))}
            </Accordion>
          ))}
        </Accordion>
      ))}
    </main>
  );
}
