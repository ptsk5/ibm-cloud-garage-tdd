describe('the palindrome canary spec', () => {
  it('shows the infrastructure works', () => {
    expect(true).toBe(true);
  });

  it('true for mom', () => {
    expect(isPalindrome('mom')).toBe(true);
  });
  it('false for dude', () => {
    expect(isPalindrome('dude')).toBe(false);
  });
  it('false for dad mom', () => {
    expect(isPalindrome('dad mom')).toBe(false);
  });
  it('false for whitespace',() => {
    expect(isPalindrome('    ')).toBe(false); 
  });
  it.todo ('error for empty string');
  it.todo ('error for not a string');
});

let isPalindrome = phrase => {
  if (phrase.trim() === '') return false;
  return phrase === phrase.split('').reverse().join('');
}; 