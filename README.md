[Learn React With Typescript Exercises](git@github.com:eross/learn_react_with_typescript.git)

Various sandboxes with Typescript and React.

See [Book by Carl Rippon](https://www.carlrippon.com/books/)

## Setup

> npx create-react-app app --template typescript

> npm i -D prettier eslint-config-prettier eslint-plugin-prettier

In .vscode/settings.json

    {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

In package.json

    {
        ...,
        "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest",
            "plugin:prettier/recommended"
            ]
        },
    ...
    }

In .prettierrc.json

    {
        "printWidth": 100,
        "singleQuote": true,
        "semi": true,
        "tabWidth": 2,
        "trailingComma": "all",
        "endOfLine": "auto"
    }
