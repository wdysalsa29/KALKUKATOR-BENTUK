function hitungLuas(){
    alas=document.getElementById("txtAlas").value;
    tinggi=document.getElementById("txtTinggi").value;
    Luas=1/2*alas*tinggi;
    document.getElementById("txtLuas").value = Luas;
}

function hitungTinggi(){
    alas=document.getElementById("txtAlas").value;
    luas=document.getElementById("txtLuas").value;
    Tinggi=(luas*2)/alas;
    document.getElementById("txtTinggi").value = Tinggi;
}

function hitungAlas(){
    tinggi=document.getElementById("txtTinggi").value;
    luas=document.getElementById("txtLuas").value;
    Alas=(luas*2)/tinggi;
    document.getElementById("txtAlas").value = Alas;
}
function hitung(){
    alas=document.getElementById("txtAlas").value;
    tinggi=document.getElementById("txtTinggi").value;
    luas=document.getElementById("txtLuas").value;

    if(alas === ''){
        hitungAlas()
    } else if(tinggi === ''){
        hitungTinggi()
    } else {
        hitungLuas()
    }

}
