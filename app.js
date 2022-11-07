// $(() => {
//     const $open = $("#open");
//     const $modal_container = $("#modal_container");
//     const $close = $("#close");

//     $open.addEventListener('click', () => {
//         $modal_container.addClass("show");
//     })


//     $close.addEventListener('Click', () => {
//         $modal_container.remove("show")
//     })

//     $open.click(function(){
//         $modal_container.addClass("show")
//     })



// })


// Window.ONLOAD IS USED FOR MAKING SURE HTML IS LOADED BEFORE JS IS EXECUTED

window.onload=function(){

    // MODAL FUNCTIONS 
    const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close');

    open.addEventListener("click", () => {
        modal_container.classList.add('show');
    });

    close.addEventListener("click", () => {
        modal_container.classList.remove('show');
    });
    // END OF MODAL FUNCTIONS 








    const software = document.getElementById('header1')
    const software_container = document.getElementById('software_container')

    software = addEventListener("click", () => {
        software_container.classList.add('hide');
    })

    // $(window).scroll(function() {
    //     $('.self').css("top", Math.max(0, 250 - $(this).scrollTop()))
    // })





    // function scrollWin() {
    //     window.scrollTo(0,1);
    // }

}


// DOWNLOADS RESUME

$(document).ready(function() {
    $(".resume").click(function(e) {
        window.location.href = "Isaiah_Johnson_Full_Stack_WD.pdf"
    })
})


// const modal = document.querySelector('#modal');
// const openModal = document.querySelector('.open-button');
// const closeModal = document.querySelector('.close-button');

// openModal.addEventListener('click', () => {
//     modal.show();
// })

// $(window).scroll(function() {
//     $(".myimg").css("top",Math.max(0,250-$(this).scrollTop()));
//     });

