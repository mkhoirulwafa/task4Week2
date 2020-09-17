(num => {
    if (typeof num !== 'number'){console.log('Harus diisi "DERET ANGKA"'); return}
    let array = [], smt = [], hasilAkhir = ''
    let sNum = num.toString(), pushClear =()=>{array.push(smt); smt= []}
    for (let i = 0; i < sNum.length; i++) {
        if (sNum[i] !== '0') {
            smt.push(sNum[i])
            if (!sNum[i + 1]) {
                pushClear()
            }
        } else {
            pushClear()
        }
    }
    for (let j = 0; j < array.length; j++) {
        array[j].sort()
        for (let k = 0; k < array[j].length; k++) {
            hasilAkhir += array[j][k]
        }
    }
    console.log(parseInt(hasilAkhir))
})(1734802491350518)//input param