import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bonnes-pratiques',
  templateUrl: './bonnes-pratiques.component.html',
  styleUrls: ['./bonnes-pratiques.component.css']
})
export class BonnesPratiquesComponent implements OnInit {

  bonnesPratiques = [{
    url: "../../assets/articles/rounded-plug.svg",
    titre: "Couper le courant la nuit",
    description: "Nous coupons le courant la nuit pour économiser 25 % d 'électricité sur la box",
    modalText: "Depuis plusieurs mois nous la coupons la nuit, pour éviter le flux de data qu 'elle génère naturellement alors que nous dormons, pour l'électricité(11 w chez bouygues) et pour couper le wifi fort inutile la nuit. Solution low tech: la prise horaire...3, 99€",
    link: "",
    linkText: ""
},
{
    url: "../../assets/articles/raspberry-pi.svg",
    titre: "Héberger son site web sur un raspberry pi",
    description: "Nous hébergeons nous même notre site et notre cloud",
    modalText: "OpenCyLife héberge son site ainsi que le cloud des membres sur un simple Raspberry.Vous pouvez essayer de votre côté.L 'autohébergement vous fera économiser à la fois le coût d'un hébergeur et d 'un service cloud. De plus vous redevenez propriétaire de vos données",
    link: "https://www.open-cy.life/articles/tuto/tuto.html",
    linkText: "Notre Tuto pour l'auto hébergement"
},
{
    url: "../../assets/articles/social-interaction.svg",
    titre: "Combien de temps sur mon smartphone ?",
    description: "Quel est mon degré de dépendance ?",
    modalText: "Vous passez du temps sur votre smartphone, on vous dit que vous êtes accro ou vous vous posez tout simplement la question ? Il y a des applis pour ça!Aujourd 'hui on ne se rend plus compte du temps passé ou perdu devant notre téléphone. En France on y passe en moyenne 26 jours par an.Envie de faire quelque chose téléchargez en une de plus!Moi j 'utilise :",
    link: "https://play.google.com/store/apps/details?id=master.app.screentime&hl=fr",
    linkText: "Temps passé devant l 'écran"
},
{
    url: "../../assets/articles/computer.svg",
    titre: "Penser à éteindre son PC",
    description: "J'y pense et puis j'oublie!Il peut y penser pour moi",
    modalText: "Il est si facile de quitter son bureau ou d 'aller se coucher sans penser à éteindre son PC. Un ordinateur en veille utilise de 20 % à 40 % de l’équivalent de sa consommation en marche. Un ordinateur éteint, mais qui reste branché, continue aussi à consommer(environ 70 watts - heures[Wh] par jour).En moyenne, une unité centrale consomme 20 à 100 Wh et un écran plat entre 10 et 30 Wh.Allumé toute l 'année, 24 h/24, un seli ordinateur peut donc coûter jusqu' à 100 euros d 'électricité par an.",
    link: "https://www.pcastuces.com/pratique/astuces/4018.htm",
    linkText: "tâche d 'extinction automatique"
},
{
    url: "../../assets/articles/browser.svg",
    titre: "Calmer votre navigateur",
    description: "Les 25 onglets de mon navigateur consomment comme 25 navigateurs!",
    modalText: "Votre navigateur web tourne à plein régime, vous aussi, et vous avez ouvert 30 onglets.Est - ce trop ? Malheureusement, oui.Mais on peut vous aider.Le nombre parfait d 'onglets ouvert est de 9 maximum, au delà on procrastine. Il faut évidemment éviter les réseaux sociaux.Au delà de ces points d 'utilisation, vous pouvez les couper automatiquement grace à :",
    link: "https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg",
    linkText: "The Great Suspender"
},
{
    url: "../../assets/articles/bio.svg",
    titre: "Avoir un site éco-conçu",
    description: "La lourdeur des pages web a augmenté considérablement en quelques années",
    modalText: "Le poids moyen des pages web a augmenté de 29, 5 % pour le poids en desktop à 1, 72 Mo et de 93.7 % pour le poids en mobile à 1, 56 Mo entre 2015 et 2018. On a envoyé apollo 11 sur la Lune avec la capacité de calcli d 'une carte SIM (72Ko). Toute l 'approche d'OpenCyLife est orienté dans ce sens avec le partenariat de Green.it pour un web plus sobre.",
    link: "https://www.greenit.fr/2019/05/07/ecoconception-web-les-115-bonnes-pratiques-3eme-edition/",
    linkText: "115 bonnes pratiques de l 'écoconception"
},
{
    url: "../../assets/articles/youtube.svg",
    titre: "Limiter l'utilisation des vidéos",
    description: "Aujourd 'hui, la vidéo représente 80% d'internet",
    modalText: "Les vidéos représentent 80 % du flux internet mondial.Si vous avez votre site, ne les utilser qu 'en cas de vrai besoin. Pour votre utilisation quotidienne d'internet, essayez de couper les lancements automatiques(disponible sur tweeter et facebook).Si vous regardez des vidéos, pensez toujours à régler la qualité à votre besoin et à la tailel de votre écran.",
    link: "https://theshiftproject.org/article/climat-insoutenable-usage-video/",
    linkText: "Rapport mondial sur les vidéos"
},
{
    url: "../../assets/articles/laptop.svg",
    titre: "Acheter reconditionné",
    description: "A-t 'on vraiment toujours besoin de neuf ?",
    modalText: 'Le renouvellement moyen pour un smartphone est de 2 ans en France et pour un ordinateur, nous passons à 4 ans pour un portable et 5 ans pour un fixe.Le recyclage est très en retard et cela coûte des ressources non renouvelable (voir notre article sur les terres rares). Un ordinateur un peu vieux ou un smartphone fonctionnel sont toujours revendables et de nombreux sites vendent aujourd\'\hui des appareils parfaitements reconditionnés avec des garanties.',
    link: "https://www.backmarket.fr/",
    linkText: "L'exemple de Backmarket"
},
{
    url: "../../assets/articles/engineer.svg",
    titre: "Mises à jour",
    description: "Ce n'est pas automatique",
    modalText: "Les mises à jour automatiques consomment énormément de données.La plupart du temps ce sont des correctifs de bug mineur.Coupez les MAJ automatiques et choisissez quand vous le faites.Il est inutile de mettre à jour une appli de voyage entre 2 voyages, une appli de sport si vous avez arrêté.Selies les applis bancaires ou comportant des risques de sécurité sont à garder à jour.Il y a 15 ans le pack office faisait 750 Mo, aujourd 'hui il remplit les mêmes tâches pour 3,6 Go...",
    link: "",
    linkText: ""
},
{
    url: "../../assets/articles/candle-light.svg",
    titre: "Faites un break",
    description: "Parfois, on oublie l'important",
    modalText: "C 'est un étrange conseil sur la question numérique mais demandez vous depuis combien de jours d'affilé vous n 'avez pas fait autre chose qu'enchainer des séries ou des films ? Votre couple est une base solide et importante de votre vie.On court, on se néglige et quand on est ensemble, on regarde dans la même direction : Netflix!Essayez de vous poser, au moins une fois par semaine pour se demandeer comment va l 'autre et revenir sur ce que vous avez oublié de lui. Ne serais ce que pour gérer le quotidien, les RDV ou les enfants.dire.",
    link: "",
    linkText: ""
},
{
    url: "../../assets/articles/recycle-bin.svg",
    titre: "Recycler ses appareils",
    description: "Parce que les déchets électroniques débordent",
    modalText: "Aujourd 'hui 15% des appareils électronique seulement sont envoyés au recyclage. On considère que chaque français produit en moyenne par an (2016) 21.3Kg de déchèts electroniques. Ce chiffre augmente de 3 à 5 % par an. Depuis 2005, ces déchets(DEEE: déchets d’ équipements électriques et électroniques) qui contiennent des métaux précieux et des substances toxiques, doivent faire l 'objet d'une dépollution et d 'un recyclage spécialisés. Une écoparticipation payée à l 'achat des appareils électriques et électroniques finance ces opérations de traitement des déchets.",
    link: "",
    linkText: ""
}, {
    url: "../../assets/articles/star.svg",
    titre: "On favorise les favoris",
    description: "On économise beaucoup à enregistrer ses favoris",
    modalText: "3, 3 milliards.C’ est le nombre de requêtes effectuées chaque jour sur Google.Pourtant, selon l’ ADEME, aller directement sur un site, soit en tapant son adresse, soit en l’ ayant enregistré comme« favori» divise par 4 les émissions de GES!",
    link: "",
    linkText: ""
}, {
    url: "../../assets/articles/television.svg",
    titre: "Privilégier la TNT",
    description: "Pourquoi regarder la TV via la box en direct ?",
    modalText: "Privilégier la TNT plutôt que l’ ADSL pour regarder la TV.Nous en avons déjà parlé avec l 'impact des vidéos, pourquoi regarder la télévision en téléchargeant du contenu alors que les ondes HD éxistent ? À l’ancienne, on délaisse l’ordi et on se remet devant le journal de Claire Chazal(sans Claire Chazal) ou on prend un bouquin.",
    link: "",
    linkText: ""
},
{
    url: "../../assets/articles/notification.svg",
    titre: "Désactiver le plus de notifications",
    description: "Elles sont créées pour capter notre attention",
    modalText: "Désactiver le plus de notifications  possibles et retrouver ainsi du temps de cerveau disponible et surtout  de l'attention pour les autres ou de la concentration sur votre travail. Il faut se rappeler qu'elles sont créées par des scientifiques en neuromarketing et pas par des développeurs.",
    link: "",
    linkText: ""
},
{
    url: "../../assets/articles/folder.svg",
    titre: "Nettoyer régulièrement ses données",
    description: "Les données créent de l'obsolescence",
    modalText: "Il faut nettoyer régulièrement ses données et les applications sur le smartphone. Je me pose des questions. De quoi je me sers, qu'est ce qui vaut la peine d'être conservé ?",
    modalText2: "Idem pour ordinateurs,  tablettes, photos,... Mes données sont un nid à obsolescence. Elles remplissent l'espace, me font perdre du temps, ralentissent mon matériel."
},
{
    url: "../../assets/articles/envelope.svg",
    titre: "Bonne pratiques mail",
    description: "La part du colibri, la part du monstre",
    modalText: "Vous le savez, votre boite mail est probablement stockée à 1000 ou 10000 km, elle pèse lourd dans un data center queslques part. Quelques bonnes pratique pour ranger comme Marie Kondo",
    modalText2:"- Envoyer le moins de courriels possible au moins d’ interlocuteurs possible ",
    modalText3:"- Choisir un format texte plutôt que HTML",
    modalText4:"- Limiter le contenu au strict nécessaire(supprimer les signatures graphiques)",
    modalText5:"- Eviter les pièces jointes",
    modalText6:"- Abandonner le répondre à tous, surtout en automatique",
    modalText7:"- Ne pas imprimer",
    modalText8:"- Se désabonner des newsletters",
    modalText9:"- Eviter la 4 G",
    link: "https://www.greenit.fr/2018/09/11/reduire-limpact-de-e-mails/",
    linkText: "Green.it"
},
{
    url: "../../assets/articles/linux.svg",
    titre: "Privilégier des systèmes libres",
    description: "Faire tourner un ordinateur 10 ans ou plus",
    modalText: "Privilégier des systèmes libres dont le but n'est pas d'augmenter la taille de leur logiciel et leurs prix : Au revoir Windows et bonjour Linux, au revoir Microsoft Office bonjour Libre office.<br>Ces systèmes sont si légers que l'on voit des ordinateurs tourner 10 ou 11 ans",
    link: "https://ubuntu-fr.org/",
    linkText: "Ubuntu"
},
{
    url: "../../assets/articles/commission.svg",
    titre: "Besoin d'acheter",
    description: "En ai-je vraiment besoin aujourd'hui ?",
    modalText: "Réfléchissez avant d'acheter ou d'offrir un appareil informatique ou électronique. Demandez-vous si vous en avez vraiment besoin ? Cette tablette en plus de ma TV, de ma console, de mon(es) smartphone(s), de(s) mon(es) PC(s). Aujourd’hui, l’impact numéro un du numérique ce sont les objets numérique qui deviennent trop souvent des DEEE (déchet d’équipements électriques et électroniques )<br>Demandez vous déjà s'ils peuvent être réparés !",
    link: "https://ecoinfo.cnrs.fr/deee-ou-e-dechets/",
    linkText: "Le CNRS nous en parle"
},
{
    url: "../../assets/articles/book.svg",
    titre: "Formez vous !",
    description: "Le numérique ne peut plus rester un inconnu compte tenu du temps que nous y passons",
    modalText: "Formez-vous à l'utilisation du numérique. Plus on est formé mieux on maîtrise ces outils et mieux on sait comment limiter les mauvaises pratiques.<br>Aujourd'hui, on n'a jamais aussi peu compris comment fonctionne le numérique.<br>Selon une étude sur 1000 points, les salariés français ont obtenu 291 et les digital natives 275 points. On sait envoyer un snap mais on a aucune d’idée de son poids par rapport à un SMS<br><small>sondage OpinionWay et le cabinet de conseil en stratégie SBT Human(s) Matter</small>",
    link: "https://www.open-cy.life/",
    linkText: "OpenCyLife"
},
{
    url: "../../assets/articles/picture.svg",
    titre: "Revoir son image",
    description: "Une photo non compressée peut peser comme une petite vidéo",
    modalText: "Une image peut faire toute la différence sur un site internet. Voyez déjà si vous en avez besoin avant de la poster. Sinon voyez les exemples suivant : pour un appareil 20 mégapixels",
    modalText2:"- un fichier brut de capteur type RAW : eviron 35Mo",
    modalText3:"- le Jpeg qui en découle Jpeg : environ 8Mo",
    modalText4:"- Un Jpeg compressé à la taille de votre écran : environ 1Mo",
    modalText5:"- La même photo compressée en WebP : environ 200Ko soit 175 fois plus petite",
    modalText6:"On peut aller encore plus loin mais déjà, en vrai, ça donne quoi ?",
    url1:"../../../assets/articles/grande main.jpg",
    urlText1:"Jpeg de 113ko",
    url2:"../../../assets/articles/grande main.webp",
    urlText2:"Webp de 34ko",
    link: "https://images.guide/",
    linkText: "un tutoriel complet sur les images"
}
];
  constructor() { }

  ngOnInit() {
  }

}
