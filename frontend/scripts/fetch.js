/**
 * Get all books from db  
 * @returns list of books data/object
 */
async function getAllBooks(){
    try {
        const url = `http://127.0.0.1:8000/books`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            //check if err ever go to this block
        }

    } catch (error) {
        message.innerText = error; 
    }
}

/**
 * Add a new book to db 
 * @returns new book data/object
 */
async function addNewBook(title, summary){
    try {
        const body = {
            title: title,
            summary: summary
        }
        const url = `http://127.0.0.1:8000/books`
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        })
        const result = await res.json();
     
        if (res.status === 201) {
            window.location.href = `./index.html`
        }
        else{
            message.innerText = error;            //check if err ever go to this block
        }

    } catch (error) {
        // message.innerText = error; 
        console.log(error)
        document.getElementById('error-message').innerText = "There was a problem adding the book."
    }
}


/**
 * Delete book 

 */
async function deleteBook(id){
    try {
        const url = `http://127.0.0.1:8000/books/${id}`
        const res = await fetch(url, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            //check if err ever go to this block
        }

    } catch (error) {
        message.innerText = error; 
    }
}

/**
 * GET a book 

 */
async function getBook(id){
    try {
        const url = `http://127.0.0.1:8000/books/${id}`
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (res.status === 200) {
            return res.json();
        }
        else{
            message.innerText = error;            //check if err ever go to this block
        }

    } catch (error) {
        message.innerText = error; 
    }
}

