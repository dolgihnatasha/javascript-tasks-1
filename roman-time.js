var lower  = {
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
var higher = {
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

var isInt = function(n) {return Number(n) === parseInt(n);};
if(!isInt(hours) || !isInt(minutes)){
    process.exit(1);
} else {

    var time = getRomanTime(hours, minutes);
    console.log(time);
    printNumber(time);
}



function getRomanTime(hours, minutes){
    if (0 < hours && hours < 23 && 0 < minutes && minutes < 59) {
        var hours1 = Math.floor(hours / 10), hours2 = hours % 10;
        var minutes1 = Math.floor(minutes / 10), minutes2 = minutes % 10;
        hours = higher[hours1] + lower[hours2];
        minutes = higher[minutes1] + lower[minutes2];
        if (hours.length === 0){
            hours = '-';
        }
        if (minutes.length === 0){
            minutes = '-';
        }
        return hours + ':' + minutes;
    } else {
        console.log("Время указано не верно");
    }
}

function printNumber(time){
    var result = ['', '', '', '', ''];
    var char = '', add = [];
    for (var i=0; i<time.length; i++){
        char = time.charAt(i);
        add = graphicNumbers[char];
        for(var j=0; j<5; j++){
            result[j] += add[j];
        }
    }
    for(i=1; i<5; i++){
        result[0] +='\n' + result[i];
    }
    console.log(result[0]);
}
