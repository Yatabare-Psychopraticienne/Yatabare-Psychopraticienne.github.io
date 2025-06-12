const synth = window.speechSynthesis;
const utterance = new SpeechSynthesisUtterance("Bienvenu, Je suis heureuse que vous soyer ici. Si vous êtes en train de lire ces lignes c'est peut être que quelque chose en wous cherche du sens, de la paix, ou simplement un espace pour souffler,déposer et repartir plus léger. Je m’appelle Sadio,Psychopraticienne en relation d’aide. J’accompagne celles et ceux qui souhaitent mieux se comprendre, se reconnecter à eux-mêmes, à leur paix intérieure et à leur puissance. Moi aussi, j’ai été bousculée par la vie. Ces expériences m’ont invitée à changer, à me recentrer. C’est ce chemin personnel, fait de prises de conscience, de libérations et de transformations, m’a menée à faire de l’accompagnement ma mission.");
utterance.rate = 1; // Vitesse de la parole
utterance.pitch = 50; // Hauteur de la voix
utterance.volume = 100; // Volume sonore
synth.speak(utterance);
