# プロパティ設定と連動したLWCカスタムコンポーネント

## スクラッチ組織作成＆デプロイ

```
git clone https://github.com/misu007/lwcWithProperty.git
cd lwcWithProperty/
sfdx force:org:create -s -f config/project-scratch-def.json -a lwcWithPropertyDev
sfdx force:source:push -u lwcWithPropertyDev
```
## スクラッチ組織オープン
```
sfdx force:org:open -u lwcWithPropertyDev
```

