/**
    
    Duration gif: 13500ms

    Animation stages 
        1- Girl house and letters
        2- Bubbles and button
**/
// Commons

var s = Snap("#bubbles");
const bubbles = Snap.selectAll('circle.bubble yellow');

bubbles.forEach( function(elem,i) {
    elem.attr({
        strokeWidth: 1
    });
});

var randomMovement = function () {
    return anime.random(-5, 5) + 'px'
};

var randomSpeed = function () {
    return anime.random(1000, 5000) + 'rem'
};
var gifDuration = 16660;
var textLetterCount = 8;

// Content text
var textWrapper = document.querySelector('.text-content');
textWrapper.innerHTML = textWrapper.textContent.replace(/(\w+)|(\?)/g, "<span class='word'>$&</span>");
var totalLetter = 0;

console.log(totalLetter);
anime.timeline({ loop: true })
    .add({
        targets: '.text-content',
        opacity: [0, 1],
        duration: 300,
        easing: "easeOutExpo",
        delay: 0,
    })
    .add({
        targets: '.text-content .word',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 200 * (i + 1)
    })
    // Out
    .add({
        targets: '.text-content',
        opacity: [1, 0],
        duration: 300,
        easing: "easeOutExpo",
        delay: gifDuration - (3380 + (textLetterCount * 200))
    });
// Bubbles
anime.timeline({ loop: true })
    .add({
        targets: '#bubbles',
        opacity: [0, 1],
        duration: 300,
        easing: "easeOutExpo",
        delay: 2500 // delay gif
    })
    .add({
        targets: '#bubbles circle',
        translateX: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
        translateY: [{ value: randomMovement }, { value: randomMovement }, { value: randomMovement }],
        easing: "easeInOutQuad",
        duration: 13660,
        // delay: (el, i) => 50 * (i + 1)
    })
// Button
anime({
    opacity: 0,
    targets: '#watch-video-banner',
    scale: [2, 1],
    opacity: [0, 1],
    easing: 'linear',
    duration: 500,
    loop: true,
    delay: 2500, // delay gif,
    endDelay: 13460
});
