import Navbar from "../component/Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';

it("Renders navbar component", () => {
  const tree = renderer 
  .create(
    <Router>
      <Navbar />
    </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
})
