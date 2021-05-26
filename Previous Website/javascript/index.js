// get number of water types buttons
var numberOfTypesButtons = document.querySelectorAll(".button-style").length;

// this is just the class name for modal e.g. bg-modal-sk-water
var bgModalName = null;

for (var i = 0; i < numberOfTypesButtons; i++) {
    
    // this is the entire actual modal with the bgModalName as its class
    var fullModal = null;

    // open modal when click on buttons
    document.querySelectorAll(".button-style")[i].addEventListener("click", function() {
        bgModalName = ".bg-modal-" + this.id;
        fullModal = document.querySelector(bgModalName);
        fullModal.style.display = 'flex';
    });

    // close modal when click on x
    document.querySelectorAll(".close")[i].addEventListener("click", function() {
        fullModal.style.display = 'none';
    });

    // close modal when press on keyboard
    document.querySelectorAll(".close")[i].addEventListener("keyup", function() {
        fullModal.style.display = 'none';
    });

    // close modal when click outside of the modal box
    window.addEventListener('click', function(e) {
        if (e.target == document.querySelector(bgModalName)) {
            fullModal.style.display = 'none';
        }
    })
}


// $('.carousel').carousel({
//     interval: false
// })

// if (screen.width <= 455) {
//     document.getElementById('text-only-on-mobile').innerHTML = '<p>They expose us to unstable free radicals, the same as how exercise, air pollutants and the above examples do. These free radicals attack the weak parts of our body</p>';
// }

// $(window).resize(function() {
//     if (screen.width < 480) {
//         document.getElementById('text-only-on-mobile').innerHTML = '<p>They expose us to unstable free radicals, the same as how exercise, air pollutants and the above examples do. These free radicals attack the weak parts of our body</p>';
//     }
// })