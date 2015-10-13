
var Lower  = {
    0: '',
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
};
var Higher = {
    0: '',
    1: 'X',
    2: 'XX',
    3: 'XXX',
    4: 'XL',
    5: 'L'
};

var graphicNumbers = {
    'I':['#### ',
        ' ##  ',
        ' ##  ',
        ' ##  ',
        '#### '],
    'V':['##    ## ',
        '##    ## ',
        ' ##  ##  ',
        '  ####   ',
        '   ##    '],
    'X':['##   ## ',
        ' ## ##  ',
        '  ###   ',
        ' ## ##  ',
        '##   ## '],
    'L':['##      ',
        '##      ',
        '##      ',
        '##      ',
        '####### '],
    ':':['   ',
        '## ',
        '   ',
        '## ',
        '   '],
    '-':['         ',
        '         ',
        '######## ',
        '         ',
        '         ']
};



var hours = process.argv[2];
var minutes = process.argv[3];

var isInt = function(n) {return +n === parseInt(n);};
if(!isInt(hours) || !isInt(minutes)){
    process.exit(1);
} else {

    var time = getRomanTime(hours, minutes);
    console.log(time);
    printNumber(time);
}


function getRomanTime(h, m){
    if (0 < h && h < 23 && 0 < m && m < 59) {
        var h1 = (hours / 10) | 0, h2 = hours % 10;
        var m1 = (minutes / 10) | 0, m2 = minutes % 10;
        h = Higher[h1] + Lower[h2];
        m = Higher[m1] + Lower[m2];
        console.log();
        if (h.length == 0){
            h = '-';
        }
        if (m.length == 0){
            m = '-';
        }
        return h + ':' + m;
    } else {
        console.log("Время указано не верно");
    }
}

function printNumber(time){
    var result = ['', '', '', '', ''];
    var c = '', add = [];
    for (var i=0; i<time.length; i++){
        c = time.charAt(i);
        add = graphicNumbers[c];
        for(var j=0; j<5; j++){
            result[j] += add[j];
        }
    }
    for(i=1; i<5; i++){
        result[0] +='\n' + result[i];
    }
    console.log(result[0]);
}


