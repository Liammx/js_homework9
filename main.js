let arr = [
    {
        id: Math.random(),
        name: 'lina',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'lera',
        info: {
            school: 'не известно',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'tommy',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'carl',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'kate',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
    {
        id: Math.random(),
        name: 'tobby',
        info: {
            school: '235',
            faculity: 'SMM'
        },
    },
    {
        id: Math.random(),
        name: 'emre',
        info: {
            school: 'ne izvestno',
            faculity: 'programming'
        },
    },
    {
        id: Math.random(),
        name: 'can',
        info: {
            school: '444',
            faculity: 'Dizayn'
        },
    },
    {
        id: Math.random(),
        name: 'miranda',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },

    {
        id: Math.random(),
        name: 'lina',
        info: {
            school: '777',
            faculity: '3dsmax'
        },
    },
    {
        id: Math.random(),
        name: 'mirana',
        info: {
            school: '5555',
            faculity: 'Backend'
        },
    },
]

let categories = [
    {
        course: ' SMM',
        count: 0
    },
    {
        course: 'PROGRAMMING',
        count: 0
    },
    {
        course: '     3DSMAX',
        count: 0
    },
    {
        course: ' DIZAYN',
        count: 0
    },
    {       
        course: '   BACKEND',
        count: 0
    },
]


for(let i = 0; i < arr.length; i++) {
    // console.log(arr);
    if(arr[i].info.faculity === 'SMM') {
        categories[0].count++
    }

    if(arr[i].info.faculity === 'programming') {
        categories[1].count++
    }

    if(arr[i].info.faculity === '3dsmax') {
        categories[2].count++
    }

    if(arr[i].info.faculity === 'Dizayn') {
        categories[3].count++
    }
    if(arr[i].info.faculity === 'Backend') {
        categories[4].count++
    }
}

console.log('SMMlar', categories[0].count, 'have got');
console.log('Progromistlar', categories[1].count, 'have got');
console.log('3dsmaxlar', categories[2].count, 'have got');
console.log('Dizaynerlar', categories[3].count, 'have got');
console.log('Backendlar', categories[4].count, 'have got');


