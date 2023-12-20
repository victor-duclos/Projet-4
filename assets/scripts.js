const imagesData = [
    { src: 'assets/images/aaron-paul-wnX-fXzB6Cw-unsplash.jpg-small.webp', dataset: {galleryTag:'Concert' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo concert'},
    { src: 'assets/images/ali-morshedlou-WMD64tMfc4k-unsplash.jpg-small.webp', dataset: {galleryTag:'Entreprises' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo entreprise'},
    { src: 'assets/images/jason-goodman-tHO1_OuKbg0-unsplash.jpg-small.webp', dataset: {galleryTag:'Entreprises' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo entreprise'},
    { src: 'assets/images/hannah-busing-RvF2R_qMpRk-unsplash.jpg-small.webp', dataset: {galleryTag:'Mariages' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo mariage'},
    { src: 'assets/images/ade-tunji-rVkhWWZFAtQ-unsplash.jpg-small.webp', dataset: {galleryTag:'Portrait' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo portrait'},
    { src: 'assets/images/jakob-owens-SiniLJkXhMc-unsplash.jpg-small.webp', dataset: {galleryTag:'Mariages' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo mariage'},
    { src: 'assets/images/nino-van-prattenburg--443cl1uR_8-unsplash.jpg-small.webp', dataset: {galleryTag:'Portrait' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo portrait'},
    { src: 'assets/images/austin-neill-hgO1wFPXl3I-unsplash.jpg-small.webp', dataset: {galleryTag:'Concert' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo concert'},
    { src: 'assets/images/mateus-campos-felipe-Fsgzm8N0hIY-unsplash.jpg-small.webp', dataset: {galleryTag:'Entreprises' , bsToggle: 'modal', bsTarget: '#exampleModalCenter'}, classList: 'gallery-item' , alt:'photo entreprise'},


    
  ];

let gallery= document.querySelector(".gallery-items-row");
let modal = document.querySelector(".modal-body");
let prevButton = document.querySelector(".mg-prev");
let nextButton = document.querySelector(".mg-next");

console.log(imagesData)


function genererImages(categorie) {
  gallery.innerHTML = ''; 

  imagesData.forEach(image => {
    if (categorie === 'all' || categorie === image.dataset.galleryTag) {
      let conteneur = document.createElement("div");
      conteneur.className = "item-column mb-4 col-12 col-sm-4 col-lg-4 col-xl-4";

      let img = document.createElement("img");
      img.src = image.src;
      img.classList = image.classList;
      img.dataset.galleryTag = image.dataset.galleryTag;
      img.dataset.bsTarget = image.dataset.bsTarget;
      img.dataset.bsToggle = image.dataset.bsToggle;
      img.alt= image.alt;
      gallery.appendChild(conteneur);
      conteneur.appendChild(img);
      
    }
  });
}

let categorie = document.querySelectorAll(".nav-link");

categorie.forEach(filtre => {
  filtre.addEventListener("click", function () {
    let monFiltre = filtre.dataset.imagesToggle;
    console.log(monFiltre);
    genererImages(monFiltre);
    categorie.forEach(classe => {
      classe.classList.remove("active")
    });
    filtre.classList.add("active")
  });

});

genererImages('all');


function genererModal(){
  gallery.addEventListener('click' , function(event){
  let modalImage= document.createElement("img");
  modal.innerHTML='';
  modalImage.src=event.target.src;
  modal.appendChild(modalImage);
  modalImage.classList.add("gallery-item");
  modalImage.style.position="unset";
  modalImage.alt= event.target.alt;
  let images=document.querySelectorAll(".gallery-items-row .gallery-item");
  let index= Array.from(images).indexOf(event.target)
  console.log('Indice du bouton cliqué :', index);
  
  prevButton.addEventListener('click' , function(){
    let images=document.querySelectorAll(".gallery .gallery-item")
    index=(index -1 +images.length) % images.length;
    let modalImage= document.createElement("img");
    modal.innerHTML='';
    modalImage.src= images[index].src;
    modalImage.classList.add("gallery-item");
    modalImage.style.position="unset";
    modal.appendChild(modalImage);
  })

  nextButton.addEventListener("click", function () {
    index = (index + 1) % images.length;
    modalImage= document.createElement("img");
    modal.innerHTML='';
    modalImage.src= images[index].src;
    modalImage.classList.add("gallery-item");
    modalImage.style.position="unset";
    modal.appendChild(modalImage);
    
  });
  
})
}
genererModal()