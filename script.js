import industries from './res/industries.js';
import ideas from './res/ideas.js';



// Random Number for the Color <-GENERAL for all colors
const randomColorNumber = () => randomNumber(255);
// Random Number for the Angle <- GENERAL for all angles
const randomAngle = () => randomNumber(360);
// Random Number for the Industries Array
const randomIndustry = () => randomNumber(industries.length);
// Random Number for the Ideas Array
const randomIdea = () => randomNumber(ideas.length);


// Getting DOM element
// Industry content
const industryContent = $('.industry-content');
// Idea content
const ideaContent = $('.idea-content');
// Primary color
const primaryColorDisplay = $('.primary-color-display');
// Secondary color
const secondaryColorDisplay = $('.secondary-color-display');


// FUNCTIONS


// Function to create a Random Number with a argument as the limit of the number
const randomNumber = (number) => {
    return Math.floor(Math.random() * number);
};

// To check if the gradient key is enabled is enable or disabled.
const gradientChecker = () => {
    if ($('.hand-icon').hasClass('rotate-icon')) {
        return false;
    } else {
        return true;
    }
};

// Toggle functionality for the gradient ask hand icon
$('.hand-icon').click(() => {
    console.log(gradientChecker())
    $('.hand-icon').toggleClass('rotate-icon');
});

// FUNCTIONS END HERE ============




//   Things Needed
// 1. randomized industry value;
const randomizeIndustry = () => {
    return industries[randomIndustry()];
};
// 2. randomized Idea;
const randomizeIdea = () => {
    return ideas[randomIdea()];
};
// 3. randomized primary color;
const primaryColorRandom = () => {
    return (`rgb(${randomColorNumber()},${randomColorNumber()},${randomColorNumber()})`)
};
// 4. randomized secondary color;
const secondaryColorRandom = () => {
    return (`rgb(${randomColorNumber()},${randomColorNumber()},${randomColorNumber()})`)
}


// TO DO
// 1. The Generate button should first enable the modal of the generator, when clicked first time.
// func Generate button should reset everything (industry, what page, primary color, secondary color).
//      It should also check always, if the gradient button is enable or not.
$(".generate").click(() => {
    updateText();
    if ($('.generated').hasClass('display-none')) {
        $('.generated').removeClass('display-none animate__wobble');
        $('.help').addClass('display-none')
    }
    if (gradientChecker()) {
        console.log("Gradient Mode");
        industryContent.html(`${randomizeIndustry()}`);
        ideaContent.html(`${randomizeIdea()}`);
        primaryColorDisplay.css('background', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);
        secondaryColorDisplay.css('background', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);
    } else {
        console.log("Not Gradient Mode");
        industryContent.html(`${randomizeIndustry()}`);
        ideaContent.html(`${randomizeIdea()}`);
        primaryColorDisplay.css('background', `${primaryColorRandom()}`);
        secondaryColorDisplay.css('background', `${secondaryColorRandom()}`);
    }
    console.log(`Primary Color : ${primaryColorRandom()}, Secondary Color: ${secondaryColorRandom()}, Industry: ${randomizeIndustry()}, Idea: ${randomizeIdea()}`)
})

// 2. Reload buttons for the primary & secondary color, industry, what page.
//      The Reload buttons should run randomize on that element.
// Reload button for Industry content
const industryReload = $('.industry > .reload');
industryReload.click(() => {
    updateText();
    industryContent.html(`${randomizeIndustry()}`);
});
// Reload button for Idea content
const ideaReload = $('.idea > .reload');
ideaReload.click(() => {
    updateText();
    ideaContent.html(`${randomizeIdea()}`);
});
// Reload button for primary color
const primaryReload = $('.primary-color > .reload');
primaryReload.click(() => {
    updateText();
    if (gradientChecker()) {
        primaryColorDisplay.css('background', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);
    } else {
        primaryColorDisplay.css('background', `${primaryColorRandom()}`);
    }
});
// Reload button for secondary color
const secondaryReload = $('.secondary-color > .reload');
secondaryReload.click(() => {
    updateText();
    if (gradientChecker()) {
        secondaryColorDisplay.css('background', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);
    } else {
        secondaryColorDisplay.css('background', `${secondaryColorRandom()}`);
    }
});


// 3. Click to copy the color
//      When clicked on that div, it should pick up whatever the color is on the div.
primaryColorDisplay.click(() => {
    if (gradientChecker()) {
        navigator.clipboard.writeText(primaryColorDisplay.css('background-image'));
        alert('Copied Primary Color!');
    } else {
        navigator.clipboard.writeText(primaryColorDisplay.css('background-color'));
        alert('Copied Primary Color!');
    }
});

secondaryColorDisplay.click(() => {
    if (gradientChecker()) {
        navigator.clipboard.writeText(secondaryColorDisplay.css('background-image'));
        alert('Copied Secondary Color!');
    } else {
        navigator.clipboard.writeText(secondaryColorDisplay.css('background-color'));
        alert('Copied Secondary Color!');
    }
});


const updateText = () => {
    const spans = document.getElementsByClassName('text-format')[0].getElementsByTagName('span');
    spans[0].innerHTML = ideaContent.html();
    spans[1].innerHTML = industryContent.html();
    // if (gradientChecker()) {
    //     spans[2].innerHTML = primaryColorDisplay.css('background-image');
    //     spans[3].innerHTML = secondaryColorDisplay.css('background-image');
    // } else {
    //     spans[2].innerHTML = primaryColorDisplay.css('background-color');
    //     spans[3].innerHTML = secondaryColorDisplay.css('background-color');
    // }
};



// Animations

// Reload Click Animation
$('.reload').click(() => {
    console.log('clicked')
    $('.reload').animate({ transform: "rotatez(300deg)" }, 500)
})

// Button Gradient Change

setInterval(() => {
    $(".button-area").css('background-image', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);
}, 100);
// $(".button-area").css('background-image', `linear-gradient(${randomAngle()}deg,${primaryColorRandom()},${secondaryColorRandom()})`);