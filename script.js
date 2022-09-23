var fila1 = [
    {
        imagem: './imagens/timao 2.jpg',
        nome: 'Camisa do Corithians Away 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/fla.jpg',
        nome: 'Camisa do Flamengo Home 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/palmeiras.jpg',
        nome: 'Camisa do Palmeiras Home 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/gremio.jpg',
        nome: 'Camisa do Grêmio Home 21/22',
        texto: 'Valor 99,90'
    }

]




fila1.map((produto) => {
    document.getElementById('fila1').innerHTML += `
        <div class='produto'> 
            <img src="${produto.imagem}">
            <div> 
                <h2>${produto.nome} </h2>
                <p>${produto.texto} </p>
                <button id="comprar">Comprar</button>
            </div>        
        </div>

    ` 
})

var fila2 = [
    {
        imagem: './imagens/real.jpg',
        nome: 'Camisa do Real Madrid Home 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/live.jpg',
        nome: 'Camisa do Liverpool Home 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/city.jpg',
        nome: 'Camisa do Manchester City Home 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/united.jpg',
        nome: 'Camisa do Manchester United Home 21/22',
        texto: 'Valor 99,90'
    }

]




fila2.map((produto) => {
    document.getElementById('fila2').innerHTML += `
        <div class='produto'> 
                <img src="${produto.imagem}">
                <div> 
                    <h2>${produto.nome} </h2>
                    <p>${produto.texto} </p>
                    <button id="comprar">Comprar</button>
                </div>        
        </div>

    
    ` 
})

var fila3 = [
    {
        imagem: './imagens/brasil.jpg',
        nome: 'Camisa do Brasil 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/Italia.jpg',
        nome: 'Camisa da Italia 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/frança.jpg',
        nome: 'Camisa do França 21/22',
        texto: 'Valor 99,90'
    },
    {
        imagem: './imagens/japa.jpg',
        nome: 'Camisa Japão Home 21/22',
        texto: 'Valor 99,90'
    }

]




fila3.map((produto) => {
    document.getElementById('fila3').innerHTML += `
        <div class='produto'> 
            <img src="${produto.imagem}">
            <div> 
                <h2>${produto.nome} </h2>
                <p>${produto.texto} </p>
                <button id="comprar">Comprar</button>
            </div>        
        </div>

    
    ` 
})



