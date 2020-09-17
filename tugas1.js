const cekPalindrom = str=>{
    //validasi harus String
    if(typeof str != 'string'){
      return console.log('bukan string, masukkan parameter String');
    }else{
        let string = str.toLowerCase(), output = '';
      //reverse string
        for(i = string.length - 1; i>=0; i--){
          output += string[i]
        }
      //cek palindrome
        if(string===output){
          console.log('Parameter Palindrom');
        }else{
          console.log('Parameter Bukan Palindrom');
        }
    } //endifelse
}
cekPalindrom('KAtak')