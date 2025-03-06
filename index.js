// UTILS
function cleanRepoName(repoName) {
    // Remove all non-alphanumeric characters (except spaces) and replace with a space
    let cleanedName = repoName.replace(/[^a-zA-Z0-9\s]/g, ' ');

    // Replace multiple spaces with a single space
    cleanedName = cleanedName.replace(/\s+/g, ' ').trim();

    // Convert to title case (capitalize each word)
    cleanedName = cleanedName.replace(/\b\w/g, char => char.toUpperCase());

    return cleanedName;
}
function shuffleJsonObjects(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap JSON objects at indices i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function getCategory(language) {
    const categories = {
        'Dart': 'App Development',
        'Flutter': 'App Development',
        'HTML': 'Web Development',
        'CSS': 'Web Development',
        'Python': 'Python  | AI & ML | Data Science | Web',
        'Java': 'Desktop Development | Scrapping',
        'JavaScript': 'Web Development',
        'Jupyter Notebook': 'Data Science',
        'C': 'CLI Programming | System Programming',
        'C++': 'CLI Programming | Desktop Development',
        'C#': 'Desktop Development',
        'Ruby': 'Web Development',
        'PHP': 'Web Development',
        'Swift': 'App Development',
        'Go': 'System Programming',
        'Rust': 'System Programming',
        'R': 'Data Science',
        'MATLAB': 'Data Science',
        'SQL': 'Database Management',
        'Perl': 'Scripting',
        'Bash': 'Scripting',
        'Lua': 'Scripting',
        'TypeScript': 'Web Development',
        'Kotlin': 'App Development',
        'Objective-C': 'App Development',
        'Scala': 'General Purpose',
        'Haskell': 'Functional Programming',
        'Lisp': 'Functional Programming',
        'Erlang': 'Functional Programming',
        'Elixir': 'Functional Programming',
        'Prolog': 'Logic Programming',
        'COBOL': 'Business Applications',
        'Fortran': 'Scientific Computing',
        'Assembly': 'System Programming',
        'VHDL': 'Hardware Description',
        'Verilog': 'Hardware Description',
        'ActionScript': 'Web Development',
        'VBScript': 'Scripting',
        'Groovy': 'General Purpose',
        'D': 'General Purpose',
        'F#': 'Functional Programming',
        'OCaml': 'Functional Programming',
        'Scheme': 'Functional Programming',
        'Ada': 'System Programming',
        'Delphi': 'App Development',
        'Visual Basic': 'App Development',
        'Smalltalk': 'Object-Oriented Programming',
        'Objective-J': 'Web Development',
        'CoffeeScript': 'Web Development',
        'Sass': 'Web Development',
        'LESS': 'Web Development',
        'GraphQL': 'Web Development',
        'Elm': 'Web Development',
        'Clojure': 'Functional Programming',
        'Julia': 'Data Science',
        'Solidity': 'Blockchain Development',
        'Vala': 'System Programming',
        'Crystal': 'System Programming',
        'Zig': 'System Programming',
        'Nim': 'System Programming',
        'Pug': 'Web Development',
    };
    if (language == null || language == '' || language == undefined) {
        return 'Developement';
    }
    // Normalize the input to handle case sensitivity
    const normalizedLanguage = language.trim().toLowerCase();

    // Iterate over the categories object
    for (const [key, value] of Object.entries(categories)) {
        // Check if the normalized language matches the key (case-insensitive)
        if (key.toLowerCase() == normalizedLanguage) {
            return value;
        }
    }

}
//  Get devicon name based on the language
function getDeviconName(language) {
    const devicons = {
        'Dart': 'flutter',
        'Flutter': 'flutter',
        'HTML': 'html5',
        'CSS': 'css3',
        'JavaScript': 'javascript',
        'Jupyter Notebook': 'jupyter',
        'Python': 'python',
        'Java': 'java',
        'C': 'c',
        'C++': 'cplusplus',
        'C#': 'csharp',
        'Ruby': 'ruby',
        'PHP': 'php',
        'Swift': 'swift',
        'Go': 'go',
        'Rust': 'rust',
        'R': 'r',
        'MATLAB': 'matlab',
        'SQL': 'mysql',
        'Perl': 'perl',
        'Bash': 'bash',
        'Lua': 'lua',
        'TypeScript': 'typescript',
        'Kotlin': 'kotlin',
        'ObjectiveC': 'objectivec',
        'Scala': 'scala',
        'Haskell': 'haskell',
        'Lisp': 'lisp',
        'Erlang': 'erlang',
        'Elixir': 'elixir',
        'Prolog': 'prolog',
        'COBOL': 'cobol',
        'Fortran': 'fortran',
        'Assembly': 'assembly',
        'VHDL': 'vhdl',
        'Verilog': 'verilog',
        'ActionScript': 'actionscript',
        'VBScript': 'vbscript',
        'Groovy': 'groovy',
        'D': 'd',
        'F#': 'fsharp',
        'OCaml': 'ocaml',
        'Scheme': 'scheme',
        'Ada': 'ada',
        'Delphi': 'delphi',
        'Visual Basic': 'vb',
        'Smalltalk': 'smalltalk',
        'ObjectiveJ': 'objectivej',
        'CoffeeScript': 'coffeescript',
        'Sass': 'sass',
        'LESS': 'less',
        'GraphQL': 'graphql',
        'Elm': 'elm',
        'Clojure': 'clojure',
        'Julia': 'julia',
        'Solidity': 'solidity',
        'Vala': 'vala',
        'Crystal': 'crystal',
        'Zig': 'zig',
        'Nim': 'nim',
        'Pug': 'javascript',
    };
    if (language == null || language == '' || language == undefined) {
        return 'devicon';
    }
    // Normalize the input to handle case sensitivity
    const normalizedLanguage = language.trim().toLowerCase();
    for (const [key, value] of Object.entries(devicons)) {
        if (key.toLowerCase() == (normalizedLanguage)) {
            return value;
        }
    }
}


// Github Api
async function getGithubRepos() {
    var githubUser = 'Anas-Altaf'
    var githubApiLink = `https://api.github.com/users/${githubUser}/repos?per_page=100&type=sources`
    var xhr = new XMLHttpRequest();
    xhr.open('GET', githubApiLink, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            data = shuffleJsonObjects(data)
            // Print Repos Data one by one
            data.forEach((repo, idx) => {
                // Checking if not archived
                if (!repo.archived && !repo.name.trim().toLowerCase().includes('anas') && !repo.disabled) {
                    var rName = cleanRepoName(repo.name)
                    var rDesc = repo.description == null ? 'More on Github' : repo.description.length > 100 ? repo.description.slice(0, 100) + '...' : repo.description
                    var rCat = getCategory(repo.language)
                    var rIcon = getDeviconName(repo.language)
                    var rLink = repo.html_url
                    const skillSwiperWrapper = document.querySelector('.swiper-wrapper')
                    const repoCardElement = document.createElement('div')
                    repoCardElement.innerHTML = repoCard(idx + 1, rName, rDesc, rIcon, rCat, rLink)
                    repoCardElement.classList.add('swiper-slide')
                    skillSwiperWrapper.appendChild(repoCardElement)

                }
            }
            );


        }

    }
}


