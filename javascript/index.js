// change the navbar color when scrolled
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// get number of enlargable certificates and water types buttons
var numberOfTypesButtons = document.querySelectorAll(".enlarge-js").length;

// this is just the class name for modal e.g. bg-modal-sk-water
var bgModalName = null;

for (var i = 0; i < numberOfTypesButtons; i++) {
    
    // this is the entire actual modal with the bgModalName as its class
    var fullModal = null;

    // open modal when click on buttons
    document.querySelectorAll(".enlarge-js")[i].addEventListener("click", function() {
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

