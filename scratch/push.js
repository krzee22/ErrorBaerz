const { execSync } = require('child_process');

try {
    console.log('Running git status...');
    const status = execSync('git status', { encoding: 'utf8' });
    console.log(status);

    console.log('Adding files...');
    execSync('git add src/components/Scene/Scene.tsx');

    console.log('Commiting changes...');
    execSync('git commit -m "fix: update EffectComposer props to fix build error"');

    console.log('Pushing to origin...');
    const push = execSync('git push origin master', { encoding: 'utf8' });
    console.log(push);
} catch (error) {
    console.error('Error executing git commands:');
    console.error(error.stdout || error.message);
}
