export default {
    id: '1',
    users: [{
        id: 'u1',
        name: 'Piku',
        imageUri: '',
    }, {
        id: 'u2',
        name: 'crVelox',
        imageUri: '',
    }],
    message: [{
        id: 'm1',
        content: 'How are you piku',
        createdAt: '2020-12-15',
        user: {
            id: 'u1',
            name: 'Piku',
        }
    }, {
        id: 'm2',
        content: 'I am good',
        createdAt: '2020-12-15',
        user: {
            id: 'u2',
            name: 'crVelox',
        }
    },
    {
        id: 'm3',
        content: 'all good kh krghjsdfg sdkghjdkfsjg adfgsdf fdgsdf dfghfgh',
        createdAt: '2020-12-15',
        user: {
            id: 'u1',
            name: 'Piku',
        }
    },
    {
        id: 'm4',
        content: 'all good kh krghjsdfg sdkghjdkfsjg adfgsdf fdgsdf dfghfgh',
        createdAt: '2020-12-15',
        user: {
            id: 'u2',
            name: 'crVeloxx',
        }
    },

    ]
}