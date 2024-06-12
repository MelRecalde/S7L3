//  https://striveschool-api.herokuapp.com/books

const fetchData = () => {
    // richiesta GET all'indirizzo 
    fetch("https://striveschool-api.herokuapp.com/books")
        .then((response) => {
            //console.log(response)
            // se ha funzionare il fetch ritorna i dati in formato json
            if (response.ok) {
                return response.json()
            } else {
                throw new Error(" ERROR : Error retrieving data ")
            }
        }).then((books) => {
            //console.log(data)
           const cardContainer = document.getElementById("cards")

            books.forEach( book => {
                const col = document.createElement("div")
                col.classList.add("col")
                //col.classList.add("")
                const card = document.createElement("div")
                card.classList.add("card")
            

                const cardImage = document.createElement("img")
                cardImage.src = book.img
                cardImage.classList.add("card-img-top")
                cardImage.classList.add("object-fit-cover")
                const cardBody = document.createElement("div")
                //cardBody.classList.add("")
                const title = document.createElement("h5")
                title.innerText = book.title
                title.classList.add("p-2")
                const price = document.createElement("p")
                price.innerText = "€ " + book.price
                const btnContainer = document.createElement("div")
                //btnContainer.classList.add("col")
                const button = document.createElement("button")
                button.innerText = "Discard"
                button.classList.add("btn")
                button.classList.add("btn-outline-danger")
                

                

                cardBody.appendChild(title)
                cardBody.appendChild(price)
                btnContainer.appendChild(button)

                card.appendChild(cardImage)
                card.appendChild(cardBody)
                
                card.appendChild(btnContainer)
                col.appendChild(card)
                cardContainer.appendChild(col)
                

            });

            // se non ha funzionato, catch prende e mi dice errore
        }).catch((error) => {
            console.error(error)
        })
}

window.addEventListener("DOMContentLoaded", () => {
    fetchData()
})