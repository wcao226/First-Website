$('#numberEnter1').on('click', function(){
    $('.output').text('');
    var numValue = $('#number1').val();
    if(numValue < 1) {
        alert('Please type in a whole number!')
    }
    for(var i = 0; i + 1 <= numValue; i++){
        $('.output').append('<img src="dalgona.jpg"/>' + (i+1) + '<br>')
    }
});

$('#numberEnter2').on('click', function(){
    $('.output').text('');
    var numValue = $('#number2').val();
    if(numValue < 2) {
        alert('Please type in a whole number greater than 1!')
    }
    for(var i = 0; i + 2 <= numValue; i+=2){
        $('.output').append('<img src="dalgona.jpg"/>' + '<img src="dalgona.jpg"/>' + (i+2) + '<br>')
    }
});

$('.reset').on('click', function(){
    $('.output').text('');
});

// Testing
// .append(document.createTextNode(i+1));
// $('.output').append(finish);
// var breakLine = document.createElement('br');
// $('.output').append(breakLine);

// Count Exercise for Class
// var num = prompt('Enter a number: ')
// for(var i = 0; i <= 10; i++){
//     $('.output').append(i+'<br>');
// }
