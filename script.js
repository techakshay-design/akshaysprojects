const themetogglebutton= document.getElementById('theme-toggle');

function toggleTheme(){

    const currentTheme=document.body.classList.contains('dark-theme')?'dark':'light';

    document.body.classList.toggle('dark-theme');

    const newTheme=currentTheme==='light'?'dark':'light';
    localStorage.setItem('theme',newTheme);

}

themetogglebutton.addEventListener('click',toggleTheme);

const savedTheme=localStorage.getItem('theme');

 if(savedTheme){
    document.body.classList.add(savedTheme==='dark'?'dark-theme':'light-theme');
 }