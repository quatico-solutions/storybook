# quatico storybook fork

## docs

* <https://storybook.js.org/docs/contribute/code>
* <https://github.com/storybookjs/storybook/blob/v8.1.11/CONTRIBUTING.md>

## build

```bash
function rename_package_names() {
  # renames package name AND (workspace) dependencies in package.json
  sed -i '' 's/@storybook\//@qs\/storybook--/g' package.json 
}


nvm use

yarn i

cd code
yarn build --prod react-webpack5


cd ./frameworks/react-webpack5
rename_package_names
yarn pack
```
