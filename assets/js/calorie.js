//Men
//BMR (metric) = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) + 5
//BMR (imperial) = (4.536 × weight in pounds) + (15.88 × height in inches) - (5 × age) + 5

//Women
//BMR (metric) = (10 × weight in kg) + (6.25 × height in cm) - (5 × age in years) - 161
//BMR (imperial) = (4.536 × weight in pounds) + (15.88 × height in inches) - (5 × age) - 161

document.querySelector

function calcBMRMale (weightKg, heightCm, age) {
    return (10 * weightKg) + (6.25 * heightCm) - (5 * age) + 5;
}

function calcBMRFemale (weightKg, heightCm, age) {
    return (10 * weightKg) + (6.25 * heightCm) - (5 * age) - 161;
}

//Convert weight to kilograms
function weightToKg (weight) {
    return weight / 2.205;
}

//Convert given height to inches, then convert to cm
function heightToCm (heightFeet, heightInch) {
    //convert height to inches
    let feetToInch = heightFeet * 12;
    //total inches
    let totalInch = feetToInches + heightInch;
    return totalInch * 2.54;
}

