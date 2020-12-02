$('#q1-block').hide()
$('.q2-block').hide()
$('.q3-block').hide()
$('.q4-block').hide()
$('.anousone-block').hide()
$('.result-block').hide()
$('.teachersroom-block').hide()
$('#beginning').hide()
$('#dead').hide()
$('#alive').hide()
$('#tooeasy').hide()
$('#lumos').hide()
$('#wait').hide()
$('#tooeasy').hide()
$('#plomber').hide()
$('#sadGameOver').hide()
$('#ah').hide()
$('#sadDeath').hide()
$('#happyEnd').hide()
$('#msg-electric').hide()

// Start Game

$('.letsplay').click(function() {
    $('.letsplay').hide()
    $('#q1-block').show()
    $('#sleep-block').hide()
    $('#escape-block').hide()
})

////////////// ESCAPE //////////////////

// Q1
$('#escape').click(function() {
    $('.letsplay').hide()
    $('#q1-block').hide()
    $('.q2-block').show()
})

// Q2
$('#brave').click(function() {
    $('.letsplay').hide()
    $('.q2-block').hide()
    $('.anousone-block').show()
    $('#go-home').hide()

})

// Case Anousone
$('#key').click(function() {
    $('.letsplay').hide()
    $('.anousone-block').hide()
    $('.teachersroom-block').show()
    $('#go-home').hide()
})

$('#chill').click(function() {
    $('.letsplay').hide()
    $('.teachersroom-block').hide()
    $('.q3-block').show()
    $('#go-home').hide()

})

$('#live').click(function() {
    $('.letsplay').hide()
    $('.q3-block').hide()
    $('#alive').show()
    $('#go-home').show()
})

$('#die').click(function() {
    $('.letsplay').hide()
    $('.q3-block').hide()
    $('#dead').show()
})

$('#scared').click(function() {
    $('.letsplay').hide()
    $('.q2-block').hide()
    $('.q4-block').show()
})

$('#kahoot').click(function() {
    $('.letsplay').hide()
    $('.q4-block').hide()
    $('.result-block').show()
    $('#nicolasending').hide()
})

$('#lose').click(function() {
    $('.letsplay').hide()
    $('#lose').hide()
    $('#nicolasending').show()
})

$('#sleep').click(function() {
    $('.letsplay').hide()
    $('#q1-block').hide()
    $('#sleep-block').show()
    $('#tooeasy').show()
    $('#lumos').show()
    $('#wait').show()
})