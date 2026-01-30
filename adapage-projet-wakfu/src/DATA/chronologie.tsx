import goultardEnfance from "../assets/Images/Goultard_Enfance.jpg";
import goultardAmour from "../assets/Images/Goultard_Amour.jpg";
import darkVlad from "../assets/Images/DarkVlad.webp";
import vlad from "../assets/Images/Vlad.jpg";
import goultardHumain from "../assets/Images/Goultard-Humain.jpg";
import tristepinGoultard from "../assets/Images/Tristepin-Goutard.webp";
import goultardEntreMort from "../assets/Images/GoultardEntrelesMort.webp";
import invasion from "../assets/Images/Invasion.webp";
import tristepinGoul from "../assets/Images/TristepinGoul.jpg";
import goulvsAdamai from "../assets/Images/goulvsAdamai.jpg";
import inglorium from "../assets/Images/Inglorium.jpg";
import retourMaison from "../assets/Images/RetourMaison.jpg";
import fin from "../assets/Images/fin.jpg"

const chronologie = [{ 
    id:0,
    titre:"Enfance",
    date:"−1111",
    descrpt:" Goultard est né en -1111 à Gisgoul et a grandi avec sa mère, Cabotine. Très tôt, il montra une force surhumaine, tuant un Taure pour sauver ses amis. Comme ce Taure était le fils de la redoutable Kriture, le village, craignant la vengeance, chassa Goultard et sa mère. Lorsque Kriture arriva, Goultard l’affronta avec une puissance phénoménale, tuant le Taure après un combat acharné. Depuis ce jour, il est reconnu comme un héros de Gisgoul.",
    image:`${goultardEnfance}`,},
    { 
    id:1,
    titre:"Amour et perte tragique",
    date:"vers −1080 à −1050",
    descrpt:"Goultard, devenu chasseur de monstres et père de quatre enfants, voit sa famille tuée par Katar. Submergé par la haine, il terrasse l’ennemi, mais est alors possédé par le démon Médoroziam, devenant corrompu et célèbre sous le nom de Goultard le Barbare.",
    image:`${goultardAmour}`,},{ 
    id:2,
    titre:"Personnalité multiple",
    date:"année 24",
    descrpt:"Lors de l’invasion des Shushus en 24, Goultard, recruté par Algathe pour protéger le village des Prunes Bleues, voit cette dernière tuée. Sa fureur donne naissance à sa personnalité maléfique, Dark Vlad, et il massacre villageois et Shushus avant de repartir avec le Dofus Émeraude. Il vainc ensuite Rushu, roi des démons, et soumet le démon Rubilax, qu’il enferme dans une épée.",
    image:`${darkVlad}`},
    {id:3,
    titre:"Vald et la rédemption",
    date:"entre 24 et l’Ère du Wakfu",
    descrpt:"Après des siècles en tant que Dark Vlad, Goultard crée une troisième personnalité bienveillante, Vald, et devient ami avec Arty, un jeune Féca-dragon. Ensemble, ils affrontent le dieu malfaisant Cornu Mollu, demi-frère de Goultard, et repoussent le retour de son ennemi Katar. Finalement, ils le vainquent en utilisant les six Dofus Primordiaux." },
    {id:4,
    titre:"Humain à nouveau",
    date:"fin de l’Ère du Wakfu",
    descrpt:"Avec les années et les aventures qu'il a vécu, Goultard retrouve petit à petit son humanité, comprenant que ce changement de caractère lui poserait problème, Médoroziam se sépare de lui et reprend possession du corps de Katar qui était revenu à la vie sous forme de zombie. Enfin débarrassé de ce démon, Goultard se retrouve a nouveau capable de ressentir des émotions aussi bien positives (comme l’amour ou l’amitié) que négatives (comme la souffrance lorsqu’il se remémore la perte de sa famille).Il affrontera de nouveau Katar, mais n’aura pas le plaisir de l’achever, car c’est le shushu Ombrage qui s’en chargera. Se retrouvant sans hôte, Médoroziam tente de reprendre possession de Goultard, mais est dévoré par un des familiers du demi-dieu",
    image:`${goultardHumain}`},
    {id:5,
    titre:"Rencontre avec Tristepin",
    date:"début de l’Ère du Wakfu",
    descrpt:"Durant l’ère du Wakfu, Goultard retourne à son village natal et découvre qu’il est devenu une attraction touristique, le Goultarention, utilisant son image à des fins commerciales. Furieux, il saccage les lieux. Sur le chemin, il rencontre le jeune Tristepin de Percedal, qui admire sa force et souhaite devenir comme lui. Touché, Goultard lui promet de revenir un jour pour le former.",
    image:`${tristepinGoultard}`},
    {id:6,
    titre:"Retour d'entre les `morts`",
    date:"quelques années plus tard",
    descrpt:"Quelques années plus tard, Goultard tient sa promesse et forme Tristepin, découvrant qu’il est la réincarnation du Dieu Iop mais choisissant de lui cacher. Estimant son élève prêt, il feint sa mort et lui confie l’épée contenant Rubilax. Quand Tristepin doute de lui-même, Goultard revient pour l’aider, lui enseignant que la force ne suffit pas, il faut aussi la confiance en soi. Ensemble, ils affrontent Rubilax, que Tristepin domine sur son terrain, libérant le Shushu et remportant son respect. Goultard lui donne ses derniers conseils et repart, confiant dans la victoire de son disciple.",
    image:`${goultardEntreMort}`},
    {id:7,
    titre:"Seconde invasion des Shushus",
    date:"non indiqué",
    descrpt:"Lors de la seconde invasion de Rushu et ses Shushus via un portail créé par Qilby, Goultard part défendre les Griffes Pourpres et sauve Tristepin. Il affronte Rushu en combat singulier et révèle qu’il est devenu le nouveau Dieu Iop. Rushu absorbe son armée pour rétablir l’équilibre, mais Goultard l’attaque dans la Shukrute. Refusant que Tristepin le suive, il l’encourage à profiter de la vie avant de sauter dans le portail avec Rushu, qui se referme derrière eux.",
    image:`${invasion}`},
    {id:8,
    titre:"La Quête des Dofus Éliatropes",
    date:"saison 3–4 Wakfu",
    descrpt:"Après avoir vaincu Rushu, Goultard révèle à Tristepin qu’il est la réincarnation du Dieu Iop. Tristepin accepte finalement ses responsabilités divines et affronte Ogrest, perdant un bras et voyant ses pouvoirs revenir à Goultard. Pour sauver le Monde des Douze d’une montagne tombant sur lui, Goultard coordonne avec Yugo un portail vers la Shukrute et transporte tout le monde, ainsi que les Dofus, en sécurité. Le Monde est sauvé, et bien que Goultard propose de restituer ses pouvoirs à Tristepin, celui-ci choisit une vie mortelle. Goultard se voit alors confier la garde des Dofus Éliatropes.",
    image:`${tristepinGoul}`},
    {id:9,
    titre:"La Fratrie des Oubliés",
    date:"saison 4 Wakfu",
    descrpt:"Quelques temps après la défaite d'Ogrest, Goultard est attaqué par Adamaï, qui a récemment rejoint la Fratrie des Oubliés, un groupe de demi-dieux désireux de se venger de leurs divins parents et responsable des plus grandes catastrophes qu'à connu le Monde des Douze.Malmené par le dragon, il reprend sa forme de Dark Vlad, mais trop affaibli il en perd vite le contrôle. Dark Vlad rejoint alors la fratrie et est assigné à l'étage du Dieu Iop. Il affronte ensuite Tristepin qui, après un combat difficile, parvient à le vaincre et à lui rendre son apparence d'origine.Goultard participe ensuite à la bataille finale contre Oropo et est ensuite envoyé dans l'Inglorium, avec tous les autres, par Echo pour contrer les plans de l'Eliotrope.",
    image:`${goulvsAdamai}`},
    {id:10,
    titre:"Dans l'Inglorium",
    date:"saison 4 Wakfu",
    descrpt:"Dans l'Inglorium, Goultard souhaite régler ses comptes avec Adamaï, mais accepte de faire une trève pour le moment. En explorant l'Inglorium pour rejoindre Yugo, Pin, le fils nouveau-né de Tristepin et Evangelyne, se retrouve possédé par Rasha, le frère de Rushu, désireux de se venger du Dieu Iop pour l'avoir enfermé pendant des millénaires.Ce dernier se révèle beaucoup plus fort que son frère, et maitrise facilement Tristepin et Goultard qui ne devront leur salut que par l'intervention d'Evangelyne qui parvient à réveiller la conscience de Pin et lui permettre de reprendre le contrôle",
    image:`${inglorium}`},
    {id:11,
    titre:"Retour à la maison",
    date:"après la saison 4",
    descrpt:"Par la suite, ils rejoignent Yugo et rencontrent la Déesse Éliatrope, qui les remercie d'avoir veillé sur son enfant mais leur demande de les laisser un moment. Tristepin propose alors à Goultard de venir vivre avec eux, ce que le demi-dieu accepte, n'ayant nulle part où aller de toute façon.À leur retour, ils découvrent que la maison de la famille Percedal a été entièrement reconstruite par Poo qui s'y est installé, croyant que le plan d'Oropo aurait réussi. Ces derniers acceptent alors sa présence parmi eux. Plus tard, Goultard se sert de Poo comme cible en racontant ses histoires à Elely.",
    image:`${retourMaison}`},
    {id:12,
    titre:"L'invasion des Nécromes",
    date:"saison 5 Wakfu",
    descrpt:"Peu après la visite de Madagaskan et le départ de Flopin, Goultard est recruté par Yugo (qu'il prit d'abord pour Oropo à cause de son apparence) pour protéger le Royaume Sadida de l'invasion des Nécromes et reçoit une grande quantité de wakfu grâce à l'Eliasphère.Durant la bataille, conformément à un plan de Yugo, Goultard, Tristepin et Joris devaient profiter de la bataille pour pénétrer dans le Nécromonde et libérer Nora, mais Tristepin décide de rester en arrière pour protéger sa famille. Une fois arrivés, Yugo occupe Toross Mordal tandis que Goultard et Joris tente de libérer Nora de sa prison de pierre, ce qui réussit.Par la suite, il aide Yugo dans son affrontement ultime contre Toross et tente de se sacrifier pour lui permettre de fuir. Mais Yugo, parvient à récupérer Goultard et le ramener dans le monde des Douze.Après la bataille, il assiste au mariage entre Yugo et Amalia.",
    image:`${fin}`}];

    export default chronologie