// UTILS
function cleanRepoName(repoName) {
  // Remove all non-alphanumeric characters (except spaces) and replace with a space
  let cleanedName = repoName.replace(/[^a-zA-Z0-9\s]/g, " ");

  // Replace multiple spaces with a single space
  cleanedName = cleanedName.replace(/\s+/g, " ").trim();

  // Convert to title case (capitalize each word)
  cleanedName = cleanedName.replace(/\b\w/g, (char) => char.toUpperCase());

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
    Dart: ["App Development"],
    Flutter: ["App Development"],
    HTML: ["Web Development"],
    CSS: ["Web Development"],
    Python: ["Python", "AI & ML", "Data Science"],
    Java: ["Desktop Development", "Scrapping"],
    JavaScript: ["Web Development"],
    "Jupyter Notebook": ["Data Science"],
    C: ["CLI Programming", "System Programming"],
    "C++": ["CLI", "Desktop Development"],
    "C#": ["Desktop Development"],
    Ruby: ["Web Development"],
    PHP: ["Web Development"],
    Swift: ["App Development"],
    Go: ["System Programming"],
    Rust: ["System Programming"],
    R: ["Data Science"],
    MATLAB: ["Data Science"],
    SQL: ["Database Management"],
    Perl: ["Scripting"],
    Bash: ["Scripting"],
    Lua: ["Scripting"],
    TypeScript: ["Web Development"],
    Kotlin: ["App Development"],
    "Objective-C": ["App Development"],
    Scala: ["General Purpose"],
    Haskell: ["Functional Programming"],
    Lisp: ["Functional Programming"],
    Erlang: ["Functional Programming"],
    Elixir: ["Functional Programming"],
    Prolog: ["Logic Programming"],
    COBOL: ["Business Applications"],
    Fortran: ["Scientific Computing"],
    Assembly: ["System Programming"],
    VHDL: ["Hardware Description"],
    Verilog: ["Hardware Description"],
    ActionScript: ["Web Development"],
    VBScript: ["Scripting"],
    Groovy: ["General Purpose"],
    D: ["General Purpose"],
    "F#": ["Functional Programming"],
    OCaml: ["Functional Programming"],
    Scheme: ["Functional Programming"],
    Ada: ["System Programming"],
    Delphi: ["App Development"],
    "Visual Basic": ["App Development"],
    Smalltalk: ["Object-Oriented Programming"],
    "Objective-J": ["Web Development"],
    CoffeeScript: ["Web Development"],
    Sass: ["Web Development"],
    LESS: ["Web Development"],
    GraphQL: ["Web Development"],
    Elm: ["Web Development"],
    Clojure: ["Functional Programming"],
    Julia: ["Data Science"],
    Solidity: ["Blockchain Development"],
    Vala: ["System Programming"],
    Crystal: ["System Programming"],
    Zig: ["System Programming"],
    Nim: ["System Programming"],
    Pug: ["Web Development"],
  };
  if (language == null || language == "" || language == undefined) {
    return ["Developement"];
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
    Dart: "flutter",
    Flutter: "flutter",
    HTML: "html5",
    CSS: "css3",
    JavaScript: "javascript",
    "Jupyter Notebook": "jupyter",
    Python: "python",
    Java: "java",
    C: "c",
    "C++": "cplusplus",
    "C#": "csharp",
    Ruby: "ruby",
    PHP: "php",
    Swift: "swift",
    Go: "go",
    Rust: "rust",
    R: "r",
    MATLAB: "matlab",
    SQL: "mysql",
    Perl: "perl",
    Bash: "bash",
    Lua: "lua",
    TypeScript: "typescript",
    Kotlin: "kotlin",
    ObjectiveC: "objectivec",
    Scala: "scala",
    Haskell: "haskell",
    Lisp: "lisp",
    Erlang: "erlang",
    Elixir: "elixir",
    Prolog: "prolog",
    COBOL: "cobol",
    Fortran: "fortran",
    Assembly: "assembly",
    VHDL: "vhdl",
    Verilog: "verilog",
    ActionScript: "actionscript",
    VBScript: "vbscript",
    Groovy: "groovy",
    D: "d",
    "F#": "fsharp",
    OCaml: "ocaml",
    Scheme: "scheme",
    Ada: "ada",
    Delphi: "delphi",
    "Visual Basic": "vb",
    Smalltalk: "smalltalk",
    ObjectiveJ: "objectivej",
    CoffeeScript: "coffeescript",
    Sass: "sass",
    LESS: "less",
    GraphQL: "graphql",
    Elm: "elm",
    Clojure: "clojure",
    Julia: "julia",
    Solidity: "solidity",
    Vala: "vala",
    Crystal: "crystal",
    Zig: "zig",
    Nim: "nim",
    Pug: "javascript",
  };
  if (language == null || language == "" || language == undefined) {
    return "devicon";
  }
  // Normalize the input to handle case sensitivity
  const normalizedLanguage = language.trim().toLowerCase();
  for (const [key, value] of Object.entries(devicons)) {
    if (key.toLowerCase() == normalizedLanguage) {
      return value;
    }
  }
}
async function getGithubRepos() {
  const githubUser = "Anas-Altaf";
  const githubApiLink = `https://api.github.com/users/${githubUser}/repos?per_page=100&type=sources`;

  try {
    const response = await fetch(githubApiLink);
    if (!response.ok) throw new Error(`HTTP Error! Status: ${response.status}`);

    let data = await response.json();
    data = shuffleJsonObjects(data);

    return data
      .filter(
        (repo) =>
          !repo.archived &&
          !repo.name.trim().toLowerCase().includes("anas") &&
          !repo.disabled
      )
      .map((repo, idx) => {
        return {
          id: idx + 1,
          name: cleanRepoName(repo.name),
          description: repo.description
            ? repo.description.length > 100
              ? repo.description.slice(0, 100) + "..."
              : repo.description
            : "More on Github",
          category: getCategory(repo.language),
          icon: getDeviconName(repo.language),
          link: repo.html_url,
        };
      });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

// EXPORTS
export { getGithubRepos };
