const Email = document.getElementById('Email');
const Description = document.getElementById('Description');
const Price = document.getElementById('price');
const onSubmitBtn = document.getElementById('onSubmitBtn');
const items = document.getElementById('items');



  
    onSubmitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
       const obj ={
          email : Email.value,
          description:Description.value,
          price:Price.value
       }
   
          localStorage.setItem(obj.email , JSON.stringify(obj))

          addItemsHandler(obj)

    });

    const addItemsHandler = (obj) => {
        const li = document.createElement('li');
        li.innerHTML = `${obj.email} ----> ${obj.description} -----> ${obj.price}`;
        li.style.backgroundColor = "red";
        items.appendChild(li);
    }
