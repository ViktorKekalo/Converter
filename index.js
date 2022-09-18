/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

//VARIABLES

let amount = document.getElementById("amount")
const convertBtn = document.getElementById("convert-btn")

const lengthBox = document.getElementById("length-box")
const volumeBox = document.getElementById("volume-box")
const massBox = document.getElementById("mass-box")

const checkLength = document.getElementById("length")
const checkVolume = document.getElementById("volume")
const checkMass = document.getElementById("mass")

const mTF = document.getElementById("meters-to-feet")
const fTM = document.getElementById("feet-to-meters")

const lTG = document.getElementById("liters-to-gallons")
const gLT = document.getElementById("gallons-to-liters")

const kTP = document.getElementById("kilo-to-pounds")
const pTK = document.getElementById("pounds-to-kilo")

const errorBox = document.getElementById("error")

const length = 3.281
const volume = 0.264
const mass = 2.204

//FUNCTIONS

function meterToFoot() {
    let mTFRes = amount.value * length
    let fTMRes = amount.value / length
    mTF.textContent = `${amount.value} meters = ${mTFRes.toFixed(2)} feet`
    fTM.textContent = `${amount.value} feet = ${fTMRes.toFixed(2)} meters`
}
function literToGallon() {
    let lTGRes = amount.value * volume
    let gLTRes = amount.value / volume
    lTG.textContent = `${amount.value} liters = ${lTGRes.toFixed(2)} gallons`
    gLT.textContent = `${amount.value} gallons = ${gLTRes.toFixed(2)} liters`
}
function kiloToPound() {
    let kTPRes = amount.value * mass
    let pTKRes = amount.value / mass
    kTP.textContent = `${amount.value} kilograms = ${kTPRes.toFixed(2)} pounds`
    pTK.textContent = `${amount.value} pounds = ${pTKRes.toFixed(2)} kilograms`
}
function ValidateNumber() {
    var numberFormat = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    if (amount.value.match(numberFormat)) {
        amount.focus();
        return true;
    }
    else {
        //alert("You have entered an invalid number amount!");
        errorBox.classList.add('invalid')
        amount.focus();
        return false;
    }
}

//FINAL

convertBtn.addEventListener("click", function renderRes() {
    ValidateNumber()

    if (checkLength.checked && ValidateNumber) {
        lengthBox.classList.remove('hide-res')
        meterToFoot()
    }
    if (checkVolume.checked && ValidateNumber) {
        volumeBox.classList.remove('hide-res')
        literToGallon()
    }
    if (checkMass.checked && ValidateNumber) {
        massBox.classList.remove('hide-res')
        kiloToPound()
    }
    //ValidateNumber()
})