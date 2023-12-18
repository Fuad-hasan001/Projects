// localStorage.setItem('person1', 8214569);

const addTOLocalStorage = () =>{
    const inputId = document.getElementById("storage-id");
    const id = inputId.value ;

    const inputValue = document.getElementById("storage-value");
    const value = inputValue.value ;

    if(id && value){
        localStorage.setItem(id, value);
    }
    inputId.value = "";
    inputValue.value = "";
}