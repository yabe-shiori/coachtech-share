# SHARE


# 概要
SHAREは、ユーザーが自分の思いを共有し、他のユーザーと交流し、コンテンツを探索できるプラットフォームを提供します。このアプリケーションは、投稿の作成、いいね機能、コメント機能など、多彩な機能を備えています。シンプルで直感的なインターフェースを備えたSHAREは、ユーザーが簡単に利用できるように設計されています。

# 作成の目的
SHAREを作成した理由は、デジタル時代における人々の交流やコミュニケーションの新しい形を提供することです。現代社会では、インターネットを通じた情報共有がますます重要になっています。SNSやブログなど、さまざまなプラットフォームが存在しますが、多くのユーザーがシンプルかつ直感的に利用できるプラットフォームを求めています。

  
![トップ画像](https://github.com/yabe-shiori/coachtech-share/assets/142664073/641708d6-847c-4f67-a58d-4a78470ec6ce)


## 主な機能　　
- ユーザー認証: Firebaseを使用した安全なログインおよび登録システム。
- 投稿追加: ユーザーは新しい投稿を作成して共有することができます。
- 投稿削除: ユーザーは投稿を削除することができます。
- いいね追加: ユーザーは投稿にいいねをしてコンテンツに感謝の意を示すことができます。
- いいね削除: ユーザーは自分がしたいいねを取り消すことができます。
- コメント追加: ユーザーは他のユーザーの投稿にコメントを追加でき、意見や感想を共有したり、ディスカッションを行うことができます。

<br />

## インストール

### 1.プロジェクトのクローン  
git clone https://github.com/yabe-shiori/coachtech-share.git
  
### 2. プロジェクトディレクトリに移動    
cd coachtech-share

### 3. Composerパッケージのインストール
`composer install`  

注意: Composer は、指定されたプロジェクトに必要なパッケージをインストールします。プロジェクトで使用されている Laravel やその他のパッケージは、特定の PHP バージョンに依存している場合があります。Composer が実行される前に、適切な PHP バージョンがシステムにインストールされていることを確認してください。

このプロジェクトはPHP 8.2 以上を必要とします。


### 4. 環境変数の設定
.env.exampleファイルをコピーして.envファイルを作成し、必要な環境変数を設定します。  
`cp .env.example .env`  

##### タイムゾーンの変更
APP_TIMEZONE=Asia/Tokyo  

##### 言語の変更
APP_LOCALE=ja  
APP_FALLBACK_LOCALE=ja  
APP_FAKER_LOCALE=ja_JP    

##### データベースの設定
デフォルトではSQLiteが設定されていますが、MySQLを使用するように変更します。  
以下の手順に従って設定を変更してください。  

１.DB_CONNECTION=sqlite の行をコメントアウトまたは削除します。  

２.次に、以下の行をコメントアウトから外して、MySQLの接続情報を設定します。  
  
DB_CONNECTION=mysql  
DB_HOST=mysql  
DB_PORT=3306  
DB_DATABASE=laravel
DB_USERNAME=sail  
DB_PASSWORD=password    


### 5. Docker環境のセットアップ
laravelSailを使用してDocker環境をセットアップします。  
`./vendor/bin/sail up -d`  

  

### 6. アプリケーションキーの生成
`./vendor/bin/sail artisan key:generate`  

  
  
### 7. NPMパッケージのインストール
`./vendor/bin/sail npm install`  

  

### 8. データベースのセットアップと初期データの投入 
`./vendor/bin/sail artisan migrate:refresh --seed `  

  
### 9. アセットのコンパイル  
`./vendor/bin/sail npm run dev`  

  

### 10. アプリケーションの実行
・Webブラウザで[http://localhost](http://localhost)にアクセスして、アプリケーションが正しく動作していることを確認します。  

<br />  

## 注意事項: 
Seederを利用して初期データでユーザーを作成していますが、firebaseでの認証は行っていません。
ログインする場合は、新たにユーザーを作成して、作成したユーザーのメールアドレスとパスワードでログインしてください。



<br />

## 使用技術

| Category          | Technology Stack                                     |
| ----------------- | --------------------------------------------------   |
| Frontend          | React, TypeScript, npm, Tailwind CSS                                    |
| Backend           | Laravel, PHP                                         |
| Database          | MySQL                                                |
| Environment setup | Docker, Laravel Sail                                 |
| etc.              | Git, GitHub                                          |

<br />

## テーブル設計
![テーブル設計画像](https://github.com/yabe-shiori/coachtech-share/assets/142664073/1ced81b4-a340-4f40-b027-78d5788f0b7b)

## ER図

![ER図](https://github.com/yabe-shiori/coachtech-share/assets/142664073/dfb6b5d5-c8d5-47c9-88e5-a22885bfe839)

<br />

