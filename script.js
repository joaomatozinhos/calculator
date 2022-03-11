let screenResult = document.getElementById('result')

function insert(key) {
  screenResult.innerHTML += key
}

function clearScreen() {
  screenResult.innerHTML = ''
}

function back() {
  let result = screenResult.innerHTML
  screenResult.innerHTML = result.substring(0, result.length - 1)
  /* 
  O método substring seleciona uma parte/pedaço da string, sendo que:
    - o primeiro parâmetro é em qual índice deseja começar a "pegar"
    - o segundo parâmetro define até qual índice deseja "pegar"
      OBS.: no segundo parâmetro deve-se digitar o último índice que deseja pegar + 1
        Ex.: caso queira pegar até o índice 15, digite 16.

    Ex.:
      let frase = "Meu nome é João Pedro"
      let novaFrase = frase.substring(11, 15)
        // nesse caso, vai começar a pegar no índice 11 que é a letra "J" e vai até o espaço após o "O"
          OBS.: o primeiro caractere é índice 0 e os espaços contam como caractere
      console.log(novaFrase)
        // João
    
    No caso da calculadora, usa-se "result.length - 1" pois assim vai pegar todos os números menos o último, ou seja, é como se tivesse apagado o último número, que é o que se deseja fazer

    Ex.:
      let numero = "984"
      let novoNumero = numero.substring(0, numero.length - 1)
        // repare que "numero.length" é igual a 3, logo o segundo parâmetro valerá 2. Portanto, ficará assim: "numero.substring(0, 2)"
        // logo, vai pegar os números 9 e 8
      console.log(novoNumero)
        // 98
  */
}

function calculate() {
  let result = screenResult.innerHTML
  if (result) {
    screenResult.innerHTML = eval(result)
    // a função "eval" é poderosa/perigosa e faz todo o cálculo automaticamente (!!! cuidado ao usar, deve-se pesquisar !!!)
  } else {
    screenResult.innerHTML = 'Insira...'
  }
}
