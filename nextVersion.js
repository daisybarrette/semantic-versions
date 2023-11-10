function nextVersion(currentVersion) {
    // Assuming input is a well-formed version number, delimited by periods
    const currentVersionArray = currentVersion.split('.');

    const nextVersionArray = currentVersionArray.map((num) => parseInt(num));

    /**
     * Increment the last element of the array:
     *      if it's between 0 and 8, add 1
     *      if it's 9, roll over to 0, and attempt to increment the next element
     */

    // Assuming a valid input, so at least one digit, so length will be at least 1, and i will be at least 0
    let i = nextVersionArray.length - 1;

    while (i >= 0) {
        // Standard case, incrementing the chosen digit by adding 1
        // OR: The digit that needs to be incremented is the first, which can be greater than 9
        if (nextVersionArray[i] < 9 || i === 0) {
            nextVersionArray[i] = nextVersionArray[i] + 1;
            break; // finished incrementing, break out of loop
        }

        // Special case: chosen digit is 9 and needs to be rolled over to 0
        if (nextVersionArray[i] === 9) {
            nextVersionArray[i] = 0;
            // continue because we need to increment the next digit as well
        }

        i--;
    }

    const finalVersion = nextVersionArray.join('.');

    return finalVersion;
}

module.exports = nextVersion;
