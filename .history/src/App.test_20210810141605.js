import App from './App';
import Enzyme from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
