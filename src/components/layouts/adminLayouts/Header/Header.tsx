import { PATHS } from '../../../../constants/routes';
import BaseLink from '../../../UI/BaseLink/BaseLink';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <BaseLink to={PATHS.showcase} button size={'s'}>
        Главная
      </BaseLink>
    </header>
  );
};

export default Header;
