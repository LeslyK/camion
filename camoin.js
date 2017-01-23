var Vehicule = function(poids, vitesse) {  
 this.poids = poids; 
 this.vitesse = vitesse;
 this.avance = function() {console.log("vroum vroum");  
 } 
  
} 
  Bus.prototype = new Vehicule();
  Bus.prototype.constructeur = Bus;
  function Bus(poids, vitesse, nbr_passages, infoTrajet){
   this.nbr_passages=nbr_passages;
   this.infoTrajet=infoTrajet;
 }
 
 var Bus= new Bus(30, 300);
 Bus.avance();
