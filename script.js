const button = document.getElementById('toggleButton');
const content = document.getElementById('content');

let isContentVisible = true;
    
button.addEventListener('click', function(){ 
  if (isContentVisible) {
    //content.style.display = 'none';
    content.style.height = '0px' ;
    content.style.animation = 'fadeOut 2s ease-in-out';
    isContentVisible = false;
  }
  else {
    //content.style.display = 'block';
    content.style.height = '400px' ;
    content.style.animation = 'fadeIn 2s ease-in-out';
    isContentVisible = true;
  };
}
);