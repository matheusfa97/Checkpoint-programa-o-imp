function microondas(tempo,comida){
if(comida == "pipoca"){
   return pipoca(tempo);
}
if(comida == "macarrao"){
    return macarrao(tempo);

}
if(comida == "carne"){
    return carne(tempo);}

if(comida == "feijao"){
    return feijao(tempo);
        
    }
    
    
if(comida == "brigadeiro"){
      return  brigadeiro(tempo);
}
return console.log("comida inexistente");
}



function pipoca(tempo =10){
    verificatempo(tempo,10)
    return console.log("Prato pronto, bom apetite!!")
}
function macarrao(tempo =8){

    verificatempo(tempo,8)
    return console.log("Prato pronto, bom apetite!!")
}
function carne(tempo =15){
    verificatempo(tempo,15)
    return console.log("Prato pronto, bom apetite!!")
}
function feijao(tempo =12){
    verificatempo(tempo,12)
    return console.log("Prato pronto, bom apetite!!")
}
function brigadeiro( tempo =8){
    verificatempo(tempo,8)
    return console.log("Prato pronto, bom apetite!!")
}

function verificatempo(tempo, tempopadrao){
    if(tempo >tempopadrao*3){
        return console.log("kabum")
    }
    if(tempo >tempopadrao*2){
         return console.log("comida queimou")
     }
    if(tempo <tempopadrao){
        return console.log("tempo insuficiente")
    }
    
   
    
}

microondas(25, "pipoca");
microondas(10, "macarrao");
microondas(400, "carne");
microondas(2, "brigadeiro");
microondas(50, "arroz")

