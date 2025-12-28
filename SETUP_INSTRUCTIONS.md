# Vercel CI/CD セットアップ手順

## 必要なGitHub Secretsの設定

GitHubリポジトリの Settings > Secrets and variables > Actions で以下のシークレットを追加してください：

1. **VERCEL_TOKEN**
   - Vercelのダッシュボードから取得
   - Account Settings > Tokens > Create Token

2. **VERCEL_ORG_ID**
   - Vercelプロジェクトのダッシュボード > Settings > General
   - "Team ID" または "Personal Account ID"

3. **VERCEL_PROJECT_ID**
   - Vercelプロジェクトのダッシュボード > Settings > General
   - "Project ID"

## ブランチ構成

- **main**: Production環境（本番）
- **dev**: Preview環境（開発）

## デプロイフロー

1. `dev`ブランチへのpush → 自動的にPreview環境にデプロイ
2. `main`ブランチへのPR → Preview環境にデプロイ
3. `main`ブランチへのマージ → Production環境にデプロイ