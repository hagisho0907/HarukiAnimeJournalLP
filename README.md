# 概要
以下のURLのLPを完全に再現してほしい
https://harukianimejournal.my.canva.site

# 作業手順
・まずおおまかなUIとデザインを模倣したページ作りを行なってほしい
・文章も一言一句同じものでお願い
・リンク先は後から指定するので仮置きしてほしい
・固有の写真などは後からフォルダに入れて、指定するので、仮置きしてほしい ・素材がほしい箇所は後から教えてほしい

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