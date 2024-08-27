document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('discount-row').addEventListener('click', function(e){
        if (e.target.classList.contains('discount')) {
            e.preventDefault();
            document.getElementById('product').innerHTML = e.target.dataset['product'];
            document.getElementById('title').innerHTML = e.target.dataset['title'];
            document.getElementById('code').innerHTML = e.target.dataset['code']
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).show();
          }
    });

    document.onkeydown = function(e) {
        // ESCAPE key pressed
        if (e.keyCode === 27) {
            bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast')).hide();
        }
    };
});

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('discount-row').addEventListener('click', function(e){
//         if (e.target.classList.contains('goGreen')) {
//             e.preventDefault();
//             document.getElementById('goGreen').innerHTML = e.target.dataset['goGreen'];
//             bootstrap.Toast.getOrCreateInstance(document.getElementById('liveGreen')).show();
//           }
//     });
// });

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById('discount-row').addEventListener('click', function(e){
//         if (e.target.classList.contains('pronouce')) {
//             e.preventDefault();
//             document.getElementById('pronouce').innerHTML = e.target.dataset['pronouce'];
//             bootstrap.Toast.getOrCreateInstance(document.getElementById('livePronouce')).show();   
//           }  
//     });
           


    //     document.keydown(function(e) {
    //         // ESCAPE key pressed
    //         if (e.keyCode.keydown == 27) {
    //             // document.getElementById('livePronouce').hide();
    //             console;e
    //         }

    // });
// });
