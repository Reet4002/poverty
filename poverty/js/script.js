let head = document.getElementById('h11');
let title = document.querySelector('.title');
// function getRandomColor() {
//   var letters = '0123456789ABCDEF';
//   var color = '#';
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }
console.log(title);

head.addEventListener("mousemove", function( event ) {
    // highlight the mouseover target
    // event.target.style.color = "orange";
    // console.log('hello');
    head.innerText='Poverty';
    head.style.fontSize = '300px';
    head.style.textShadow='-6px 0px grey'
    // title.style.backgroundColor='#65000b';
    // reset the color after a short delay
  }, false);
head.addEventListener("mouseout", function( event ) {
    // highlight the mouseover target
    // event.target.style.color = "orange";
    // console.log('hello');
    head.innerText='Welcome To Our Website';
    head.style.fontSize = '40px';
    head.style.textShadow='none';

    
    // reset the color after a short delay
  }, false);
// title.addEventListener("mouseout", function( event ) {
    // highlight the mouseover target
    // event.target.style.color = "orange";
    // console.log('hello');
    // title.innerText='Welcome To Our Website';
    // title.style.fontSize = '40px';
    // head.style.textShadow='none';

    
    // reset the color after a short delay
  // }, false);
// console.log(head);

// head.addEventListener('mousemove',function() {
//   head.style.backgroundColor = getRandomColor();
// })