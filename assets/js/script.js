let questions = {
    'q1' : 'Deux solutions s’offrent à toi:',
    'q2' : 'D\'après tes souvenirs, l\'issue de secours se trouve à l\'autre bout du bâtiment. Tu prends donc les escaliers lorsque tu entends un bruit inquiétant....',
    'anousone' : 'En t\'approchant, tu apperçois une source de lumière... Quelle surprise! Tu vois Anousone, recroquevillé dans un coin, en train de marmoner des lignes de codes JS. - Malheureux! Toi aussi on t\'a oublié? Je n\'ai pas de réseau non plus et je dois encore finir de corriger mes élèves. Tiens, voilà la clé de la salle des profs.',
    'q4' : 'Ta lâcheté te perdra! Tu tombes face à face avec Nicolas et il t\'embarque dans un Kahoot! Surprise! Son rire sadique résonne dans tout le couloir...',
    'teachersroom' : 'En arrivant à la salle des profs, tu te rends compte qu\'il fait quand même un peu froid.. Mais c\'est le NORD, c\'est un peu normal non ?',
    'q3' : 'Tu découvres pourquoi les profs aiment autant les pauses café et tu as une révélation ! Et si toute cette histoire n\'était qu\'un leurre? Et si tout était le fruit de l\'imagination sadique de l\'agent Smith?',
}

let responses = {
    // q1
    'escape' : 'Essayer de trouver une échappatoire',
    'sleep' : 'Aller pioncer en salle des profs',
    // q2
    'brave' : 'Je suis courageux et je me dirige vers la source de ce bruit',
    'scared' : 'J\'ai un peu peur du noir et je préfère prendre un autre chemin',
    // q3
    'key' : 'Prendre la clé pour aller dormir en salle des profs',
    'teachersroom' : 'S\'installer sur le super fauteuil massant des profs',
    // Pile ou Face
    'live' : 'Choisis la pilule bleue et tout s\'arrête, après tu pourras faire de beaux rêves et penser ce que tu veux',
    'die' : 'Choisis la pilule rouge : tu restes au Pays des Merveilles et on descend avec le lapin blanc au fond du gouffre',
    'dead': 'Pas de bol! Le chauffage a également été coupé! On te retrouve congelé au petit matin!',
    'alive' : 'On te retrouve sain et sauf au petit matin. Et surtout personne ne cherche à savoir pourquoi tu étais dans les bras d\'Anousone...',
    // q4
    'kahoot' : 'Tu n\'as pas le choix, c\'est l\'heure de faire ses preuves',
    'lose' : 'Tu arrives dernier! Nicolas est ravi, tu deviens son nouveau sbire!',
}

function pileFace(question){
    let testPiece = Math.random();
    if(testPiece > 0.5){
        return true;
    }
    else{
        return false;
    }
}

// Quand tu clique sur un bouton qui a la classe response
$('.response').click(function () {

    let answerID = $(this).attr('id')
    
    console.log(answerID)
})


$('#button1').click(function() {

    let q2 = 'question 2';

    $('#q1test').text(q2)
})

$('#button2').click(function() {

    let q2 = 'question 3';

    $('#q1test').text(q2)
})


