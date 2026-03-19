#!/usr/bin/env node

const chalk = require('chalk');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');

console.log(`
${chalk.cyan('╔═══════════════════════════════════════════════════════════╗')}
${chalk.cyan('║')}                                                           ${chalk.cyan('║')}
${chalk.cyan('║')}    ${chalk.bold.cyan('🎯 Profile Genius - GitHub README Generator')}     ${chalk.cyan('║')}
${chalk.cyan('║')}                                                           ${chalk.cyan('║')}
${chalk.cyan('╚═══════════════════════════════════════════════════════════╝')}
`);

const templates = {
  developer: {
    name: '👨‍💻 Developer',
    content: `## 👨‍💻 About Me

- 🔭 I’m currently working on \`awesome projects\`
- 🌱 I’m currently learning \`${'{technology}'}\`
- 👯 I’m looking to collaborate on \`open source\`
- 💬 Ask me about \`${'{your expertise}'}\`
- ⚡ Fun fact: \`${'{fun fact}'}\`

## 🛠️ Tech Stack

![Python](https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=Python)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=JavaScript)
![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=React)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=GitHub)

## 📈 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${'{username}'}&show_icons=true&theme=tokyonight" height="180"/>
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${'{username}'}&layout=compact&theme=tokyonight" height="180"/>
</p>

## 🏆 Achievements

[![trophy](https://github-profile-trophy.vercel.app/?username=${'{username}'}&theme=radical)](https://github.com/ryo-ma/github-profile-trophy)

## 📫 Connect

[![Email](https://img.shields.io/badge/-Email-D14836?style=flat-square&logo=Gmail&logoColor=white)](mailto:${'{email}'})
[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0077B5?style=flat-square&logo=LinkedIn&logoColor=white)](https://linkedin.com/in/${'{linkedin}'})
[![Twitter](https://img.shields.io/badge/-Twitter-1DA1F2?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/${'{twitter}'})
`
  },
  minimalist: {
    name: '✨ Minimalist',
    content: `# Hi, I'm ${'{your name}'} 👋

${'{one-line bio}'}

## 🔧 Tech

\`${'{tech1}'}\` \`${'{tech2}'}\` \`${'{tech3}'}\`

## 📊 Stats

![GitHub](https://github-readme-stats.vercel.app/api?username=${'{username}'}&show_icons=true)

## 📨 Contact

- ${'{contact link}'}
`
  },
  hacker: {
    name: '🧑‍💻 Hacker',
    content: `\`\`\`text
╔════════════════════════════════════════════════════════════╗
║  ██████╗ ██████╗ ██╗██████╗ ██╗  ██╗██╗   ██╗███████╗  ║
║  ██╔══██╗██╔══██╗██║██╔══██╗██║  ██║██║   ██║██╔════╝  ║
║  ██████╔╝██████╔╝██║██████╔╝███████║██║   ██║███████╗  ║
║  ██╔═══╝ ██╔══██╗██║██╔═══╝ ██╔══██║██║   ██║╚════██║  ║
║  ██║     ██║  ██║██║██║     ██║  ██║╚██████╔╝███████║  ║
║  ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚══════╝  ║
╚════════════════════════════════════════════════════════════╝
\`\`\`

> ${'{tagline}'}

## ${'{section1}'}
- 🔭 Working on: \`${'{project1}'}\`
- 🌱 Learning: \`${'{learning}'}\`
- ⚡ Fun fact: \`${'{fact}'}\`

## 🛠️ Tools

\`\`\`bash
# ${'{tools description}'}
$ echo "${'{tool-command}'}"
${'{tool-output}'}
\`\`\`

---
*${'{footer message}'}*
`
  },
  markdown: {
    name: '📝 Markdown Lover',
    content: `# ${'{Your Name}'

| 📌 | Information |
|---|-------------|
| 🏠 | Location: ${'{city}, {country}'} |
| 💼 | Role: ${'{role}'} |
| 🔗 | [Website](${'{website}'}) |
| 💻 | [Blog](${'{blog}'}) |

## 📚 Currently Learning

- ${'{topic1}'}
- ${'{topic2}'}
- ${'{topic3}'}

## 📈 Activity Graph

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=${'{username}'}&theme=github-dark)](https://github.com/ashutosh00710/github-readme-activity-graph)

---

*Last updated: ${'{date}'}*
`
  },
  cat: {
    name: '🐱 Cat Lover',
    content: `${chalk.yellow('／◡＼')} ${chalk.yellow('◠‿◠')}
   ${chalk.yellow('/   ·   \\')}
  ${chalk.yellow('|  > <  |')}  Meow! 🐱
   ${chalk.yellow('\\_____/')}

# Hi, I'm ${'{name}'}!

\`\`\`
  /\\_____/\\
 (  o   o  )
 (  ==^==  )
  )       (
 (         )
(           )
\`\`\`

## 🐾 About This Cat

- 😺 Name: ${'{cat name}'}
- 🎂 Age: ${'{age}'} years old
- 🍖 Favorite: ${'{food}'}
- 🧶 Hobby: ${'{hobby}'}

## 🐟 GitHub Stats

![Cat](https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif)

\`\`\`
Stats: ${'{stats}'} ⭐
\`\`\`

---
*${chalk.cyan('喵喵喵 ~ 🐱')}*
`
  }
};

async function main() {
  console.log(chalk.gray('Select a template:'));
  
  const templateNames = Object.keys(templates);
  templateNames.forEach((key, i) => {
    console.log(`  ${chalk.green(i + 1)}. ${templates[key].name}`);
  });
  
  const { template } = await inquirer.prompt([
    {
      type: 'input',
      name: 'template',
      message: '\nEnter template number (1-5):',
      default: '1'
    }
  ]);
  
  const templateKey = templateNames[parseInt(template) - 1] || 'developer';
  let content = templates[templateKey].content;
  
  console.log(chalk.yellow('\n📝 Fill in your details (press Enter to skip):\n'));
  
  const vars = content.match(/\$\{([^}]+)\}/g) || [];
  const uniqueVars = [...new Set(vars)];
  
  for (const v of uniqueVars) {
    const key = v.slice(2, -1);
    const { value } = await inquirer.prompt([
      {
        type: 'input',
        name: 'value',
        message: `  ${key}:`,
        default: key.includes('username') ? 'your-username' : ''
      }
    ]);
    content = content.replaceAll(v, value || key);
  }
  
  console.log(chalk.cyan('\n📄 Generated README:\n'));
  console.log(chalk.white(content));
  
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: '\nWhat would you like to do?',
      choices: [
        '📋 Copy to clipboard',
        '💾 Save to file',
        '🔄 Regenerate',
        '❌ Exit'
      ]
    }
  ]);
  
  switch (action) {
    case '📋 Copy to clipboard':
      clipboardy.writeSync(content);
      console.log(chalk.green('\n✅ Copied to clipboard!'));
      break;
    case '💾 Save to file':
      const fs = require('fs');
      fs.writeFileSync('README.md', content);
      console.log(chalk.green('\n✅ Saved to README.md!'));
      break;
    case '🔄':
      main();
      break;
    default:
      console.log(chalk.gray('\n👋 Goodbye!'));
  }
}

main().catch(console.error);
