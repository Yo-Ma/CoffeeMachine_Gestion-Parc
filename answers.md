1) Initialiser une application Vue.

**Question : Rappeler ce qu'est npm et pourquoi nous utilisons l'option --global ?**

Votre réponse :
````
npm est le gestionnaire de paquet de node.js.
L'option globale permet d'installer les paquets non pas pour un projet précis mais pour la totalité de notre environnement de développement.
Les paquets installés avec l'option globale ne seront donc pas présents dans le projet mais sur la machine locale.
````

**Question : Quels sont les bons réflexes à avoir quand vous téléchargez un nouveau projet ? Quels fichiers regarder en priorité ?**

Votre réponse :
````
Le fichier README
````

**Question : Si vous regardez le fichier README.md du projet vous voyez que trois commandes sont indiquées, quel est le but de chacune ?**

Votre réponse :
````
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
````

**Question : Une fois que tout fonctionne faites un premier commit ( vous aurez surement besoin d'initialiser le repository git ). Quelle est la commande à utiliser ? 🤔**

Votre réponse :
````
1. Initialiser Git pour le projet en cours
  $ git init
2. Création du répértoire sur GitHub (par exemple)
  ...
3. Faire le lien entre le répértoire GitHub et le dossier local de mon projet
  $ git add remote origin [URL DU REPO]
4. Ajout des fichiers, premier commit et push
  $ git add .
  $ git commit -m 'First commit'
  $ git push -u origin
````

2) Ecran d'accueil.
...
    
3) Préparation des écrans.
...
    
4) Mise en place d'un routeur.
... 
    
4.1) Installation.
   
**Question : quelle est la différence entre npm install vue-router et npm install --save vue-router ? Laquelle est à privilégier ici ?**
   
   Votre réponse :
   ````
   ````
    
4.2) Configuration.
...

4.3) Utilisation.
...

5) Création d'un composant pour représenter une machine.
...

5.1) Composant statique dans une nouvelle route.
...  
   
5.2) Passage de props au composant Machine.
...

6) Création d'une liste.
    
**Question : Remarquez que nous avons ajouté une clef id à nos objets, pourquoi ?**
    
  Votre réponse :
  ````
  ````

7) Création d'une map.
...
    
7.1) Choisir le bon package.

**Question : Prenez le temps de regarder la page, qu'est ce qui vous inspire confiance ? Ou au contraire méfiance ?**
   
   Votre réponse :
   ````
   ````

7.2) Map vide.

**Question : A quoi sert une clef API ? Puis je partager cette clef ? Dois je la commiter ?**
   
   Votre réponse :
   ````
   ````
    
7.3) Ajouter les marqueurs.
...

8) Récupérer les données via une API externe.
...

8.1) Installation d'une librairie permettant de faire des appels HTTP.

**Prenez toujours le temps d'analyser cette librairie sur github, qu'est ce qui vous inspire confiance ?**

  Votre réponse :
  ````
  Plugin encore en version bêta... mais les stats contrebalancent le tout :
  
  GitHub :
      . 37 142 Stars - 2607 Forks - 801 Watchers
      . 130 Contributors - 753 Commits (the latest a few hours ago)
  
  Stats npmjs.com :  
      . 300 779 downloads in the last day
      . 1 618 334 downloads in the last week
      . 5 962 721 downloads in the last month 
  ````

8.2) Notion de promesses.

   Quel problème cherchons nous à résoudre ?
   Quelle est la solution proposée ?
   Comment la mettre en oeuvre ?
    
    
8.3) Utilisation dans le projet.
...

8.4) Mise à jour du composant MachinesMap.
...

8.5) Eviter le doublon.
   
   Quelles idées avez vous pour répondre à ce problème ?
   
   Discutons-en et essayez de mettre en oeuvre une solution.
   

9) Aller plus loin.
...

9.1) Centrer la carte par rapport à sa localisation.
...

9.2) Filtrer la liste des machines.
...

9.3) Ajouter une nouvelle machine.
...
    
9.4) Modifier ou supprimer une machine existante.
...

10) Packager l'application dans cordova.
...

11) Aller ( encore ) plus loin.
...
