$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["AdOps", "Gestor de tráfego", "Consultor de Marketing", "Analista de Dados"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["AdOps", "Gestor de tráfego", "Consultor de Marketing", "Analista de Dados"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 2,
                nav: false
            }
        }
    });
});

function sendMail() {
    Email.send({
        SecureToken : '12d1e889-021b-4595-9ced-a8751406551b',
        From : 'contatohugomelo@gmail.com',
        To : 'contatohugomelo@gmail.com',
        Subject : "DMT DIGITAL",
        Body : "Você recebeu um email do site DMT DIGITAL<br><br>Nome: " + document.getElementById('Nome').value + "\r\cEmail: " + document.getElementById('Email').value + "\r\cAssunto: " + document.getElementById('Assunto').value + "\r\cMensagem: \r\c" + document.getElementById('Mensagem').value
    }).then(
    message => {
        if (message == 'OK'){
            alert('Mensagem Enviada!')
        }
        else{
            alert('Hove um problema. Por favor entre em contato através do seu email de preferência.')
        }
    }
    );
}