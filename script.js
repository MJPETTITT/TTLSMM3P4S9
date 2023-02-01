// JavaScript Document

function hideAll() {
    var pan = document.getElementsByClassName("panel");
    var i;
    for (i = 0; i < pan.length; i++) {
        pan[i].classList.add("hidden");
        pan[i].classList.remove("unhidden");
    }    
	var acc = document.getElementsByClassName("accordion");
    var j;
    for (j = 0; j < acc.length; j++) {
        acc[j].classList.remove("active");
    }
}

function accordionReady() {

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
			
			var togl = 0;
			
			var panel = this.nextElementSibling;
			if(this.classList.contains("active") == false) {
				togl = 1;

            } else {
				togl = 0;
            }

            hideAll();
			
			if (togl == 1) {
				this.classList.add("active");
				panel.classList.add("unhidden");
                panel.classList.remove("hidden");
			} else {
				this.classList.remove("active")
				panel.classList.add("hidden");
                panel.classList.remove("unhidden");
			}

            /* Toggle between hiding and showing the active panel */
            /*var panel = this.nextElementSibling;
            if (panel.classList.contains("unhidden") == true) {
                panel.classList.add("hidden");
                panel.classList.remove("unhidden");
            } else {
                panel.classList.add("unhidden");
                panel.classList.remove("hidden");
				*/

        });
    }
}
