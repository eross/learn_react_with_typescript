[Learn React With Typescript Exercises](git@github.com:eross/learn_react_with_typescript.git)

Various sandboxes with Typescript and React.

See [Book by Carl Rippon](https://www.carlrippon.com/books/)

## Setup
> npm install --save-dev typescript

> npm i -D prettier eslint-config-prettier eslint-plugin-prettier

> npm install --save-dev @types/react @types/react-dom

> npm install --save-dev @babel/core

> npm i -D @babel/preset-env

> npm i -D @babel/preset-react

> npm i -D @babel/preset-typescript

> npm i -D @babel/plugin-transform-runtime @babel/runtime

> npm i -D webpack webpack-cli

> npm i -D webpack-dev-server

> npm i -D babel-loader

> npm i -D html-webpack-plugin

> npm i -D ts-node

> npx create-react-app app --template typescript



In .vscode/settings.json

    {
        "editor.formatOnSave": true,
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

.babelrc.json

    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript"
        ],
        "plugins": [
            [
                "@babel/plugin-transform-runtime",
                {
                    "regenerator": true
                }
            ]
        ]
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
