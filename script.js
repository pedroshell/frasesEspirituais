

function gerarFraseEspiritual(){

    const frases = [
        "A nossa felicidade será naturalmente proporcional em relação à felicidade que fizermos para os outros.", //0
        "Fora da caridade não há salvação.", //1
        "O amor é uma força que transforma o destino.", //2
        "O bem que praticares em algum lugar, é o teu advogado em toda parte.", //3
        "Isso também vai passar!", //4
        "Ame hoje, pois o ontem já passou e o amanhã poderá não vir...", //5
        "Cada dor, cada luta, cada sofrimento tem sua razão de ser na justiça perfeitíssima de Deus.", //6
        "A vida guarda a sabedoria do equilíbrio e nada acontece sem uma razão justa.", //7
        "⁠É tempo, pois, de perdoar para serenar o coração e tratar de progredir.", //8
        "Procure descobrir o seu caminho na vida. Ninguém é responsável por nosso destino, a não ser nós mesmos." //9
    ]

    const autores = [
        "Allan Kardec",
        "Chico Xavier",
        "Zibia Gasparetto",
        "Yvonne Pereira",
        "Carlos Torres Pastorino"
    ]

    const numeroAleatorio = Math.floor(Math.random() * 10)
    const frase = frases[numeroAleatorio]
    if(numeroAleatorio <= 1)
    {
        autor = autores[0]
    }else if(numeroAleatorio <= 5)
    {
        autor = autores[1]
    }else if(numeroAleatorio <= 7)
    {
        autor = autores[2]
    }else if(numeroAleatorio <= 8)
    {
        autor = autores[3]
    }
    else{
        autor = autores[4]
    }

    document.getElementById('frase').innerHTML = frase
    document.getElementById('autor').innerHTML = autor

}

