function nextVersion(currentVersion) {
    // Assuming input is a well-formed version number, delimited by periods
    const currentVersionArray = currentVersion.split('.');

    console.log('currentVersionArray ', currentVersionArray);

    const nextVersionArray = currentVersionArray.map((num) => parseInt(num));

    console.log('nextVersionArray ', nextVersionArray);

    // reverse so it's nicer to loop through
    nextVersionArray.reverse();

    // the last element is always incremented
    // if it's between 0 and 8, add 1
    // if it's 9, roll over to 0, and attempt to increment the next element

    // loop through elements, possibly use recursion?

    let i = 0;

    while (i < nextVersionArray.length) {
        // standard case
        if (nextVersionArray[i] < 9 || i === nextVersionArray.length - 1) {
            nextVersionArray[i] = nextVersionArray[i] + 1;
            break; // finished incrementing, break out of loop
        }

        // special case: digit is 9 and needs to be rolled over to 0
        if (nextVersionArray[i] === 9) {
            nextVersionArray[i] = 0;
            // continue because we need to increment the next digit as well
        }

        i++;
    }

    console.log(nextVersionArray);

    const finalVersion = nextVersionArray.reverse().join('.');

    console.log(finalVersion);

    return finalVersion;
}

module.exports = nextVersion;
