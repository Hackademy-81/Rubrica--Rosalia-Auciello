let btnShowContacts= document.querySelector("#btnShowContact");
let wrapper2= document.querySelector("#wrapper2");
let btnAddContacts= document.querySelector("#btnAddContacts");

let nameInput= document.querySelector("#nameInput"); 
let numberInput= document.querySelector("#numberInput"); 

let btnSearchContacts= document.querySelector("#btnSearchContacts"); 






let rubrica= {
    contacts: [
        {id:1, name: "Nicola", numero:"3333333"},
        {id:2, name: "Leo", numero:"3333444"},
        {id:3, name: "Alina", numero:"333555"},
    ],

    showContacts: function (array) {

        wrapper2.innerHTML= ""; 
        this.contacts.forEach((contact)=>
        {  
            let divCard= document.createElement("div");
            divCard.classList.add("col-12", "col-md-8", "card-custom");
            divCard.innerHTML= `<p>${contact.name} </p>
            <p>${contact.numero}</p>
            <i class="fa-solid fa-trash-can text-white icon" id="delete"></i>`
            wrapper2.appendChild(divCard); 

        });


        let icons= document.querySelectorAll(".icon"); 

        icons.forEach((icon)=> {
            icon.addEventListener("click", ()=> {
                let contactId= icon.id;
                rubrica.deleteContacts(contactId); 
            });
        }); 

    },

    addContacts: function (newName, newNumber) {
        
        
        let newId; 
        if (this.contacts.length>0) {
            id= this.contacts[this.contacts.length -1].id +1;
        } else {
            newId =1; 
        }; 

        this.contacts.push({id: newId, name: newName, numero: newNumber}); 

        this.showContacts(this.contacts); 


    },
   
  deleteContacts: function (deletedId) {
    let element= this.contacts.find((contact)=>
        contact.id==deletedId

    );
    let index=  this.contacts.indexOf(element);
    this.contacts.splice(index,1); 
    this.showContacts(this.contacts); 

  }, 


  searchContacts: function (nomefiltrato) {
    let nameFiltred= this.contacts.filter((contact)=> contact.name == nomefiltrato); 
    this.showContacts(nameFiltred); 
  }, 






    
}; 



let check= false ;

btnShowContacts.addEventListener("click", ()=> {
       if (check==false) {
        rubrica.showContacts(rubrica.contacts); 
        btnShowContacts.innerHTML= `Nascondi Contatti`;
        check=true; 
       } else {
        btnShowContacts.innerHTML= `Mostra Contatti`;
        wrapper2.innerHTML= ""; 
        check=false; 
       }; 
        

}); 

btnAddContacts.addEventListener("click", ()=> {
    if(nameInput.value!="" && numberInput.value!=
    "") {
        rubrica.addContacts(nameInput.value, numberInput.value); 
        nameInput.value="";
        numberInput.value="";
        if (check==false) {
            btnShowContacts.innerHTML= `Nascondi Contatti`; 
            check=true;
        };


    } else {
        alert("devi inserire nome e numero")
    }; 
   


}); 

btnSearchContacts.addEventListener("click", ()=> {
    rubrica.searchContacts(nameInput.name); 
    nameInput.value= ""; 
})





