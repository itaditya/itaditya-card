'use strict';

const chalk = require('chalk');
const boxen = require('boxen');

const { name: pkgName } = require('./package');

const data = {
  name: 'Aditya Agarwal',
  work: 'Intern @hackerrank, GSoC @github, Blogger👨‍💻',
  opensource: 'Circlebars, JS Image Editor, Code Runner',
  twitter: 'dev__adi',
  github: 'itaditya',
  blog: 'adityaa803',
  linkedin: 'itsaditya',
  web: 'https://adi.surge.sh',
};

const enhancedData = {
  name: chalk.white(`               ${data.name}`),
  handle: chalk.white(data.twitter),
  work: chalk.white(data.work),
  opensource: chalk.white(data.opensource),
  twitter: chalk.gray('https://twitter.com/') + chalk.cyan(data.twitter),
  github: chalk.gray('https://github.com/') + chalk.green(data.github),
  blog: chalk.gray('https://medium.com/') + chalk.bgBlack('@' + data.blog),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue(data.linkedin),
  web: chalk.cyan(data.web),
  npx: chalk.red('npx') + ' ' + chalk.white(pkgName),
};

const result = `
${enhancedData.name} / ${enhancedData.handle}


${chalk.white.bold('       Work:')}  ${enhancedData.work}
${chalk.white.bold('Open Source:')}  ${enhancedData.opensource}

${chalk.white.bold('    Twitter:')}  ${enhancedData.twitter}
${chalk.white.bold('     GitHub:')}  ${enhancedData.github}
${chalk.white.bold('       Blog:')}  ${enhancedData.blog}
${chalk.white.bold('   LinkedIn:')}  ${enhancedData.linkedin}
${chalk.white.bold('        Web:')}  ${enhancedData.web}

${chalk.white.bold('       Card:')}  ${enhancedData.npx}
`;

const card = boxen(result, {
  padding: 1,
  margin: {
    top: 3,
    bottom: 3,
  },
  borderStyle: 'round',
  borderColor: 'green',
  float: 'center',
});

console.clear();
console.log(card);
