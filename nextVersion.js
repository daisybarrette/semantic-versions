function nextVersion(currentVersion) {
    // Assuming input is a well-formed version number, delimited by periods
    const currentVersionArray = currentVersion.split('.');

    console.log('currentVersionArray ', currentVersionArray);

    const nextVersionArray = currentVersionArray.map((num) => parseInt(num));

    console.log(nextVersionArray);

    console.log('nextVersionArray ', nextVersionArray);

    // the last element is always incremented
    // if it's between 0 and 8, add 1
    // if it's 9, roll over to 0, and attempt to increment the next element

    // loop through elements, possibly use recursion?

    return currentVersion;
}

module.exports = nextVersion;
