---
description: Push automatique des modifications sur GitHub après chaque changement
---

# Auto-push GitHub

Après chaque modification de code dans ce projet, exécuter automatiquement :

// turbo-all

1. Vérifier s'il y a des changements non commités :
```bash
git status --porcelain
```

2. Si des changements existent, les ajouter et commiter avec un message descriptif :
```bash
git add . && git commit -m "update: [description de la modification]"
```

3. Pousser sur GitHub :
```bash
git push origin main
```

**Note :** Le message de commit doit décrire brièvement ce qui a été modifié (ex: "update: fix animation timing", "update: add new component", etc.)
