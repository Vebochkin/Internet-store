import BrandsIcon from '../../../../UI/icons/BrandsIcon/BrandsIcon';
import CheckIcon from '../../../../UI/icons/CheckIcon/CheckIcon';
import DeliveryIcon from '../../../../UI/icons/DeliveryIcon/DeliveryIcon';
import PriceIcon from '../../../../UI/icons/PriceIcon/PriceIcon';
import classes from './InfoBlock.module.css';

const data = [
  {
    id: 1,
    name: 'Скорость',
    Icon: DeliveryIcon,
  },
  {
    id: 2,
    name: 'Выгода',
    Icon: PriceIcon,
  },
  {
    id: 3,
    name: 'Гарантия',
    Icon: CheckIcon,
  },
  {
    id: 4,
    name: 'Original',
    Icon: BrandsIcon,
  },
];

const InfoBlock: React.FC = () => {
  return (
    <div className={classes['info-block']}>
      {data.map(({ id, name, Icon }) => (
        <div className={classes['info-block-item']} key={id}>
          <Icon width={28} height={28} />
          {name}
        </div>
      ))}
    </div>
  );
};

export default InfoBlock;
