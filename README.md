# README

**NOTE:** First run-through should just be to complete it.  Write any questions you have and then come
back to it again.

## Setup
```sh
npm run start
```

## Lecture 4: Core Testing - Describe, It, Expect

-Use 'describe' to group together similar tests.  The string doesnt' matter; it's just what 
is being put into the report
-Use 'it' to test a single attribute of a target.  Again, the string is only used for the report
it('shows the correct text')
-Use 'expect' to make an assertion about a target.  Our App component is our 'target' in this case
expect

## Lecture 5:
- when Mocha first runs, it is not immediately executed; it takes a record of all the functions
that we've written
- we wrap all of our specs so that Mocha can safely run all the tests without one error stopping
everything
- Anatomy of expect statement:
```
expect(component).to.have.class('comment-box');
```
  - component => Target - thing we are making an assertion about
  - to.have.class => Assertion Matcher - how to compare the two given values
  - 'comment-box' => Expected Value - the value we expect the target 'to have'
- To run test suite:

```sh
npm run test:watch  
```

## Lecture 6: Test Reporting
- Both the 'describe' and 'it' function expect a string to describe the test and a function to run

## Lecture 7: Feature Mockups
- comment's text area, button to submit, and then a list of comments
- Two components: CommentBox and a CommentList
- CommentBox => text box, button, entering text into the textarea updates the text
- CommentList => it shows a comment in an LI; givena  list of comments, it shows all the comments

## Lecture 8: Test Structure Setup
- I created the `comment_box.js` file but didn't add anything.  Immediately after creating the file, 
I created the `comment_box_test.js` file where I imported my helpers and the not-yet-created
CommentBox component.

```js
import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';
```

## Lecture 9: Comment Box Tests
- we need to find the appropriate matchers: github repo [https://github.com/chaijs/chai-jquery](https://github.com/chaijs/chai-jquery)
- 

## Lecture 10: Testing Class Names
- We wrote the CommentBox component

## Lecture 11: Using beforeEach to Condense Tests
- We wrote a beforeEach so that 'component' is defined before each 'it' is run.  One snag was defining the component;
we had to define the component outside of the beforeEach (scope) and then re-assign it.
```js
describe('CommentBox', () => {
	let component; // component defined outside of the beforeEach
	beforeEach(() => {
		component = renderComponent(CommentBox); // component is assigned to the renderComponent
	})

	it('has the correct class', () => {
		expect(component).to.have.class('comment-box');
	});

	it('has a text area', () => {
		expect(component.find('textarea')).to.exist;
	});

	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});
});
```

## Lecture 12: Expecting Child Elements


## Lecture 13: Simulating Events
- the beforeEach's stack up.  So the first beforeEach is run and then the second one in the nested describe (when
running the it's)

## Lecture 14: Testing Controlled Components

## Lecture 15: Form Submit Event
- We simulated a submission: `component.simulate('submit');`


## Lecture 16: Stub Comment List
- if ever the tests just aren't passing for some reason, quit the testing process (Ctrl + C) and then restart it
`npm run test:watch`
  - I was playing around for like 45 minutes on something that didn't actually have anything wrong.


## Lecture 17: Expectations on Content

## Lecture 18: Assertions with Lists
- finished L18
- Key snag: `function mapStateToProps()` takes an argument, `state`!  I couldn't figure out why
Grider's passed and my tests didn't...

## Lecture 19: Testing Action Creators
- Need to create action creator and reducer for comments
- We built the shell of the action creator, `saveComment()`, in `/action/index.js` and we created
a types.js file for all of our action types.
- The bulk of our code setup for the action creator was in `./test/actions/actions_test.js`.  This
is what we did:
```js
import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
	describe('saveComment', () => {
		it('has the correct type', ()=> {
			const action = saveComment();
			expect(action.type).to.equal(SAVE_COMMENT)
		});
		it('it has the correct payload', () => {
			const action = saveComment('new comment');
			expect(action.payload).to.equal('new comment');
		});
	});
});
```
- we didn't import renderComponent because we are testing an action, we aren't rendering any 
components
- we are bringing in our action type `SAVE_COMMENT` and our `saveComment` action creator
- We created a describe for all actions and then within that, our structure will have a separate
describe for each action creator
- Where I struggled doing this on my own is making the leap from what we need to test to what it
will ultimately be.  So if we are checking the two main parts of the action, the type and the 
payload, we would need to have to look ahead somewhat to know what we want to test (at least
for the payload).
- Right now, we are setting a const `action` equal to the results of our new action creator, 
saveComment().  I think I was thrown off by the fact that it was just a shell of an action creator, 
we didn't actually do anything.  But it's a safe assumption that our action creator will 
return an action, a JS object with a type and payload properties, and the type MUST be equal
to SAVE_COMMENT because that's what we want.
- The second it statement, having the correct payload, has us make the assumption that our action
creator will take a string and that will be the payload.

## Lecture 20: Action Creator Shortcuts
- In trying to set-up the action creator by myself, I struggled a bit but here are the major steps
to make CommentBox a container:
  1. import { connect } from React Redux
  1. instead of bringing in bindActionCreators, we did this: `import * as actions from '../actions';`
  which allows us to import all of our actions
  1. when we export everything, we simply put `actions` as our mapDispatchToProps argument as
  such: `export default connect(null, actions)(CommentBox)`






