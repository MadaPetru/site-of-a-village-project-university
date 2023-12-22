 let ok = true;
 function trimite(){
    let contactForm = document.getElementById("contactForm");
    let nume = contactForm.fname.value;
    let nume2 = contactForm.lname.value;
    let country = contactForm.country.value;
    let telefon = contactForm.telephone.value;
    let subject = contactForm.subject.value;

    ok = true;
    validateValueNotEmpty(nume, "Name");
    validateValueNotEmpty(telefon, "telephone");
    validateValueNotEmpty(nume2, "Last name");
    validateValueNotEmpty(subject, "subject");
    validateValueNotEmpty(country, "Country");
    if(ok){
        alert("E trm boss");
        contactForm.reset();
        return;
    }
    alert("toate campurile sunt necesare")
}

function validateValueNotEmpty(value, field){
    if(!value || value.trim() == ''){
        ok = false;
    }
}