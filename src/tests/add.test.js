const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should greet', () => {
    const greeting = generateGreeting('Vi');
    expect(greeting).toBe('Hello Vi!');
});

test('should test anonymous greeting', () => {
    const greeting = generateGreeting();
    expect(greeting).toBe('Hello Anonymous!');
});