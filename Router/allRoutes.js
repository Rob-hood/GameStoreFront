import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/signin", "Se connecter", "/pages/signin.html"),
    new Route("/account", "Mon espace", "/pages/account.html"),
    new Route("/editPassword", "Changement de mot de passe", "/pages/editPassword.html"),
    new Route("/games", "Nos jeux", "/pages/games.html"),
    new Route("/godofwar", "God of war", "/pages/games/godofwar.html"),
    new Route("/spiderman", "Spider-man 2", "/pages/games/spiderman.html"),
    new Route("/payday", "Payday 3", "/pages/games/payday.html"),
    new Route("/forzamotorsport", "Forza Motorsport", "/pages/games/forzamotorsport.html"),
    new Route("/grandtheftauto", "Grand theft auto 5", "/pages/games/grandtheftauto.html"),
    new Route("/reddeadredemption", "Red dead redemption 2", "/pages/games/reddeadredemption.html"),
    new Route("/forzahorizon", "Forza horizon 5", "/pages/games/forzahorizon.html"),
    new Route("/finalfantasy", "Final fantasy XII", "/pages/games/finalfantasy.html"),
    new Route("/helldivers", "Helldivers 2", "/pages/games/helldivers.html"),
    new Route("/diablo", "Diablo IV", "/pages/games/diablo.html"),
    new Route("/minecraft", "Minecraft", "/pages/games/minecraft.html"),
    new Route("/thewitcher", "The witcher 3", "/pages/games/thewitcher.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gamestore";