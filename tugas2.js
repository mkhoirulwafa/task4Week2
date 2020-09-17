(str=>{
  if(typeof str !== 'string'){
    console.log('kalimat harus STRING'); return}
  output = '';
  array = [];
  for(i = 0; i < str.length; i++ ){
    if(str[i] != ' '){
      output += str[i];
      if(!str[i + 1]){
        array.push(output);
        output = '';
      }
    }else{
      array.push(output);
      output = '';
    }
  }
  for(i=array.length -1; i>=0; i--){
    output += array[i] + ' ';
  }
  console.log(`${str} => ${output}`)
})(123)