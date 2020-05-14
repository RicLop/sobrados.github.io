$(document).ready(function() {
    var screenWidth = $(window).width();
    $('navbar-header').css('width', screenWidth + 'px');
 });

function sendEmail() {
    let name = document.getElementById('contactName').value;
    let whatsApp = document.getElementById('contactWhatsApp').value;
    let email = document.getElementById('contactEmail').value;
    let preferredTime = document.getElementById('contactPreferredTime').value;
    let grossIncome = document.getElementById('contactGrossIncome').value;
    let message = `Olá! Meu nome é ${name}. Gostaria de maiores informações sobre os sobrados da ROS Imóveis! Possuo renda bruta de ${grossIncome} e o melhor horário para contato é ${preferredTime}. Favor retornar pelo WhatsApp, no número ${whatsApp}, ou pelo e-mail ${email}.`;
    window.open('mailto:10semnome01@gmail.com?body=' + message + '&subject=Sobrados ROS Imóveis', 'mail');
    event.preventDefault();
}