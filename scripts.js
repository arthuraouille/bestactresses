$(document).ready(function() {
   
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;
    var openedIndex = 2;
    
    var init = function() {
        bindEvents();
        
        if ( validIndex(openedIndex) ) {
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
        
    };
    
    
    var bindEvents = function(){   
    
        // Clic sur les images
        $mainMenuItems.children(".images").click(function(){
           
            // Déterminer l'index de l'élément cliqué ($(this)) 
            var newIndex = $(this).parent().index();
            
            // Check and animate
            checkAndAnimateItem(newIndex);
            
        });
        
        // Clic sur les boutons
        $(".button").click(function(){
            
            // Déterminer l'index de l'élément cliqué ($(this)) 
            var newIndex = $(this).index();
            
            // Check and animate
            checkAndAnimateItem(newIndex);
            
        })
        
        // Hovering des buttons
        $(".button").hover(
            function() {
                $(this).addClass("hovered");
            },
            function() {
                $(this).removeClass("hovered");                
            }            
        );
    };
    
    var validIndex = function(openedIndex) {
        return openedIndex > -1 && openedIndex < totalMainMenuItems;
    };
    
    var animateItem = function($item, toOpen, speed) {
            
        // Retrouver l'image couleur concernée
        var $colorImage = $item.find(".color");
        
        // Définir des paramètres
        var itemParam = toOpen ? {width: "420px"} : {width: "140px"};
        var colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};


        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
        
    };
    
    var checkAndAnimateItem = function(index) {
        
        // Retrouver le <li> concerné
        var $item = $mainMenuItems.eq(index);

        // Vérifier le statut de l'index
        if ( index === openedIndex ) {
            // fermer
            animateItem($mainMenuItems.eq(index), false, 250);
            openedIndex = -1
        } else {

            if ( validIndex(index) ) {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = index;
                animateItem($mainMenuItems.eq(index), true, 250);
            }
        }

    }
    
    init();
    
    
});