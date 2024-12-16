function generateMaleName() {
    const maleSyllables = ['el', 'ar', 'in', 'or', 'an'];
    return generateRandomName(maleSyllables);
    
function generateRandomName(syllables) {
    let name = '';
    const nameLength = Math.floor(Math.random() * 3) + 2; // Name length between 2 and 4 syllables
    
    for (let i = 0; i < nameLength; i++) {
        name += syllables[Math.floor(Math.random() * syllables.length)];
    }
    return name;
}
