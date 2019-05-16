import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Jest automatically looks for this file in src/setupTests.js, then it executes it before running any tests


// static render - no interactivity, no clicks, only html - make assertions about the html generated

// shallow render - renders only that component, and none of it's children, only placeholders

// full dom render - renders that component and all it's children
