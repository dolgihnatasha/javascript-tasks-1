var hours = process.argv[2];
var minutes = process.argv[3];

// Немного замечательного кода и магии

if (0 < hours < 23 && 0 < minutes < 59) {
    var h1 = (hours / 10) | 0, h2 = hours % 10;
    var m1 = (minutes / 10) | 0, m2 = minutes % 10;
    var h = getHigher(h1) + getLower(h2);
    var m = getHigher(m1) + getLower(m2);
    if (h.length == 0){
        h = '-'
    }
    if (m.length == 0){
        m = '-'
    }
    var s = h + ':' + m;
    console.log(s);
    printNumber(s);


} else {
    console.log("Время указано не верно");
}
function getLower(num){
    switch (num){
        case 0: return '';
        case 1: return 'I';
        case 2: return 'II';
        case 3: return 'III';
        case 4: return 'IV';
        case 5: return 'V';
        case 6: return 'VI';
        case 7: return 'VII';
        case 8: return 'VIII';
        case 9: return 'IX';
    }
}
function getHigher(num){
    switch (num){
        case 0: return '';
        case 1: return 'X';
        case 2: return 'XX';
        case 3: return 'XXX';
        case 4: return 'XL';
        case 5: return 'L';
    }
}

function printNumber(res){
    var result = ['', '', '', '', ''], c='', add=[];
    for (var i=0; i<res.length; i++){
        c = res.charAt(i);
        switch(c){
            case 'I': add = getI();break;
            case 'V': add = getV();break;
            case 'X': add = getX();break;
            case 'L': add = getL();break;
            case ':': add = getDelim(); break;
            case '-': add = getZero(); break;
        }
        for(var j=0; j<5; j++){

            result[j] += add[j];
        }
        add=[]
    }
    for(i=1; i<5; i++){
        result[0] +='\n' + result[i];
    }
    console.log(result[0])
}
function getI(){
    return ['#### ', ' ##  ', ' ##  ', ' ##  ', '#### ']
}
function getV(){
    return ['##    ## ', '##    ## ', ' ##  ##  ', '  ####   ', '   ##    ']
}
function getX(){
    return ['##   ## ', ' ## ##  ', '  ###   ', ' ## ##  ', '##   ## ']
}
function getL(){
    return ['##      ','##      ','##      ','##      ', '####### ']
}
function getDelim(){
    return ['   ', '## ', '   ', '## ', '   ']
}
function getZero(){
    return ['         ','         ','######## ','         ','         ']
}
