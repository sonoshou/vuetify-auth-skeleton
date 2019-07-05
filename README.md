# vuetify-inhouse-skeleton

Please see [wiki](https://github.com/sonoshou/vuetify-auth-skeleton/wiki)

## Build Setup

``` bash
#  install vue-cli
yarn global add vue-cli

# install dependencies
yarn install

# serve with hot reload at localhost:50000
yarn dev

# build for production with minification
yarn build
```

## firebase Setup

```bash
# install firebase
yarn global add firebase-tools

# firebase login
firebase login --no-localhost

# reoauth
firebase login --reauth --no-localhost

# select project_id
firebase use --add

# firebase deploy
firebase deploy
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
