var i = 0;

$('.roll').on('click', function(){
    i++;
    const dice = Math.trunc(Math.random() * 6) + 1;
    $('.dicePic').text('')
    $('.dicePic').append(`<img src="diceRoll/dice-${dice}.png"/>`);
    // dicePic = `diceRoll/dice-${dice}.png`
    if (dice !== 6){
        if (i % 2 == 0) {
            $('#currentScore0').text(dice)
        }
        else if (i % 2 == 1) {
            $('#currentScore1').text(dice)
        }
    }
    else if (dice == 6) {
        // $('.roll').disable = true;
        if (i % 2 == 0) {
            $('#currentScore0').text('Lost')
            // $('.main').text($('.win'))
        }
        else if (i % 2 == 1) {
            $('#currentScore1').text('Lost')
        }
    }
})

$('.newGame').on('click', function(){
    $('#currentScore0').text('0');
    $('#currentScore1').text('0');
    $('.dicePic').text('')
})
