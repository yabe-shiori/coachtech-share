# SHARE


# 概要
SHAREは、ユーザーが自分の思いを共有し、他のユーザーと交流し、コンテンツを探索できるプラットフォームを提供します。このアプリケーションは、投稿の作成、いいね機能、コメント機能など、多彩な機能を備えています。シンプルで直感的なインターフェースを備えたSHAREは、ユーザーが簡単に利用できるように設計されています。


![トップ画像](https://github.com/yabe-shiori/coachtech-share/assets/142664073/3c940400-efa9-484d-a078-4edddc930338)

## 主な機能　　
- ユーザー認証: Firebaseを使用した安全なログインおよび登録システム。
- 投稿削除: ユーザーは投稿を削除することができます。
- いいねシステム: ユーザーは投稿にいいねをしてコンテンツに感謝の意を示すことができます。
- いいねの削除: ユーザーは自分がしたいいねを取り消すことができます。
- コメント追加: ユーザーは他のユーザーの投稿にコメントを追加でき、意見や感想を共有したり、ディスカッションを行うことができます。

<br />

## インストール

### 1.プロジェクトのクローン  


  
### 2. プロジェクトディレクトリに移動    


### 3. Composerパッケージのインストール
`composer install`  


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


## ER図

![ER図](https://github.com/yabe-shiori/coachtech-share/assets/142664073/dfb6b5d5-c8d5-47c9-88e5-a22885bfe839)

<br />

