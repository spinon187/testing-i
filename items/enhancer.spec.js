const {success, fail, repair} = require('./enhancer.js');

const testItem1 = {
    name: 'Scimitar of Tedium',
    enhancement: 4,
    type: 'weapon',
    displayName: `[+${this.enhancement}] ${this.name}`,
    durability: 100
}

const testItem2 = {
    name: 'Scimitar of Tedium',
    enhancement: 10,
    type: 'weapon',
    displayName: `[+${this.enhancement}] ${this.name}`,
    durability: 100
}

const testItem3 = {
    name: 'Scimitar of Tedium',
    enhancement: 19,
    type: 'weapon',
    displayName: `[TET] ${this.name}`,
    durability: 100
}

const testItem4 = {
    name: 'Scimitar of Tedium',
    enhancement: 19,
    type: 'weapon',
    displayName: `[TET] ${this.name}`,
    durability: 9
}

const testItem5 = {
    name: 'Scimitar of Tedium',
    enhancement: 15,
    type: 'weapon',
    displayName: `${this.enhancement} ${this.name}`,
    durability: 24
}

const testItem6 = {
    name: 'Scimitar of Tedium',
    enhancement: 15,
    type: 'weapon',
    displayName: `${this.enhancement} ${this.name}`,
    durability: 100
}

const successTest1 = {
    name: 'Scimitar of Tedium',
    enhancement: 5,
    type: 'weapon',
    displayName: `[+5] Scimitar of Tedium`,
    durability: 100
}

const successTest2 = {
    name: 'Scimitar of Tedium',
    enhancement: 20,
    type: 'weapon',
    displayName: `[PEN] Scimitar of Tedium`,
    durability: 100
}

const successTest3 = {
    name: 'Scimitar of Tedium',
    enhancement: 16,
    type: 'weapon',
    displayName: `[PRI] Scimitar of Tedium`,
    durability: 100
}

const failTest1 = {
    name: 'Scimitar of Tedium',
    enhancement: 9,
    type: 'weapon',
    displayName: `[+9] Scimitar of Tedium`,
    durability: 95
}

const failTest2 = {
    name: 'Scimitar of Tedium',
    enhancement: 18,
    type: 'weapon',
    displayName: `[TRI] Scimitar of Tedium`,
    durability: 0
}

const failTest3 = {
    name: 'Scimitar of Tedium',
    enhancement: 14,
    type: 'weapon',
    displayName: `[+14] Scimitar of Tedium`,
    durability: 20
}

const repairTest1 = {
    name: 'Scimitar of Tedium',
    enhancement: 9,
    type: 'weapon',
    displayName: `[+9] Scimitar of Tedium`,
    durability: 100
}

describe('enhancer.js', () => {
    describe('success()', () => {
        test('upgrades item', () =>{
            expect(success(testItem1)).toEqual(successTest1);
            expect(success(testItem3)).toEqual(successTest2);
            expect(success(testItem6)).toEqual(successTest3);
        });
    });

    describe('fail()', () => {
        test('downgrades item', () => {
            expect(fail(testItem2)).toEqual(failTest1);
            expect(fail(testItem4)).toEqual(failTest2);
            expect(fail(testItem5)).toEqual(failTest3);
        });
    });

    describe('repair()', () => {
        test('repairs item', () => {
            expect(repair(failTest1)).toEqual(repairTest1);
        })
    })
})

