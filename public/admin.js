// Your Code Here
async function main() {
    let response = await fetch("http://localhost:3001/listBooks", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    let retrieveList = await response.json();
    console.log(retrieveList);
    retrieveList.forEach(renderBook);
  }
  
  function renderBook(book) {
    let root = document.querySelector("#root");
  
    let li = document.createElement("li");
    li.textContent = book.title;
  
    let quantityInput = document.createElement("input");
    quantityInput.value = book.quantity;
  
    let saveButton = document.createElement("button");
    saveButton.textContent = "Submit";
  
    saveButton.addEventListener("click", () => {
      fetch("http://localhost:3001/updateBook", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: book.id,
          quantity: quantityInput.value,
        }),
      });
    });
  
    li.append(quantityInput, saveButton);
  
    root.append(li);
  }
  
  main();
  
// Your Code Here