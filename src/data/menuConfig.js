const menuConfig = {
    navItems: [
        {
            value: 'homepage',
            text: 'Home',
            details: 'You are at homepage, try some of functionality in this application'
        },
        {
            value: 'wikipedia',
            text: 'Wikipedia',
            details: 'Type your requesting words and hit enter key to check some short details provided by Wikipedia API'
        },
        {
            value: 'youtube',
            text: 'Youtube',
            details: 'Search for video related to your category, then select something from list to prepare video player'
        },
        {
            value: 'outside-requester',
            text: 'Outside API Requester',
            details: 'Play a litte with 3rd API to get some shopping list'
        }
    ],
    MENU_HOMEPAGE: 'homepage',
    MENU_WIKIPEDIA: 'wikipedia',
    MENU_YOUTUBE: 'youtube',
    MENU_OUTSIDE_REQUESTER: 'outside-requester'
}

export default menuConfig;