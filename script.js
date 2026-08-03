// ============================
// LEARN MORE BUTTON
// ============================

function showMessage() {

    alert(
        "Welcome to Bright Future School! 🎓\n\n" +
        "Our school focuses on quality education, " +
        "student growth, creativity and all-round development."
    );

    // Scroll to About section
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}


// ============================
// CONTACT BUTTON
// ============================

function contactMessage() {

    alert(
        "Thank you for contacting Bright Future School! 📚\n\n" +
        "You can reach us at:\n" +
        "📞 +91 98765 43210\n" +
        "📧 brightfuture@example.com"
    );
}


// ============================
// NAVIGATION CLICK EFFECT
// ============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


// ============================
// WELCOME MESSAGE
// ============================

window.addEventListener("load", function() {

    console.log(
        "Welcome to Bright Future School website!"
    );

});