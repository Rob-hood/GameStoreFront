import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin", "Se connecter", "/pages/signin.html"),
    new Route("/account", "Mon espace", "/pages/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gamestore";