/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MakeCardFw() {
    
    var app ={};
    
    var $ = function(ele) {
        return document.getElementById(ele);
    };
    
    app.MakeCard = function(params) {
        if (!params || !params.id) {
            alert("You must provide an object with an id property.");
            return;
        }
        
        params.image = params.image || "img_avatar.png";
        params.title = params.title || "Default Title";
        params.desc = params.desc || "Default Description";
        
        var card = document.getElementById(params.id);
        
        var imgSpan = document.createElement("img");
        imgSpan.src = params.image;
        imgSpan.height = "400";
        imgSpan.width = "400";
        
        var textSpan = document.createElement("span");
        textSpan.innerHTML = "<div class='container'><h3>" + params.title + "</h3><p>" + params.desc + "</p></div>";
        
        card.appendChild(imgSpan);
        card.appendChild(textSpan);        
    };
    
    return app;
}


