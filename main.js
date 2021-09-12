function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show");
}

function myForm(){
    var x= document.getElementById("form");
    if(x.style.display==="none"){
        x.style.display="block";
    }
    else {
        x.style.display="none";
    }
}


// menampilkan section profile di section form
function tampilkanData(){
    nama=document.getElementById("nama").innerHTML;
    role=document.getElementById("role").innerHTML;
    availability=document.getElementById("availability").innerHTML;
    usia=document.getElementById("usia").innerHTML;
    lokasi=document.getElementById("lokasi").innerHTML;
    year=document.getElementById("year").innerHTML;
    email=document.getElementById("email").innerHTML;

    document.getElementById("ans-nama").value=nama;
    document.getElementById("ans-role").value=role;
    document.getElementById("ans-availability").value=availability;
    document.getElementById("ans-usia").value=usia;
    document.getElementById("ans-lokasi").value=lokasi;
    document.getElementById("ans-year").value=year;
    document.getElementById("ans-email").value=email;
}

// change section profile to section form
 function changeText(){
    namaBaru = document.getElementById("ans-nama").value;
    roleBaru = document.getElementById("ans-role").value;
    availabilityBaru = document.getElementById("ans-availability").value;
    usiaBaru = document.getElementById("ans-usia").value;
    lokasiBaru = document.getElementById("ans-lokasi").value;
    yearBaru = document.getElementById("ans-year").value;
    emailBaru = document.getElementById("ans-email").value;

    document.getElementById("nama").innerHTML=namaBaru;
    document.getElementById("role").innerHTML=roleBaru;
    document.getElementById("availability").innerHTML=availabilityBaru;
    document.getElementById("usia").innerHTML=usiaBaru;
    document.getElementById("lokasi").innerHTML=lokasiBaru;
    document.getElementById("year").innerHTML=yearBaru;
    document.getElementById("email").innerHTML=emailBaru;
 }