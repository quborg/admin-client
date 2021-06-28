import KEYS from 'src/defs/keys';

// import Question from './Question';
// import Section from './Section';
import User from './User';

const ItemViewItem: React.FC<TYPES.ItemViewGroupProps> = ({ ItemName, data }) => {
  // if (ItemName === KEYS.Question) return <Question data={data} />;
  // if (ItemName === KEYS.Section) return <Section data={data} />;
  if (ItemName === KEYS.User) return <User data={data} />;
  return <></>;
};

export default ItemViewItem;
