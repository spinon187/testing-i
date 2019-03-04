module.exports = {
    success,
    fail,
    repair
}

function success(item) {
    if(
        (item.type === 'armor' && item.level < 6)
        ||
        (item.type === 'weapon' && item.level < 8)
    ){
        item.level = (item.level + 1);
        item.displayName = `[+${item.level}] ${item.name}`;
        return item;
    } 
}

function fail(item) {
    if (item.level < 15){
        item.level = item.level - 1;
        item.durability = item.durability - 5;
        item.displayName = `[+${item.level}] ${item.name}`;
        return item;
    }
}

function repair(item) {
    item.durability = 100;
    return item;
}