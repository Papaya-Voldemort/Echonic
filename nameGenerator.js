function generateMaleName() {
    const maleSyllables = ['el', 'ar', 'in', 'or', 'an'];
    return generateRandomName(maleSyllables);
}

function generateFemaleName() {
    const femaleSyllables = ['ith', 'ul', 'en', 'as', 'ith'];
    return generateRandomName(femaleSyllables);
}

function generateCityName() {
    const citySyllables = ['dor', 'thal', 'mir', 'lan', 'nor'];
    return generateRandomName(citySyllables);
}

function generateIslandName() {
    const islandSyllables = ['ara', 'nua', 'tala', 'sara', 'luna'];
    return generateRandomName(islandSyllables);
}

function generateRandomName(syllables) {
    let name = '';
    const nameLength = Math.floor(Math.random() * 3) + 2; // Name length between 2 and 4 syllables
    
    for (let i = 0; i < nameLength; i++) {
        name += syllables[Math.floor(Math.random() * syllables.length)];
    }
    return name;
}
