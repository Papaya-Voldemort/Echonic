function generateEchonicName() {
    const nameGenerators = [generateMaleName, generateFemaleName, generateCityName, generateIslandName];
    const randomGenerator = nameGenerators[Math.floor(Math.random() * nameGenerators.length)];
    const name = randomGenerator();
    document.getElementById('generatedName').innerText = name.charAt(0).toUpperCase() + name.slice(1);
}

function translateToEchonic() {
    const word = document.getElementById('inputWord').value.toLowerCase();
    const translation = translateWord(word);
    document.getElementById('translation').innerText = translation;
}
