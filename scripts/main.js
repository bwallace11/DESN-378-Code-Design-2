//WEEK 0 as a comment then add this code 

const username = 'bwallace11';
const repo = 'DESN-378-Code-Design-2';

fetch('https://api.github.com/repos/' + username + '/' + repo + '/git/trees/main?recursive=1')
  .then(res => res.json())
  .then(data => {
    const nav = document.querySelector('nav');
    
    const indexFiles = data.tree
      .filter(item => item.path.endsWith('index.html'))
      .map(item => item.path.replace(/index\.html$/, '').replace(/\/$/, ''))
      .filter(path => path !== '');

    const weeks = {};
    indexFiles.forEach(path => {
      const parts = path.split('/').filter(Boolean);
      if (parts.length === 2) {
        const [week, project] = parts;
        if (!weeks[week]) weeks[week] = [];
        weeks[week].push(project);
      } else if (parts.length === 1) {
        const [week] = parts;
        if (!weeks[week]) weeks[week] = [];
      }
    });

    const ul = document.createElement('ul');
    nav.appendChild(ul);

    Object.keys(weeks).sort().forEach(week => {
      const li = document.createElement('li');
      li.textContent = week;
      ul.appendChild(li);

      const subUl = document.createElement('ul');
      li.appendChild(subUl);

      weeks[week].forEach(project => {
        const subLi = document.createElement('li');
        const link = document.createElement('a');
        link.href = week + '/' + project + '/';
        link.textContent = project;
        subLi.appendChild(link);
        subUl.appendChild(subLi);
      });
    });
  });
  
  //WEEK 0