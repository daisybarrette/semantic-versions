const nextVersion = require('./nextVersion');

test('correctly increments 1.2.3', () => {
    expect(nextVersion('1.2.3')).toBe('1.2.4');
});

test('correctly increments 0.9.9', () => {
    expect(nextVersion('0.9.9')).toBe('1.0.0');
});

test('correctly increments 1', () => {
    expect(nextVersion('1')).toBe('2');
});

test('correctly increments 1.2.3.4.5.6.7.8', () => {
    expect(nextVersion('1.2.3.4.5.6.7.8')).toBe('1.2.3.4.5.6.7.9');
});

test('correctly increments 9.9', () => {
    expect(nextVersion('9.9')).toBe('10.0');
});

test('correctly increments 9.4.2', () => {
    expect(nextVersion('9.4.2')).toBe('9.4.3');
});

test('correctly increments 0.9.0', () => {
    expect(nextVersion('0.9.0')).toBe('0.9.1');
});

test('correctly increments 10.9.9', () => {
    expect(nextVersion('10.9.9')).toBe('11.0.0');
});

test('correctly increments 0', () => {
    expect(nextVersion('0')).toBe('1');
});

test('correctly increments 0.0', () => {
    expect(nextVersion('0.0')).toBe('0.1');
});

// ASSUMPTION: If there is only one number, it should be considered the first, and can therefore be greater than 9
test('correctly increments 9', () => {
    expect(nextVersion('9')).toBe('10');
});
