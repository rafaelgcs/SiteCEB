// Animations initialization
new WOW().init();

$('.maskTel').mask('(00) 0 0000-0000');

$(window).ready(function () {
    if ($('.navbar').hasClass('top-nav-collapse')) {
        $('.img-brand-web').attr('src', 'img/logo-nav-white.png');
    } else {
        $('.img-brand-web').attr('src', 'img/logo-nav.png');
    }
});

$(document).scroll(function () {
    if ($('.navbar').hasClass('top-nav-collapse')) {
        $('.img-brand-web').attr('src', 'img/logo-nav-white.png');
    } else {
        $('.img-brand-web').attr('src', 'img/logo-nav.png');
    }
});


$('.scrollSuave a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 70
    }, 800);
});

$('.btnServicos').click(function () {
    alert('Em breve...');
});
$('.btnEmBreve').click(function () {
    alert('Em breve...');
})


$("#formulario-inscricao").submit(function () {
    limparCamposFormularioInscricao();
    // var nomeInscrito = $("#nome-inscrito").val();
    // var emailInscrito = $("#email-inscrito").val();
    // var numeroInscrito = $("#numero-inscrito").val();
    // var matriculaInscrito = $("#matricula-inscrito").val();
    // var querParticipar = $("input[name='querparticipar']:checked").val();
    var htmlSuccess = "";

    // $.ajax({
    //     method: "POST",
    //     url: "./actions/salvarInscricao.php",
    //     data: { nome: nomeInscrito, email: emailInscrito, numero: numeroInscrito, matricula: matriculaInscrito, ejcet: querParticipar },
    //     success: function (data) {
    //         var result = parseInt(data);
    //         var htmlSuccess = "";
    //         if (result == 2) {
    //             htmlSuccess += '<hr class="mb-4" id="inscricaoPessoal"><p>Infelizmente não conseguimos efetuar a sua inscrição!!!</p>';

    //             if (result == 2) {
    //                 htmlSuccess += '<p>Essa matrícula já está cadastrada no sistema! Tente novamente com outra matrícula ou entre em contato com a nossa equipe para resgatar a sua inscrição!</p>';
    //             }


    //             $("#conteudo-confirmacao").html(htmlSuccess);
    //             $([document.documentElement, document.body]).animate({
    //                 scrollTop: $("#inscricaoPessoal").offset().top - 66
    //             }, 800);

    //         } else if (result == 0) {
    //             htmlSuccess += '<hr class="mb-4" id="inscricaoPessoal"><p>Infelizmente não conseguimos efetuar a sua inscrição!!!</p>';

    //             $("#conteudo-confirmacao").html(htmlSuccess);
    //             $([document.documentElement, document.body]).animate({
    //                 scrollTop: $("#inscricaoPessoal").offset().top - 66
    //             }, 800);


    //         } else {

    //             htmlSuccess += '<div class="card mb-4 wow fadeIn" id="inscricaoPessoal"><div class="card-body">';
    //             htmlSuccess += '<p class="h3 my-4">Inscrição: 1000' + data + ' <small>*Imprima essa página*</small> <a href="#!" class="printarInscricao text-black"> <i class="fas fa-print"></i></a> </p>';
    //             htmlSuccess += '<p class="h5 my-4">Nome: </p><p>' + nomeInscrito + '</p>';
    //             htmlSuccess += '<p class="h5 my-4">Matrícula: </p><p>' + matriculaInscrito + '</p>';
    //             htmlSuccess += '<p class="h5 my-4">E-mail: </p><p>' + emailInscrito + '</p>';
    //             htmlSuccess += '<p class="h5 my-4">Número: </p><p>' + numeroInscrito + '</p>';
    //             htmlSuccess += '<hr class="mb-4"><p>Agradecemos a sua inscrição! Divulgaremos os selecionados para participar do curso no dia anterior, então imprima essa página!</p></div></div>';
    //             $("#conteudo-confirmacao").html(htmlSuccess);
    //             $(".printarInscricao").click(function () {
    //                 window.print();
    //             });
    //             $([document.documentElement, document.body]).animate({
    //                 scrollTop: $("#inscricaoPessoal").offset().top - 66
    //             }, 800);
    //             limparCamposFormularioInscricao();
    //         }

    //     },
    // });

    htmlSuccess += '<hr class="mb-4" id="inscricaoPessoal"><p>Infelizmente não conseguimos efetuar a sua inscrição!!!</p>';
    htmlSuccess += '<p>O período de inscrições já foi encerrado!</p>';

    $("#conteudo-confirmacao").html(htmlSuccess);
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#inscricaoPessoal").offset().top - 66
    }, 800);

    alert('Infelizmente o período de inscrições já foi encerrado...');

    return false;

});

$(".printarInscricao").click(function () {
    $("#inscricaoPessoal").print();
});

function limparCamposFormularioInscricao() {
    $("#nome-inscrito").val("");
    $("#email-inscrito").val("");
    $("#numero-inscrito").val("");
    $("#matricula-inscrito").val("");
}