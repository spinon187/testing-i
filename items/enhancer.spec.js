const {success, fail, repair} = require('./enhancer.js');

const testItem1 = {
    name: 'Scimitar of Tedium',
    level: 4,
    type: 'weapon',
    displayName: `[+${this.level}] ${this.name}`,
    durability: 100
}

const testItem2 = {
    name: 'Scimitar of Tedium',
    level: 10,
    type: 'weapon',
    displayName: `[+${this.level}] ${this.name}`,
    durability: 100
}

const successTest1 = {
    name: 'Scimitar of Tedium',
    level: 5,
    type: 'weapon',
    displayName: `[+5] Scimitar of Tedium`,
    durability: 100
}

const failTest1 = {
    name: 'Scimitar of Tedium',
    level: 9,
    type: 'weapon',
    displayName: `[+9] Scimitar of Tedium`,
    durability: 95
}

const repairTest1 = {
    name: 'Scimitar of Tedium',
    level: 9,
    type: 'weapon',
    displayName: `[+9] Scimitar of Tedium`,
    durability: 100
}

describe('enhancer.js', () => {
    describe('success()', () => {
        test('upgrades item', () =>{
            expect(success(testItem1)).toEqual(successTest1);
        });
    });

    describe('fail()', () => {
        test('downgrades item', () => {
            expect(fail(testItem2)).toEqual(failTest1);
        });
    });

    describe('repair()', () => {
        test('repairs item', () => {
            expect(repair(failTest1)).toEqual(repairTest1);
        })
    })
})

