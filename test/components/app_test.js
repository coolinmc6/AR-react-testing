import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use 'describe' to group together similar tests.  The string doesnt' matter; it's just what
// is being put into the report
describe('App', () => {

	// Use 'it' to test a single attribute of a target.  Again, the string is only used for the report
	it('shows the correct text', () => {

		// create an instance of App => renderComponent is from our helper
		const component = renderComponent(App);

		// Use 'expect' to make an assertion about a target.  Our App component is our 'target' in this case
		expect(component).to.contain('React simple starter');

	});

});

