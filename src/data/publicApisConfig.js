const configuration = [
    {
        value: "dogs",
        categoryTxt: "Dogs",
        subCategories: [
            {
                value: "dog-facts",
                valueTxt: "Dog Facts",
                url: "https://kinduff.github.io/dog-api",
                api: "http://dog-api.kinduff.com/api",
                endpoint: "/facts?number=5"
            },
            {
                value: "dog-api",
                valueTxt: "Dog API",
                url: "https://dog.ceo/dog-api/",
                api: "https://dog.ceo/api",
                endpoint: "/breeds/image/random"
            }

        ]

    },
    {
        value: "cats",
        categoryTxt: "Cats",
        subCategories: [
            {
                value: "cat-facts",
                valueTxt: "Cat Facts",
                url: "https://cat-fact.herokuapp.com",
                api: "https://cat-fact.herokuapp.com",
                endpoint: "/facts"
            },
            {
                value: "cataas",
                valueTxt: "Cataas",
                url: "https://cataas.com/",
                api: "https://cataas.com",
                endpoint: "/cat?json=true"
            }

        ]

    }
];

export default configuration;