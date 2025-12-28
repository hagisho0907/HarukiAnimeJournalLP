# Meta Pixel 活用ガイド

## 1. Facebook Business Manager での確認方法

### アクセス方法
1. [Facebook Business Manager](https://business.facebook.com) にログイン
2. 「イベントマネージャ」を開く
3. ピクセルID「1877200786544476」を選択

### 確認できるデータ
- **PageView**: サイト訪問者数とページビュー
- **InitiateCheckout**: CTAボタンクリック数

## 2. 主要な分析指標

### コンバージョン率
- 訪問者数 ÷ CTAクリック数
- どのページからのクリックが多いか確認

### ユーザー動線
- どのページから流入しているか
- どこで離脱しているか
- CTAまでの平均滞在時間

## 3. 広告最適化への活用

### カスタムオーディエンス作成
1. CTAクリックユーザーのリスト作成
2. 類似オーディエンスの生成
3. リターゲティング広告の配信

### 広告効果測定
- 広告経由の訪問者のコンバージョン率
- ROASの計算
- 最も効果的な広告クリエイティブの特定

## 4. 追加できるイベント

### 購入完了
```javascript
trackEvent('Purchase', { 
  value: 29, 
  currency: 'USD',
  content_ids: ['haruki-anime-journal']
});
```

### カート追加
```javascript
trackEvent('AddToCart', { 
  value: 29, 
  currency: 'USD' 
});
```

### コンテンツ閲覧
```javascript
trackEvent('ViewContent', { 
  content_name: 'Product Page',
  content_category: 'Anime Guide'
});
```

## 5. レポート活用

### 週次レポート
- 訪問者数の推移
- コンバージョン率の変化
- 最も効果的なトラフィックソース

### A/Bテスト
- 異なるCTAテキストの比較
- 価格表示の違いによる影響
- ページレイアウトの最適化

## 6. 実装済み機能

- ✅ 基本的なページビュー追跡
- ✅ CTAボタンクリック追跡（InitiateCheckout）
- ✅ 価格情報の送信（$29）

## 7. 次のステップ

1. Facebook Business Managerでピクセルのデータを確認
2. 最初の1週間のデータを収集
3. カスタムコンバージョンの設定
4. 広告キャンペーンとの連携
5. より詳細なイベント追跡の実装検討