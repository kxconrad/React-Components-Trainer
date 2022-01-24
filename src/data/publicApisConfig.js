const configuration = [
    {
        category: "dogs",
        categoryTxt: "Dogs",
        subCategories: [
            {
                value: "dog-facts",
                valueTxt: "Dog Facts",
                apiUrl: "https://kinduff.github.io/dog-api/"
            },
            {
                value: "dog-api",
                valueTxt: "Dog API",
                apiUrl: "https://dog.ceo/api/breeds/image/random"
            }

        ]

    },
    {
        category: "cats",
        categoryTxt: "Cats",
        subCategories: [
            {
                value: "cat-facts",
                valueTxt: "Cat Facts",
                apiUrl: "https://cat-fact.herokuapp.com/facts"
            },
            {
                value: "cataas",
                valueTxt: "Cataas",
                apiUrl: "https://cataas.com/cat"
            }

        ]

    }
];

export default configuration;