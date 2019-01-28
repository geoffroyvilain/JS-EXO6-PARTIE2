/* correction Exercice
function changeImage(){

}

function resetImage(){

}
*/

// Déclaration de ma fonction changeImg().
function changeImage(object,ev){
  //On récupère les images et on les assigne a une variable.
  var image1 = document.getElementById('image1');
  var image2 = document.getElementById('image2');
  var image3 = document.getElementById('image3');
  var image4 = document.getElementById('image4');
  var image5 = document.getElementById('image5');
  //On assigne un nouvel src à l'image sous la souris.
  if(ev == 'image1'){
    image1.setAttribute('src', 'assets/image/image1_2.jpg');
  }
  if(ev == 'image2'){
    image2.setAttribute('src', 'assets/image/image2_2.jpg');
  }
  if(ev == 'image3'){
    image3.setAttribute('src', 'assets/image/image3_2.jpg');
  }
  if(ev == 'image4'){
    image4.setAttribute('src', 'assets/image/image4_2.jpg');
  }
  if(ev == 'image5'){
    image5.setAttribute('src', 'assets/image/image5_2.jpg');
  }
}
// Déclaration de ma fonction changeImageOrigin.
function resetImage(object,ev){

  //On remet le src de base lorsque la souris sort de l'image.
  if(ev == 'image1'){
    image1.setAttribute('src', 'assets/image/image1.jpg');
  }
  if(ev == 'image2'){
    image2.setAttribute('src', 'assets/image/image2.jpg');
  }
  if(ev == 'image3'){
    image3.setAttribute('src', 'assets/image/image3.jpg');
  }
  if(ev == 'image4'){
    image4.setAttribute('src', 'assets/image/image4.jpg');
  }
  if(ev == 'image5'){
    image5.setAttribute('src', 'assets/image/image5.jpg');
  }
}


/*
//Affecte la nouvelle image lorsque la souris survole l'élément
function changeImage(element) {
image1 = element.setAttribute('src', src='assets/image/image1_2.jpg');
image2 = element.setAttribute('src', src='assets/image/image2_2.jpg');
}
//Affecte l'image de départ lorsque la souris ne survole plus l'élément
function changeImageOrigin(element) {
image1 = element.setAttribute('src', src='assets/image/image1.jpg');
image2 = element.setAttribute('src', src='assets/image/image2.jpg');

}
*/
