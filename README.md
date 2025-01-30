# todo-list-project

1. Project Overview
This project is a simple To-Do List built using TypeScript, SCSS (BEM), and HTML. It allows users to:

- Add new tasks
- Mark tasks as completed (delete them)
- Display a greeting message based on the time of day
- Show a random fact or welcome message retrieved from an API

2. Features
- Add new to-dos
- Delete (complete) to-dos
- Display greeting based on the time of day
- Fetch and display a welcome message or random fact from an API

3. Project Structure
todo-list-project
    node_modules
    public
    src
      api.ts
      main.ts
      vite-env.d.ts        
    styles
      styles.scss
      _buttons.scss
      _variables.scss   
    gitignore
    index.html
    package-lock.json
    package.json
    README.md
    tsconfig.json
    vite.config.js

4. Steps to Implement (before creating the project structure)

Step 1: Set Up the Project

     1/Initialize a new project
       npm init -y

     2/Install TypeScript, SCSS, and necessary dependencies

        npm create vite@latest todo-list-project -- --template vanilla-ts 

        cd my-app-name

        npm i        (for typescript and vite)

        npm install -D sass-embedded

        npm run dev    

     3/Check that the tsconfig.json is correct and has all the relevant dependencies

    

Step 2: HTML Structure (BEM)

- Create a index.html file with the following elements:
- Header: Displays a dynamic greeting message.
- Task Input Section: Input field & button to add new tasks.
- To-Do List: Displays all tasks with a delete button.
- API Section: Displays a random fact or welcome message.

Step 3: SCSS (BEM) Styling
- Create a main.scss file and import partials (_variables.scss, _buttons.scss, styles.scss)


Step 4: TypeScript Functionality
- Handle Adding and Removing Todos
- Display Greeting Based on Time
- Fetch API Data and Display Random Fact


Step 5: Display Greeting Based on Time


Step 6: Fetch API for Random Fact

- Create a separate api.ts file to handle API requests.

Step 7: Compile & Run Project
  1/Compile TypeScript
    tsc

  2/Compile SCSS
    sass src/styles/main.scss dist/styles/main.css

 
NOTE:
This project was created locally due to an issue with the repository during its creation. For this reason, not many commits appear logged.