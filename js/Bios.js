
class Bio {

  constructor(bio){

  this.bio=bio;
  this.bioButton=this.bio.querySelector('.bioButton');
  this.bioButton.innerText='Bio';
  this.bioButton.addEventListener('click', () => {this.expandBio()});
 
 }
 
  // toggle to expand or hide the bio

  expandBio() {
    // alert('we clicked a link!');
  this.bio.classList.toggle('bio-text');  
  // console.log('we clicked a link!');

   }


}





let bios = document.querySelectorAll('.bio').forEach( bio => {
    new Bio(bio);
  });