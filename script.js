document.addEventListener('DOMContentLoaded', function() {
    const title = document.querySelector('.title');
    const leaf1 = document.querySelector('.leaf1');
    const leaf2 = document.querySelector('.leaf2');
    const bush2 = document.querySelector('.bush2');
    const mount1 = document.querySelector('.mount1');
    const mount2 = document.querySelector('.mount2');

    document.addEventListener('scroll', function() {
        let value = window.scrollY;
        // console.log(value)
        title.style.marginTop = value * 1.1 + 'px';
        leaf1.style.marginLeft = -value + 'px';
        leaf2.style.marginLeft = value + 'px';
        bush2.style.marginBottom = -value + 'px';
        mount1.style.marginBottom = -value * 1.1 + 'px';
        mount2.style.marginBottom = -value * 1.2 + 'px';
    });

    const passwordInput = document.getElementById('password');
    const verifyPasswordInput = document.getElementById('verify-password');
    const passwordError = document.getElementById('password-error');

    verifyPasswordInput.addEventListener('input', function() {
        if (passwordInput.value !== verifyPasswordInput.value) {
            passwordError.classList.remove('hidden');
        } else {
            passwordError.classList.add('hidden');
        }
    });

    const signUpButton = document.getElementById('signup-btn');

    signUpButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        // Redirect to upi.html
        window.location.href = 'upi.html';
    });
});
