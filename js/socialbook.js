// sidebar
const menuItems= document .querySelectorAll('.menu-item');

//message
const messageNotification=document.querySelector('#message-notification');

const messages=document.querySelector('.messages');

const message= messages.querySelectorAll('.message');
const messageSearch=document.querySelector('#message-search');

//theme 
const theme =document.querySelector('#theme');
const themeModal =document.querySelector('.customize-theme');
const fontSizes =document.querySelectorAll('.Choose-size span');

var root =document.querySelector(':root');
const colorpalette =document.querySelectorAll('.Choose-color span');
const Bg1 =document.querySelector('.bg-1')
const Bg2 =document.querySelector('.bg-2')
const Bg3 =document.querySelector('.bg-3')
//==================side-bar===============
//remove active cls
 const changeActiveItem=()=>{
    menuItems.forEach(item=>{
        item.classList.remove('active')
    })
}
menuItems.forEach(item =>{
    item.addEventListener('click',()=>{
        changeActiveItem();
        item.classList.add('active');
        if(item.id != "notification"){
            document.querySelector('.notification-popup').
            style.display='none';
        }else{
          
            document.querySelector('.notification-popup').
            style.display='block';
        
            document.querySelector('#notification .notification-count').
            style.display='none';
        }
    })
})


//============= MESSAGES========
//=====searches ===
const searchMessage=()=>{
    const val=messageSearch.value.toLowerCase();
    message.forEach (user=>{
        let name=user.querySelector('h5').textContent.toLowerCase();
if(name.indexOf(val)!=  -1){
    user.style.display="flex";
}else{
    user.style.display="none";
}
    })
}


//search==========
messageSearch.addEventListener('keyup',searchMessage);

//message menu item is cliked========
messageNotification.addEventListener('click',()=>{
    messages.style.boxShadow='0 0 1rem var(--color-primary)';
    messageNotification.querySelector(".notification-count").style.display=
    "none";
    setTimeout(()=>{
        messages.style.boxShadow='none';
    },2000)
})
//theme display cusmisation
// opens modal
const openThemeModal = () => {
themeModal.style.display='grid';
}
// closes model
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display='none';
    }
}
//close modal
themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click',openThemeModal);


// ==========fonts========//

//remove active  class from spans or font sze slctrs
const removeSizeselector = () => {
    fontSizes.forEach(size => {
     size.classList.remove('active') ;  
    })
}

fontSizes.forEach(size => {

size.addEventListener('click', () => {
    removeSizeselector();
    let fontSize;
    size.classList.toggle('active')


    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','5.4rem');
    }else if(size.classList.contains('font-size-2')){
        fontSize = '13px';
        root.style.setProperty('----sticky-top-left','5.4rem');
        root.style.setProperty('----sticky-top-right','-7rem');
    }else if(size.classList.contains('font-size-3')){
        fontSize = '16px';
              root.style.setProperty('----sticky-top-left','-2rem');
        root.style.setProperty('----sticky-top-right','-17rem');
    }else if(size.classList.contains('font-size-4')){
        fontSize = '19px';
              root.style.setProperty('----sticky-top-left','-5rem');
        root.style.setProperty('----sticky-top-right','-25rem');
    }else if(size.classList.contains('font-size-5')){
        fontSize = '22px';
              root.style.setProperty('----sticky-top-left','-12rem');
        root.style.setProperty('----sticky-top-right','-35rem');
    }
    //change font size oh root html
    document.querySelector('html').style.fontSize = fontSize;

})
    
})
//remove active class 
const changeActiveColorClass = () => {
    colorpalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change color 

colorpalette.forEach(color =>{
   
    color.addEventListener('click', () => {
changeActiveColorClass();
let primaryHue;


        if(color.classList.contains('color-1')){
  primaryHue =252;
          
        } else if(color.classList.contains('color-2')){
      primaryHue =52;
         
        } else if(color.classList.contains('color-3')){
         primaryHue =352;
        
        } else if(color.classList.contains('color-4')){
        primaryHue= 152;
        
        } else if(color.classList.contains('color-5')){
 primaryHue = 202;
         
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue',primaryHue);
    })
})

//Theme Background values
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

//change background
const changeBg = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness); 
    root.style.setProperty('--white-color-lightness',whiteColorLightness); 
    root.style.setProperty('--dark-color-lightness',darkColorLightness); 
}

Bg1.addEventListener('click', () => {
  

    //add active 
    Bg1.classList.add('active');

    //Remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
   window.location.reload();
})
Bg2.addEventListener('click', () => {
    darkColorLightness ='95%';
    whiteColorLightness ='20%';
    lightColorLightness ='15%';

    //add active 
    Bg2.classList.add('active');

    //Remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})
Bg3.addEventListener('click', () => {
    darkColorLightness ='95%';
    whiteColorLightness ='10%';
    lightColorLightness ='0%';

    //add active 
    Bg3.classList.add('active');

    //Remove active class from the others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})