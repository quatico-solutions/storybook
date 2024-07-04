# quatico storybook fork

## docs

* <https://storybook.js.org/docs/contribute/code>
* <https://github.com/storybookjs/storybook/blob/v8.1.11/CONTRIBUTING.md>

## build

```bash
cd "$(git rev-parse --show-toplevel)"
git clean -fdX 

nvm use

yarn i
# TODO: find out if this step is necessary
yarn start # prepares dev env (among other things)

# build
cd code
yarn build --prod manager react

# pack / publish
cd ./renderers/react
yarn pack 
# yarn publish --access public
```
