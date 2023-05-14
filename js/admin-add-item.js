let inputName = document.querySelector('.input-name-new-item');
let inputMaterial = document.getElementById("ddlViewBy");
let inputSize = document.getElementById("ddlViewB");
let inputPrice = document.querySelector('.price-new-item');
let inputPriceDiscount = document.querySelector('.price-new-item-discount');
let inputURL = document.querySelector('.url-input-new')

// function mySubmitFunctionAdd(e){
//     e.preventDefault();
//     var value = inputMaterial.value;
//     var text = inputMaterial.options[inputMaterial.selectedIndex].text;

//     var valueSize = inputSize.value;
//     var textSize = inputSize.options[inputSize.selectedIndex].text;

//     console.log(inputName.value);
//     console.log(value, text);
//     console.log(valueSize, textSize);
//     console.log(inputPrice.value);
//     console.log(inputPriceDiscount.value);
//     console.log(inputURL.value);

// }

const myForm = document.getElementById("myForm");
const inpFile = document.getElementById("inpFile");

myForm.addEventListener("submit" , e =>{
    e.preventDefault();

    const endpoin = "upload.php"
    const formData = new FormData();

    formData.append("inpFile", inpFile.files[0]);

    fetch(endpoin, {
        method: "post",
        body: formData
    }).catch(console.error);
})