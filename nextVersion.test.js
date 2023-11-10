const nextVersion = require('./nextVersion');

test.skip('correctly increments 1.2.3', () => {
    expect(nextVersion('1.2.3')).toBe('1.2.4');
});
