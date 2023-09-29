# Package Objets

1. Créer un package Objets dans src/

2. Faire une interface IObjet qui aura un prix, un poids et une méthode utiliser().

3. Les objets se divisent en deux catégories : Équipables et les Consommables. Tous les équipables ont une méthode equipe() qui permet aux personnage de porter l'équipement. Les consommables peuvent être utilisés pour bénéficier de leurs effets une et une seule fois, avant d'être détruits.

4. Les équipables sont soit des armes (épée, hache...), des armures (casque, gants, torse...) ou des accessoire (anneau, amulette, bracelet...). Tous les équipables ont un niveau. Si le personnage n'est pas d'un niveau au moins égal au niveau de l'objet, alors il ne peut pas le porter.

5. Toutes les armes augmentent la force du personnage, parfois sa vitesse et/ou son intelligence

Toutes les armures augmentent la valeur de protection du personnage. 1 point de protection réduit de 1 les dégâts reçus. Les armures peuvent parfois augmenter la force et/ou la vitesse et/ou l'intelligence du personnage.

Touts les accessoires augmentent l'intelligence du porteur, parfois sa vitesse mais jamais sa force. Ils peuvent aussi parfois augmenter la valeur de protection du porteur.

Les bonus des équipements sont proportionnels au niveau de l'objet équipable.

6. Les consommables sont soit des potions, soit des ingrédients. Les potions de vie redonnent 15, 45, ou 100 points de vie en fonction de leur puissance. Les potions de man redonnent 15, 45, ou 100 points de mana en fonction de leur puissance 