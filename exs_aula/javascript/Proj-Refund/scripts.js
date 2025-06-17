// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul") // acessando o span que ta dentro dessas tags
const expensesQuantity = document.querySelector("aside header p span")
const expensesTotal = document.querySelector("aside header h2")

// Captura o evento de input para formatar o valor
amount.oninput = () => {
    // Obtém o valor atual do input e remove os caracteres não numéricos
    let value = amount.value.replace(/\D/g, "")

    // Transformar o valor em centatos (exemplo: 150/100 = 1.5 é equivalente a R$ 1,50)
    value = Number(value) / 100

    // Atualiza o valor do input
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    // Formata o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    // Retorna o valor formatado 
    return value
}

// Captura o evento de submit do formulário para obter os valores 
form.onsubmit = (event) => {
    // Previne o comportamento padrão de recarregar a página
    event.preventDefault()

    // Cria um objeto com os detalhes da nova despesa
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    // Chama a função que irá adicionar o item na lista
    expenseAdd(newExpense)
}

// Adiciona um novo item na lista
function expenseAdd(newExpense) {
    try {
        // Cria o elemento para a adicionar o item (li) na lista (ul)
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o ícone da categoria
        const expenseIcon = document.createElement("img")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Cria a info da despesa
        const expenseInfo = document.createElement("div")
        expenseInfo.classList.add("expense-info")

        // Cria o nome da despesa
        const expenseName = document.createElement("strong")
        expenseName.textContent = newExpense.expense

        // Cria a categoria da despesa
        const expenseCategory = document.createElement("span")
        expenseCategory.textContent = newExpense.category_name

        // Adiciona o nome e a categoria na div das informações da despesa
        expenseInfo.append(expenseName, expenseCategory)

        // Criando o valor da despesa
        const expenseAmount = document.createElement("span")
        expenseAmount.classList.add("expense-amount")
        expenseAmount.innerHTML = `<small>R$</small>${newExpense.amount.toUpperCase().replace("R$", "")}`

        // Cria imagem de remover
        const removeIcon = document.createElement("img")
        removeIcon.classList.add("remove-icon")
        removeIcon.setAttribute("src", "img/remove.svg")
        removeIcon.setAttribute("alt", "remover")

        // Adiciona as informações no item
        expenseItem.append(expenseIcon, expenseInfo, expenseAmount, removeIcon)

        // Adiciona o item na lista
        expenseList.append(expenseItem)
        
        // limpar p form
        formClear()

        // Atualiza os totais
        updateTotals()

    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error)
    }
}

// Atualiza os totais
function updateTotals(){
    try {
        // recupera todos os itens da lista
        const items = expenseList.children

        // Atualiza a qtd de itens na lista
        expensesQuantity.textContent = `${items.length} ${items.length > 1 ? "despesas" : "despesa"}`

        // Variável para incrementar o total
        let total = 0

        // percorrer os itens na lista
        for(let item = 0; item < items.length; item++){
            const itemAmount = items[item].querySelector(".expense-amount")

            // remover caracteres não numéricos e substituir por ponto
            let value = itemAmount.textContent.replace(/[^\d,]/g, "").replace(",", ".")

            // converter para float
            value = parseFloat(value)

            // verificar se é um número válido
            if (isNaN(value)){
              return alert("Não foi possível calcular o total. O valor não parece ser um número.")  
            }

            // incrementar o valor total
            total += Number(value)
        }

        // cria a span pra add o R$ formatado
        const symbolBRL = document.createElement("small")
        symbolBRL.textContent = "R$"
        //Formata o valor e remove o R$ que será exibido pela small
        total = formatCurrencyBRL(total).toUpperCase().replace("R$", "")
        
        // limpa o conteúdo do elemento
        expensesTotal.innerHTML = ""
        // adiciona o symbolo e o valor
        expensesTotal.append(symbolBRL, total)

    } catch (error) {
        alert("Não foi possível atualizar os totais")
       console.log(error) 
    }
}

// Evento que captura o clique nos itens da lista
expenseList.addEventListener("click", function(event){
    // verificar se o elemento clicado é o ícone de remover
    if(event.target.classList.contains("remove-icon")){
      // obtém a li pai do elemento clicado(img)
      const item = event.target.closest(".expense")
      // remove o item clicado
      item.remove()
    }
    // atualiza os totais dps da remoção
    updateTotals()
})

// limpa o campo preenchido

function formClear(){
    expense.value = ""
    category.value = ""
    amount.value = ""

    // foco no input após limpar
    expense.focus()
}