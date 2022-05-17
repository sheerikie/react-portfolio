import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiMysql,
  DiSymfonyBadge,
  DiReact,
  DiLaravel,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAngularSimple,
  DiSass,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  SiSocketDotIo,
  SiAmazonaws,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <DiLaravel />
      </li>
      <li className={s.techIcon}>
        <DiMysql/>
      </li>
      <li className={s.techIcon}>
        <DiSymfonyBadge/>
      </li>
      <li className={s.techIcon}>
        <DiAngularSimple/>
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      <li className={s.techIcon}>
        <SiSocketDotIo />
      </li>
      <li className={s.techIcon}>
        <DiGit />
      </li>
    </ul>
  );
};

export default TechSkills;
