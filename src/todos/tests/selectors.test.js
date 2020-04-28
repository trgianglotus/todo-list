import { expect } from 'chai';
import { todos } from '../reducers';
import { getCompletedTodos } from '../selectors';

describe('The getCompletedTodos selector', () => {
    it('Returns only completed todos', () => {
        const fakeTodo = [{ text: 'Hello', isCompleted: true }, { text: 'Bye', isCompleted: false }, { text: 'Sleep', isCompleted: false }];
        const expected = [{ text: 'Hello', isCompleted: true }];
        const actual = getCompletedTodos.resultFunc(fakeTodo);
        expect(actual).to.deep.equal(expected);
    });

});