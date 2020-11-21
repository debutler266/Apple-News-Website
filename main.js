// Select menu button

document.querySelector('.menu-btn').addEventListener
('click', () => document.querySelector('.main-menu')
.classList.toggle('show'));


// When menu btn is selected, want to wait for 'click' (event listener), then run the function
// to select the "main-menu" and toggle 'show' class.

//In css goes from -500px position to -20px defined in show class
