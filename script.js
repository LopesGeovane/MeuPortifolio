var typed = new Typed((".skills"),{
    strings : ["Programador...", "Futuro engenheiro mecatrônico...", "Estudante...", "Aspirante a designer..." ],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true
})



function createChart(ctx, percent) {
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [percent, 100 - percent],
          backgroundColor: ['#0082A6', '#00000050'],
          borderWidth: 0
        }]
      },
      options: {
        cutout: '80%'
      }
    });
  }

  var habilidades = { comunicativo: 78, dedicado: 82, inteligente: 100 };

  createChart(document.getElementById('comunicativoChart').getContext('2d'), habilidades.comunicativo, 'Comunicativo');
  createChart(document.getElementById('dedicadoChart').getContext('2d'), habilidades.dedicado, 'Dedicado');
  createChart(document.getElementById('inteligenteChart').getContext('2d'), habilidades.inteligente, 'Inteligente');