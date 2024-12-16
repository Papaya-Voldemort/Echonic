function translateWord(word) {
    const translations = {
        'i': 'elith',
        'you': 'aril',
        'he': 'orin',
        'she': 'anith',
        'we': 'ithul',
        'they': 'enith'
        'god': 'eloth ki'
    };

    return translations[word] || 'No translation available';
}
