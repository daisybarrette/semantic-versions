const nextVersion = require('./nextVersion');

function main() {
    const args = process.argv;
    console.log(args);

    // ASSUMPTION: Exactly one valid string argument is being passed via the command line
    const currentVersion = args[2];

    const result = nextVersion(currentVersion);

    console.log('The current version is: ', currentVersion);
    console.log('The next version is: ', result);
}

main();
