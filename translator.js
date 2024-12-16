function translateWord(word) {
    const translations = {
        'i': 'elith',
        'you': 'aril',
        'he': 'orin',
        'she': 'anith',
        'we': 'ithul',
        'they': 'enith'
    };

    return translations[word] || 'No translation available';
}
