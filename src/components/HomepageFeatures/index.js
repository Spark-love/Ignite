import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Onboarding',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The Spark Ignite Handbook includes a detailed onboarding guide that helps new team members get up to speed quickly, covering everything from company culture and values to essential processes and tools.
      </>
    ),
  },
  {
    title: 'Centralized Communication',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The handbook provides clear protocols for using our primary communication tools, Slack and Confluence, ensuring that all team members stay connected and informed through effective communication practices.
      </>
    ),
  },
  {
    title: 'Core Values and Work Ethic',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Emphasizing the importance of work ethic and core values, the Spark Ignite Handbook details expectations for reliability, accountability, and respect, fostering a culture of trust and collaboration.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
