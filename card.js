/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function MakeCardFw() {
    
    var app ={};
    
    var _$ = function(ele) {
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
        
        var card = _$(params.id);
        
        var imgSpan = document.createElement("img");
        imgSpan.src = params.image;
        imgSpan.height = "400";
        
        var textSpan = document.createElement("span");
        textSpan.innerHTML = "<h3>" + params.title + "</h3><p>" + params.desc + "</p>";
        
        card.appendChild(imgSpan);
        //card.appendChild(textSpan);
        
        $(document).ready(function () {
            var overlay = $("<div class='overlay'>" + textSpan.innerHTML + "</div>");
            $(card).mouseenter(function () {
                $(this).append($(overlay.show()));
            });
            $(card).mouseleave(function () {
                overlay.hide();
            });
        });        
    };
    
    return app;
}


