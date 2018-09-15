# Firebase login via Twitter

Firebase の Authentication を Twitter を使って行うサンプルです。  
アプリは vue-cli を使って作成しています。

## Usage

* Twitter のアプリ登録をしてAPI Key/API Secret を取得
* Firebase アプリを作成し、Twitterログインの設定を行う
  * https://firebase.google.com/docs/auth/web/twitter-login?hl=ja
* 作成したアプリの情報を `src/components/FirebaseLogin.vue` の `created` 部分に入力
* `yarn start` すると `localhost:8080` でアプリを使うことができます

## Develop Steps
0. vue-cli で雛形つくる
1. firebase アプリをつくる
  * https://firebase.google.com/docs/web/setup?hl=ja
2. firebase/firebaseui を yarn add する
3. https://firebase.google.com/docs/auth/web/firebaseui?hl=ja の 「 OAuth プロバイダ（Google、Facebook、Twitter、GitHub）」に従ってすすめる
4. https://firebase.google.com/docs/auth/web/manage-users?hl=ja に従ってログイン情報を扱う

### Components

#### FirebaseLogin.vue

名前の通り Firebase での Twitter ログインを行う

#### HelloWorld.vue

ログインに成功したらリダイレクトされて表示される。  
Twitter の displayName が表示されます



