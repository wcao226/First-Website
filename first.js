// var nameSubmit = prompt("What is your name?");

$('#nameEnter').on('click', function(){
    var nameSubmit = $('#name').val();
    var playerJoin = 'Welcome ' + nameSubmit + ' player #420 to Squid Game!';
    $('#welcome').text(playerJoin);
})