module.exports = {
    success,
    fail,
    repair
}

function success(item) {
    item.enhancement = (item.enhancement + 1);
    if (item.enhancement < 16){
        item.displayName = `[+${item.enhancement}] ${item.name}`
    }
    else if (item.enhancement === 16){
        item.displayName = `[PRI] ${item.name}` 
    }
    else if (item.enhancement === 17){
        item.displayName = `[DUO] ${item.name}` 
    }
    else if (item.enhancement === 18){
        item.displayName = `[TRI] ${item.name}` 
    }
    else if (item.enhancement === 19){
        item.displayName = `[TET] ${item.name}` 
    }
    else if (item.enhancement === 20){
        item.displayName = `[PEN] ${item.name}` 
    };
    return item;
}

function fail(item) {
    item.enhancement = item.enhancement - 1;
    if (item.enhancement < 15){
        if (item.durability > 25) {
            item.durability = item.durability - 5;
        }
        else {
            item.durability = 20;
        }
        item.displayName = `[+${item.enhancement}] ${item.name}`;
    }
    else {
        if (item.durability > 10) {
            item.durability = item.durability - 10;
        }
        else {
            item.durability = 0;
        };
        if (item.enhancement === 16){
           item.displayName = `[PRI] ${item.name}` 
        }
        else if (item.enhancement === 17){
            item.displayName = `[DUO] ${item.name}` 
         }
        else if (item.enhancement === 18){
            item.displayName = `[TRI] ${item.name}` 
         }
        else if (item.enhancement === 19){
            item.displayName = `[TET] ${item.name}` 
        };
    }
    return item;
}

function repair(item) {
    item.durability = 100;
    return item;
}