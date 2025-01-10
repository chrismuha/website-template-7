var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
})


//Add reviews here
const reviews = [
    {
          id: 0,
          name: '',
          star: '★★★★★',
          loc: 'from Google Reviews',
        // img: 'https://lh3.googleusercontent.com/a-/ALV-UjV70LyuEStvLQ7z3oSwyJpmI1VUDK0eDxnVgCXG3jgJfva2EQs=s120-c-rp-mo-br100',
          text: '',
  
      },  
  ];
  
  // select items
  
// const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const star = document.getElementById('star');
  const info = document.getElementById('info');
  const loc = document.getElementById('loc');
  
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  // set starting item 
  
  let currentItem = 0;
  
  // load initial item 
  window.addEventListener('DOMContentLoaded', function() {
      showPerson();
  });
  
  // show person based on item 
  
  function showPerson() {
      const item =  reviews[currentItem];
    //   img.src = item.img;
      author.textContent = item.name;
      star.textContent = item.star;
      info.textContent = item.text;
      loc.textContent = item.loc;
  }
  
  // show next person 
  
  nextBtn.addEventListener('click', function(){
      currentItem++;
      if (currentItem > reviews.length - 1){
          currentItem = 0;
      }
      showPerson(currentItem);
  });
  // show prev person 
  prevBtn.addEventListener('click', function(){
      currentItem--;
     if (currentItem < 0){
      currentItem = reviews.length -1;
     }
      
      showPerson(currentItem);
  });
  
  // show random person
  
  randomBtn.addEventListener('click',  function(){
      currentItem = Math.floor(Math.random() * reviews.length);
      console.log(currentItem);
      showPerson();
  });

