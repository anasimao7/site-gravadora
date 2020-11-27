//instrução de jquery que inicializa o script apenas quando o documento estiver pronto, espera o html carregar por completo
$(document).ready(function(){
    //Progress Bar
    let containerA = document.getElementById('circleA')

    let circleA = new ProgressBar.Circle(containerA,{
        //objeto interno para delimitar propriedades
        color: '#008080', //cor do círculo, tem de estar em hexadecimal
        strokeWidth: 8, //largura do círculo
        duration: 1400, //duração
        from: {color: '#808080'}, //cor do início
        to: {color: '#008080'}, //cor do fim

        //Animação
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 15) //Coladoradores
            circle.setText(value)
        }
    })

    let containerB = document.getElementById('circleB')

    let circleB = new ProgressBar.Circle(containerB,{
        color: '#008080', 
        strokeWidth: 8, 
        duration: 1600, //o primeiro ciclo acaba antes desse 
        from: {color: '#808080'}, 
        to: {color: '#008080'}, 

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 3) //Prémios
            circle.setText(value)
        }
    })

    let containerC = document.getElementById('circleC')

    let circleC = new ProgressBar.Circle(containerC,{
        color: '#008080',
        strokeWidth: 8,
        duration: 2000, 
        from: {color: '#808080'},
        to: {color: '#008080'},

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 20) //Estúdios
            circle.setText(value)
        }
    })

    let containerD = document.getElementById('circleD')

    let circleD = new ProgressBar.Circle(containerD,{
        color: '#008080', 
        strokeWidth: 8, 
        duration: 2200, 
        from: {color: '#808080'}, 
        to: {color: '#008080'}, 

        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color)
            let value = Math.round(circle.value() * 5) //Parcerias
            circle.setText(value)
        }
    })

    //Inicia o loading quando o utilizador chega ao elemento
    let dataAreaOffset = $('#data-area').offset() //pede a posição do elemento
    let stop = 0 //para a animação depois de executada

    $(window).scroll(function(e){
        let scroll = $(window).scrollTop() //posição do scroll do utilizador

        //se o scroll for maior que o topo da div menos 500 pixels e o stop estiver a 0     
        if(scroll > (dataAreaOffset.top - 500) && stop == 0){//a animação começa um pouco antes de o utilizador atingir o elemento
            circleA.animate(1.0)
            circleB.animate(1.0)
            circleC.animate(1.0)
            circleD.animate(1.0)

            stop = 1 //Para a animação
        } 
    })

    //Parallax
    setTimeout(function(){ //serve para recarregar todas as imagens da páginas
        $('#data-area').parallax({imageSrc: 'img/fundo.png'}) //acessar a área
        $('#apply-area').parallax({imageSrc: 'img/R.png'}) 
    }, 250)

    //Filtro de Artistas
    //evento de clique que identifica quando o botão é clicado e inicia uma funcao anónima
    $('.filter-btn').on('click', function(){ 
        let type = $(this).attr('id') //identifica o tipo de botão
        let boxers = $('.project-box') //identifica as boxs do projeto

        $('.main-btn').removeClass('active') //remove a classe 'active'
        $(this).addClass('active') //o botão que foi clicado fica ativo

        if(type == 'pop-btn'){
            eachBoxers('pop', boxers)
        }else if(type == 'rap-btn'){
            eachBoxers('rap', boxers)
        }else if(type == 'rock-btn'){
            eachBoxers('rock', boxers)
        }else if(type == 'elect-btn'){
            eachBoxers('elect', boxers)
        }else{
            eachBoxers('all', boxers)
        }
    }) 

    function eachBoxers(type, boxers){
        if(type == 'all'){ //verifica se o 'id' selecionado é 'all'
            $(boxers).fadeIn() //evento do jquery que exibe todos os items ocultos pelo fade
        } else{
            $(boxers).each(function(){ //passar por cada caixa
                if(!$(this).hasClass(type)){ //se o botão clicado não representar a box
                    $(this).fadeOut('slow') //esconde os items
                }else{
                    $(this).fadeIn()
                }
            })
        }
    }
})
