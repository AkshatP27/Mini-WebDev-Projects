const btn = document.querySelectorAll('.ripple')

// var akt = 0

btn.forEach(button => {
    button.addEventListener('click', function (e) {
        const x = e.pageX
        const y = e.pageY

        const buttonTop = e.target.offsetTop
        const buttonLeft = e.target.offsetLeft

        

        const xInside = x - buttonLeft
        const yInside = y - buttonTop
        const circle = document.createElement('span')
        circle.classList.add('circle')
        circle.style.top = yInside + 'px'
        circle.style.left = xInside + 'px'

        this.appendChild(circle)

        setTimeout(() => circle.remove(), 500)

        //code to exchande bg color of button & body and vice-versa
        const body = document.body;
        const button = e.target;

        const bodyBgColor = window.getComputedStyle(body).backgroundColor;
        const buttonBgColor = window.getComputedStyle(button).backgroundColor;

        body.style.backgroundColor = buttonBgColor;
        button.style.backgroundColor = bodyBgColor;

        body.style.transition = 'background-color 1s ease';
        button.style.transition = 'background-color 1s ease';
    })
})

