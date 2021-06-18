import { Login } from 'src/pages';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Login />).toJSON();
  expect(tree).toMatchSnapshot();
});
