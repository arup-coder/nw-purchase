/*
This script uses Jenkins JOB_NAME environment variables to trigger the correct NPM build script per
environment.

npm run build
- when JOB_NAME ends in uat, develop, qa

npm run build:prod
- runs by default
*/

(function () {
    const { exec } = require('child_process');

    process.env && console.log('JOB_NAME ' + process.env.JOB_NAME);

    if (process.env && (!process.env.JOB_NAME || process.env.JOB_NAME.match(/.*-(uat|develop|qa)$/))) {
        console.log('started "npm run build" ');
        exec('npm run build', {maxBuffer: 1024 * 2000}, (err, stdout, stderr) => {
            if (err) {
                console.error('failed to execute build script: ', err);
            } else {
                // the *entire* stdout and stderr (buffered)
                if (!!stdout) process.stdout.write(`stdout: ${stdout}`);
                if (!!stderr) process.stderr.write(`stderr: ${stderr}`);
            }
        });
    } else {
        console.log('started "npm run build:prod" ');
        exec('npm run build:prod', {maxBuffer: 1024 * 2000}, (err, stdout, stderr) => {
            if (err) {
                console.error('failed to execute build:prod script: ');
                console.error(err);
            } else {
                // the *entire* stdout and stderr (buffered)
                if (!!stdout) console.log(`stdout: ${stdout}`);
                if (!!stderr) console.log(`stderr: ${stderr}`);
            }
        });
    }
})();
