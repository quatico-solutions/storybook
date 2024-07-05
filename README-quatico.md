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
cd "$(git rev-parse --show-toplevel)"/code/renderers/react
yarn pack

cd "$(git rev-parse --show-toplevel)"/code/ui/manager
yarn pack 
```

to publish each package:

* change version in `package.json` to `X.Y.Z-quatico.N`
* make a tag `vX.Y.Z-quatico.N` and `git push --tags`
* create relase from tag <https://github.com/quatico-solutions/storybook/tags>
* add `tgz` as release attachment
