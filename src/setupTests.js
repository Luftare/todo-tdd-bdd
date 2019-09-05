import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

import './test-utils/custom-jest-matchers/toMatchHtmlSnapshot';

configure({ adapter: new Adapter() });
