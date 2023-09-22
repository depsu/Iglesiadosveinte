function frances() {

   document.querySelector(".nav1").innerHTML = "Nous";
   document.querySelector(".nav2").innerHTML = "Professionnels";
   document.querySelector(".nav3").innerHTML = "Contact";
   document.querySelector(".nav4").innerHTML = "Dirigeants";
   document.querySelector(".nav5").innerHTML = "Des questions";
   document.querySelector(".nav6").innerHTML = "Des dons";

   document.querySelector(".tituloPrincipal").innerHTML = "Mission Église Évangélique de Jésus-Christ Éphésiens Deux Vingt International";
   document.querySelector(".tituloSecundario").innerHTML = "Bienvenue à la Mission Internationale de l'Église Évangélique de Jésus-Christ Éphésiens Deux Vingt ! Nous sommes une communauté de foi au Chili qui célèbre la diversité et partage l'héritage spirituel d'Haïti. Nous vous invitons à nous rejoindre dans le culte, la croissance spirituelle et le service communautaire. Bienvenue dans notre maison de foi !";
   document.querySelector(".tNuestraAyuda").innerHTML = "Notre aide";

   document.querySelector(".uniendoCorazones").innerHTML = "Unir les cœurs pour une noble cause";
   document.querySelector(".uniendoCorazonesText").innerHTML = "La mission de l'Église Évangélique de Jésus-Christ International est de recevoir des dons pour aider les enfants dans leurs études et les sans-abri. Notre vision est d'être une lueur d'espoir dans la communauté, en offrant des opportunités éducatives aux enfants défavorisés et un soutien essentiel à ceux qui n'ont pas de chez-soi. Votre générosité est la force motrice de notre engagement à faire une différence significative au nom de Jésus-Christ. Ensemble, nous pouvons transformer des vies et renforcer notre communauté.";
   document.querySelector(".conectateConNosotros").innerHTML = "Contactez-nous";


   document.querySelector(".tnombre").innerHTML = "nom";
   document.querySelector(".tcorreo").innerHTML = "mail";
   document.querySelector(".tcomentario").innerHTML = "commentaire";
   document.querySelector(".tenviar").innerHTML = "Envoyer";
   
   document.querySelector(".tLideres").innerHTML = "Nos dirigeants";
   document.querySelector(".textLideres").innerHTML = "Nos dirigeants Nos professionnels s’engagent à réaliser leur travail avec la plus grande compétence professionnelle et humaine.";


   document.querySelector(".preguntaFrecuentes").innerHTML = "Questions fréquentes";

   document.querySelector(".quienesSomos").innerHTML = "Qui sommes nous?";
   
   document.querySelector(".somosUnaComunidad").innerHTML = "Nous sommes une communauté de foi au Chili qui célèbre la diversité et partage l'héritage spirituel d'Haïti.";

   document.querySelector(".cualMision").innerHTML = "Quelle est notre mission?";


   
   document.querySelector(".nuestraMision").innerHTML = "Our mission is to contribute to improving the quality of life of children, adolescents, adults and their families. We want to instill confidence and provide support to all families";
   
   document.querySelector(".dondeEstamos").innerHTML = "Où est-ce que nous nous sommes rencontrés?";
   
   document.querySelector(".enWhatsapp").innerHTML = "Sur WhatsApp +56 9 7562 2619 ou formulaire de contact par email saintionord@gmail.com, les localisations de nos églises sont les suivantes : Adresse Chili, La sisterna : Calle jose ureta 408 / Adresse Haïti, Gonaïves ruelle fleurensai";


   document.querySelector(".comoDonamos").innerHTML = "Comment pouvons-nous faire un don ?";
   document.querySelector(".tAtraves").innerHTML = "Par virements bancaires sur le compte suivant : / Banco Falabella / Compte courant / Rut 25.224.472-7 / Numéro de compte : 15270107061";


   document.querySelector(".donacionesText").innerHTML = "des dons";


}

