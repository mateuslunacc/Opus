// Settings for Intro.js, a tour library

document.addEventListener("DOMContentLoaded", function(event) {
  var intro = introJs();
  intro.setOptions({
    showStepNumbers: false,
    showBullets: false,
    showProgress: true,
    hidePrev: true,
    hideNext: true,
    overlayOpacity: 0.5,
    skipLabel: "Esc",
    doneLabel: "Esc",
    nextLabel: 'Pressione Enter →',
    steps: [
      {
        intro: "Bem-vindo ao Opus! <br> <br> O Opus é um aplicativo de visualização de dados de exploração de artistas, construído com a API da Web Spotify e o D3.js. Nosso objetivo é ajudá-lo a encontrar o seu próximo artista favorito! > O Opus funciona melhor com a janela de tela maximizada. Se a sua não está atualmente, recomendamos alterar o tamanho, atualizar a página e clicar no botão Visitar. <br> <br> Pressione enter para um passeio. Pressione ESC para ignorar este tutorial.",
        tooltipClass: 'intro',
      },
      {
        element: '#search-step',
        intro: "Vamos começar! Primeiro, você digitará um artista que você gosta aqui e pressione Enter. <br> <br> Vamos ouvir alguns Otis Redding. <br> <br> CUIDADO: O áudio começará a tocar.",
      },
      {
        element: '#node-step',
        intro: "Os artistas que você inserir serão adicionados à tela com uma borda amarela. Você pode adicionar vários artistas, se quiser!",
        position: 'right',
      },
      {
        element: '#image-step',
        intro: "Quando você clica na imagem de um artista Opus irá buscar as melhores músicas desse artista e artistas relacionados do Spotify. Tente clicar em outro artista! Você pode ampliar com a o botão de rolagem e arraste a o gráfico enquanto o mapa do artista cresce.",
        position: 'left'
      },
      {
        element: '#artist-box-step',
        intro: "Aqui estão os controles de áudio. Clique no nome da faixa para abrí-la no Spotify!",
        position: 'top'
      },
      {
        element: '#center-zoom-step',
        intro: 'Clique aqui para recentralizar o gráfico.'
      },
      {
        element: '#reset-step',
        intro: 'CLique aqui para resetar a página inteira.'
      },
      {
        element: '#body-step',
        intro: 'E é isso! <br><br> Opus espera que você ache o seu próximo artista favorito aqui!'
      }
    ]
  });

  // Fire off requests during demo/tour
  intro.onchange(function(targetElement) {
    let inputEl = $('.search-input');
    switch (targetElement.id) {
      case 'search-step':
        inputEl.val("Otis Redding");
        break;
      case 'node-step':
        utilSearch(inputEl.val());
        inputEl.val('');
        break;
      case 'image-step':
        ARTIST_INFO.name = "Al Green";
        clickedIds['3dkbV4qihUeMsqN4vBGg93'] = true;
        utilFetchRelatedArtists('3dkbV4qihUeMsqN4vBGg93');
        break;
      case 'body-step':
        $('.introjs-prevbutton').attr('style', 'display: none;');
        break;
      default:
        inputEl.focus();
        break;
    }
  });

  if (localStorage.getItem("introDisabled") == null) {
    localStorage.setItem("introDisabled", true);
    intro.start();
  }

  $('.tour-button').click(() => intro.start());
});
