const companyConfig = {
    workers: [
        { name: 'Lubomierz Borkowskin' },
        { name: 'Anastazy Szczepańskin' },
        { name: 'Leokadia Nowodwroskaj' }

    ],
    actions: [
        { value: 'Shopping', description: 'Prepare shopping for company', type: 'shopping' },
        { value: 'Car refueling', description: 'Refuel company car', type: 'refueling' },
        { value: 'Products selling', description: 'Sell company own products for customers', type: 'selling' }
    ],
    resources: {
        availableMoneys: 22424,
        shopLimit: 10,
        availableProducts: 100,
        soldProducts: 0
    }
}

export default menuConfig;