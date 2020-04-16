let name = 'Adam';
// console.log(name);

console.log(`Hello, my dear ${name}`);

// jQuery part

$('p').text('The jQuery part');

$('h1').css('background', 'red');

$('h2').toggleClass('green');
$('p').toggleClass('green');

$('main').append('<p>Added element </p>');
$('main').append('<p>Added second element </p>');

$('#add-button').click(() => {
  $('main').append('<p> Added new P tag </p>');
});

let removeFunction = () => {
  $('main p').remove();
};

$('#remove-button').click(removeFunction);
