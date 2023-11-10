const nextVersion = require('./nextVersion');

function main() {
    // ASSUMPTION: Exactly one valid string argument is being passed via the command line
    const args = process.argv;
    const currentVersion = args[2];

    const result = nextVersion(currentVersion);

    console.log('The current version is: ', currentVersion);
    console.log('The next version is: ', result);
}

main();
