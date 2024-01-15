// h2 //

let h2 = document.querySelector(`h2`);

function welcome (){

  
    if( h2.innerHTML == `hi i am Akib`){

    h2.innerHTML = ` Wellcome`;

    } else{

        h2.innerHTML = `hi i am Akib`;

    } 

}

h2.addEventListener(`mouseover`, welcome ) ;


// h2 end // 


// password showHide //

let inputPassword = document.querySelector(`.input_password input`);
let eye_show = document.querySelector(`.eye_show`);

function showHide(){
 
if(inputPassword.type == `password`){

    inputPassword.type = `text`;
    eye_show.innerHTML = `<i class="bi bi-eye"></i>`;


} else{

    inputPassword.type = `password`;
    eye_show.innerHTML = `<i class="bi bi-eye-slash"></i>`;


}


}

eye_show.addEventListener(`click`, showHide );

// password showHide end //

// submit //
let submitBtn = document.querySelector(`.user_password form button  `);

function submitFrom (){

 if(inputPassword.value.length  > 0){

    submitBtn.innerHTML  = `succesfull <i class="bi bi-check2-all"></i>`;
    
} else{
    
    submitBtn.innerHTML  = `Error  <i class="bi bi-exclamation-circle-fill"></i>`;

 }

}

submitBtn.addEventListener(`click`, submitFrom);



// submit  end//



// menu    //


let menuBtn = document.querySelector("nav .menuBtn");
let sidebar = document.querySelector(".sidebar");

function showSidebar() {
  sidebar.classList.add("active");
}

menuBtn.addEventListener("click", showSidebar);


// //

let cancelBtn = document.querySelector(".cancel");

function hideSidebar(event) {
  console.log(event.target.classList.contains('cancel'));
  if (
    event.target.classList.contains("cancel") ||
    event.target.classList.contains("sidebar")
  ) {
    sidebar.classList.remove("active");
  }
}


cancelBtn.addEventListener("click", hideSidebar);
sidebar.addEventListener("click", hideSidebar);






// menu  end//
