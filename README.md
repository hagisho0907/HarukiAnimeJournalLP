# 概要
以下のURLのLPを完全に再現してほしい
https://harukianimejournal.my.canva.site

# 作業手順
・まずおおまかなUIとデザインを模倣したページ作りを行なってほしい
・文章も一言一句同じものでお願い
・リンク先は後から指定するので仮置きしてほしい
・固有の写真などは後からフォルダに入れて、指定するので、仮置きしてほしい・素材がほしい箇所は後から教えてほしい

# 技術構成
提案された以下の構成で作ってみて
Vercel向け静的LP技術構成

  推奨: Next.js 14 (静的エクスポート)

  Vercelとの相性を考慮すると、Next.jsの静的エクスポートが最適です：
  // next.config.js
  {
    output: 'export'
  }

  メリット:
  - Vercelとの完璧な統合
  - 自動的な画像最適化
  - ビルド時の最適化
  - 静的HTMLとして出力

  技術スタック:
  - Next.js 14 - 静的サイト生成
  - Tailwind CSS - スタイリング
  - Framer Motion - アニメーション（軽量版）
  - next/image - 画像最適化

  シンプルな構造
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    Hero.tsx
    Problem.tsx
    Reasons.tsx
    CTA.tsx

  デプロイ設定
  // vercel.json
  {
    "buildCommand": "npm run build",
    "outputDirectory": "out"
  }

# フォント
HarukiAnimeJournal:league spartan
THE ULTIMATE TOKYO ANIME GUIDE:Bebas Neue
その他は全て:TT Interphases

## セクション構成

現在のサイトは以下のセクション構成になっています：

1. **TopSection** - メインヒーローセクション（コンベア式カルーセルと証言カード）
2. **TroubleSection** - トラブルセクション（Tokyo旅行プランニングの悩み）
3. **AboutSection** - アバウトセクション（Harukiの紹介）
4. **QuestionSection** - クエスチョンセクション
5. **IntroduceSection** - 紹介セクション
6. **InsideSection** - インサイドセクション（ガイド内容4セクション詳細）
7. **BonusSection** - ボーナスセクション
8. **ReasonSection** - 理由セクション（なぜこのガイドが効果的か）
9. **DifferentSection** - 違いセクション
10. **ReviewSection** - レビューセクション（6つの実際の証言と写真）
11. **GetSection** - ゲットセクション
12. **IfSection** - イフセクション（このガイドが向いている人）
13. **TrustSection** - トラストセクション
14. **FaqSection** - FAQセクション
15. **ContactSection** - コンタクトセクション

### スティッキーCTA
- デュアルデザイン（シンプルボタン → FAQからボックスデザイン）
- Intersection Observer API による表示制御
- Facebook Pixelトラッキング統合

## 実装済み機能

### コンベア式カルーセル
- CSS-in-JSによる無限スクロールアニメーション
- ホバー時の一時停止機能
- レスポンシブデザイン対応
- スムーズなループアニメーション

### 証言者写真システム
- TopSection: Robert、Kaanの実際の写真
- ReviewSection: Robert、Ren、Kaan、Freddy.Elen、Vincentの実際の写真
- object-centerによる顔の中心配置
- 匿名者は写真なしで対応

### スティッキーCTA機能
- デュアルデザイン（シンプルボタン/ボックスデザイン）
- Intersection Observer APIによる動的表示制御
- Facebook Pixelトラッキング統合
- レスポンシブ対応

### アニメーション
- Framer Motion統合
- 各セクションのスクロールトリガーアニメーション
- staggered animations（段階的アニメーション）
- viewport once設定による最適化

### カラーシステム
- 統一された赤色テーマ（red-600）
- ブランドクリーム背景（brand-cream）
- セクション背景統一（#F5E6D3）