function ingles() {

    document.querySelector(".nav1").innerHTML = "Us";
    document.querySelector(".nav2").innerHTML = "Professionals";
    document.querySelector(".nav3").innerHTML = "Contact";
    document.querySelector(".nav4").innerHTML = "Leaders";
    document.querySelector(".nav5").innerHTML = "Questions";
    document.querySelector(".nav6").innerHTML = "Donations";

    document.querySelector(".tituloPrincipal").innerHTML = "Mission Evangelical Church of Jesus Christ Ephesians Two Twenty International";
    document.querySelector(".tituloSecundario").innerHTML = "Welcome to the Evangelical Church of Jesus Christ Ephesians Two Twenty International Mission! Are a community of faith in Chile that celebrates diversity and shares the spiritual heritage of Haiti. We invite you to join us in worship, spiritual growth, and community service. Welcome to our house of faith!";
    document.querySelector(".tNuestraAyuda").innerHTML = "Our help";

    document.querySelector(".uniendoCorazones").innerHTML = "Uniting Hearts for a noble cause";
    document.querySelector(".uniendoCorazonesText").innerHTML = "The mission of the Evangelical Church of Jesus Christ International is to receive donations to help children in their studies and the homeless. Our vision is to be a beacon of hope in the community, providing educational opportunities to disadvantaged children and essential support to those without a place to call home. Your generosity is the driving force behind our commitment to making a meaningful difference in the name of Jesus Christ. Together, we can transform lives and strengthen our community.";
    document.querySelector(".conectateConNosotros").innerHTML = "Contact us";

    document.querySelector(".tnombre").innerHTML = "name";
    document.querySelector(".tcorreo").innerHTML = "mail";
    document.querySelector(".tcomentario").innerHTML = "comment";
    document.querySelector(".tenviar").innerHTML = "send";


    document.querySelector(".tLideres").innerHTML = "Our Leaders";
    document.querySelector(".textLideres").innerHTML = "Our professionals are committed to carrying out their work with the greatest professional and human competence.";

    document.querySelector(".preguntaFrecuentes").innerHTML = "Frequent questions";

    document.querySelector(".quienesSomos").innerHTML = "About us?";

    document.querySelector(".somosUnaComunidad").innerHTML = "We are a community of faith in Chile that celebrates diversity and shares the spiritual heritage of Haiti.";

    document.querySelector(".cualMision").innerHTML = "What is our mission?";

    
    document.querySelector(".nuestraMision").innerHTML = "Our mission is to contribute to improving the quality of life of children, adolescents, adults and their families. We want to instill confidence and provide support to all families";
    
    document.querySelector(".dondeEstamos").innerHTML = "Where do we meet?";
    
    document.querySelector(".enWhatsapp").innerHTML = "On WhatsApp +56 9 7562 2619 or contact form via email saintionord@gmail.com, the locations of our churches are as follows: Address Chile, La sisterna: Calle jose ureta 408 / Address Haiti, Gonaives ruelle fleurensai";

    document.querySelector(".comoDonamos").innerHTML = "How can we donate?";
    document.querySelector(".tAtraves").innerHTML = "Through bank transfers to the following account: / Banco Falabella / Current Account / Rut 25.224.472-7 / Account number: 15270107061";


    document.querySelector(".donacionesText").innerHTML = "donations";
 

}
 


/*carrusel especialistas*/

new Splide(".splide-especialistas", {
    perPage: 4,
    perMove: 1,
    breakpoints: {
        1232: {
            perPage: 3,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
        
        1030: {
            perPage: 2,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
        750: {
            perPage: 1,
            drag: true,
            type: "loop",
            autoplay: true,
            padding: {
                right: "0",
                left: "0",
            },
        },
    },
    type: "loop",
    pagination: false,
    gap: 0,
    arrows: true,
    autoplay: false,
    drag: true,
}).mount();



