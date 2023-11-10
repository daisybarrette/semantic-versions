/**
 * Given a version number, compute the next version.
 * @param {string} currentVersion The version number to be incremented
 * @return {string} The next version number
 */
function nextVersion(currentVersion) {
    // ASSUMPTION: currentVersion is a well-formed version number, a string comprised of one or more integers delimited by periods
    const currentVersionArray = currentVersion.split('.');

    const nextVersionArray = currentVersionArray.map((num) => parseInt(num));

    /**
     * To compute the next version number, do the following, starting with the last element in the array:
     *      1. If it's between 0 and 8, add 1
     *      2. If it's 9, set it to 0, and begin again at step 1 with the next element in the sequence (moving right-to-left)
     *
     * Special case: the first element should never be set to zero, and can instead be incremented by adding 1, if necessary.
     */

    // Based on the assumptions above, the array has at least one element, therefore i >= 0
    let i = nextVersionArray.length - 1;

    while (i >= 0) {
        if (nextVersionArray[i] < 9 || i === 0) {
            nextVersionArray[i] = nextVersionArray[i] + 1;
            break; // No need to 'roll over' and increment another digit, so exit the loop
        }

        if (nextVersionArray[i] === 9) {
            nextVersionArray[i] = 0;
        }

        i--;
    }

    return nextVersionArray.join('.');
}

module.exports = nextVersion;