function repoCard(id, rName, rDesc, rIcon, rCategory, rLink) {
    // console.log(id, rName, rDesc, rIcon, rCategory, rLink)
    return `
    <a href="${rLink}" target="_blank">
<div class="card">
    <h1 class="skill-count">${id < 10 ? '0' + id : id}</h1>
    <div class="skill-tag">
        <div class="tag-name">${rCategory}</div>
        <span class="tag-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${rIcon}/${rIcon}-original.svg" />
</span>
    </div>
    <div class="skill-name">${rName}</div>
    <p class="skill-desc">${rDesc}</p>
</div>
</a>
`.trim()
}

function setUpProjects() {

    selelctedProjects = [
        {
            pName: 'Neurl-PS Scrapper',
            desc: 'A robust scrapper for https://nips.papers.cc , it could be helpful if you are a researcher and data scientist or you need to train your LLMs.',
            img: 'assets/images/blog/blog-1.webp',
            icons: ['python', 'jupyter', 'pandas', 'streamlit', 'git', 'pycharm'],
            category: 'Data Science in AI and ML',
            link: 'https://github.com/Anas-Altaf'
        },
        {
            pName: 'Neurl-PS Scrapper',
            desc: 'A robust scrapper for https://nips.papers.cc , it could be ealpful if you are a researcher and data scientist.',
            img: 'assets/images/blog/blog-1.webp',
            icons: ['github', 'python'],
            category: 'Data Science in AI and ML',
            link: 'https://github.com/Anas-Altaf'
        },
        {
            pName: 'Neurl-PS Scrapper',
            desc: 'A robust scrapper for https://nips.papers.cc , it could be ealpful if you are a researcher and data scientist.',
            img: 'assets/images/blog/blog-1.webp',
            icons: ['github', 'python'],
            category: 'Data Science in AI and ML',
            link: 'https://github.com/Anas-Altaf'
        },
    ]

    // var workSection = document.querySelector('.work-section')
    var workSectionWrapper = document.querySelector('.work-section-wrapper')
    var projectCard = (id, pName, desc, img, icons, category, link) => {
        return `
    <a class="project-card" href="${link}" target="_blank">
                <div class="project-card-header">
                    <h4>${id} | ${category}</h4>
                    <div class="project-icons">
                        ${icons.map(icon => {
            // return `<i class="fa-solid fa-${icon} project-icon"></i>`
            return `<img title="${cleanRepoName(icon)}" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}/${icon}-original.svg" /> 
`
        }).join(' ')
            }
                       
                    </div>
                </div>
                <div class="project-card-img">
                    <img src="${img}" alt="Project Image ${id}">
                </div>
                <div class="project-card-info">
                    <h1 class="project-card-title">${pName}</h1>
                    <p class="project-card-desc">${desc}</p>
                </div>
            </a>
    `
    }
    selelctedProjects.forEach((card, idx) => {
        const projectCardElement = document.createElement('a')
        projectCardElement.innerHTML = projectCard(idx + 1, card.pName, card.desc, card.img, card.icons, card.category, card.link)
        workSectionWrapper.appendChild(projectCardElement)

    });
    // projecCardElement.innerHTML = projectCard()

}


// Setting Year in Copyright Section
function setFooterYear() {
    const footerYear = document.querySelector('.copy-right .year')
    d = new Date();
    footerYear.innerHTML = d.getFullYear()

}

    setFooterYear()
    getGithubRepos()
    setUpProjects()
