function perkalian(angka){
    var output=''
    for(i=1;i<=10;i++){
        output+=angka+'X'+i+'='+(angka*i)
        output+='\n'
    }
    return output
}
console.log(perkalian(7))
