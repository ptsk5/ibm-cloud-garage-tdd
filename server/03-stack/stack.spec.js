describe('the stack canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });
});

describe('a stack', () => {
  beforeEach(() => {
    stack = stackFactory();
  });
  it('starts empty',() => {
    expect(stack.isEmpty()).toBe(true);
  });
  it('starts with stack size of 0', () => {
    expect(stack.size()).toBe(0);
  });
  it('is not empty when pushed', () => {
    stack.push();
    expect(stack.isEmpty()).toBe(false);
  });
  it('stack size is 1 when pushed', () => {
    stack.push();
    expect(stack.size()).toBe(1);
  });
  it('stack is empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  
  it('stack size is 0 when pushed and popped', () => {
    stack.push();
    stack.pop();
    expect(stack.size()).toBe(0);
  });
  it('throws overflow error when pushing to a stack at full capacity', () => {
    stack.push();
    stack.push();
    expect(() => {
      stack.push();
    }).toThrowError('capacity overflow error');
  });
  it('throw underflow error when popping an empty stack', () => {
    expect(() => {
      stack.pop();
    }).toThrowError('capacity underflow error');
  });
  it('pops the same one item when pushed', () => {
    stack.push('x');
    expect(stack.pop()).toBe('x');
  });
  it('pops two items with the most recent first', () => {
    stack.push('x');
    stack.push('y');
    expect(stack.pop()).toBe('y');
    expect(stack.pop()).toBe('x');
  });
  it.todo('accepts only a positive capacity');
});

const stackFactory = () => {
  let elements = [];
  return {
    isEmpty: () => elements.length === 0,
    size: () => elements.length,
    push: (element) => {
      if (elements.length === 2) throw new Error('capacity overflow error');
      elements.push(element);
    },
    pop: () => {
      if (elements.length === 0) throw new Error('capacity underflow error');
      return elements.pop();
    }
  }
};

let stack;