const readline = require('readline-sync')

function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm() 
    content.prefix = askAndReturnPrefix()
    
    function askAndReturnSearchTerm() {
        return readline.question('type a wiki-search term: ')
    }

    function askAndReturnPrefix() {
        const prefixes = ['who is', 'what is', 'h of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose an option: ')
        const selectedPrefixTxt = prefixes[selectedPrefixIndex]

        return selectedPrefixTxt
    }

    console.log(content)
};

start()