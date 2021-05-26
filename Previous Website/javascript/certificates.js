// get number of certificates
var numberOfCertificates = document.querySelectorAll(".paper-certificate").length;

// this is just the class name for modal e.g. bg-modal-wqa
var bgModalName = null;

for (var i = 0; i < numberOfCertificates; i++) {
    
    // this is the entire actual modal with the bgModalName as its class
    var fullModal = null;

    // open modal when click on buttons
    document.querySelectorAll(".paper-certificate")[i].addEventListener("click", function() {
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