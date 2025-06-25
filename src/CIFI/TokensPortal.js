let tokensPortal = {
    verticalCells: 0,
    horizontalCells: 0,
    pageText: 1.8,
    headerText: 1.8,
    labelText: 0.9,
    displayText: 1.4,
    buttonText: 1.7,
    inputText: 1,
    activePage: '',
    pages: {
        list: ['shop'],
        shop: {
            id: 'shop',
            text: 'Tokens Upgrades',
            color: '#FF0054',
            pagerSize: { width: 15, height: 2 },
            pagerLeft: 1,
            headers: [
                {
                    text: 'Tier 1',
                    left: 1, top: 11,
                    height: 3, width: 20
                },
                {
                    text: 'Tier 2',
                    left: 31, top: 11,
                    height: 3, width: 20
                },
                {
                    text: 'Tier 3',
                    left: 1, top: 22,
                    height: 3, width: 20,
                }
            ],
            labels: [
                {
                    text: 'Tokens Boost',
                    left: 1, top: 15,
                    height: 3, width: 10
                }
            ],
            inputs: [],
            checkboxes: [],
            displays: [],
            buttons: [],
            toggles: [],
        }
    }
}

function tokenUnlocked(id) {
    let key = GameDB.tokens[id].unlock;
    if (key.length == 3) {
        return playerData.generators[key] > 0;
    }
    if (key.length < 10) {
        return playerData.ships[key].unlocked;
    }
    if (key.endsWith("Tier1")) {
        // 10000
        return Object.entries(playerData.tokens).reduce((a,b,i) => {
            if (i >= 0 && i < 12) return a + b;
            return a;
        },0) > 10000;
    }
    if (key.endsWith("Tier2")) {
        // 30000
        return Object.entries(playerData.tokens).reduce((a,b,i) => {
            if (i >= 0 && i < 19) return a + b;
            return a;
        },0) > 30000;
    }
    return false;
}

function calcTokenCost(id) {
    let obj = GameDB.tokens[id];
    let lvl = playerData.tokens[id];

    if (lvl < obj.max)
        return obj.cost + (obj.scalar * lvl);

    return Infinity;
}

function calcTokenPower(id) {
    if (!tokenUnlocked(id)) return 0;

    let cost = calcTokenCost(id);
    if (cost === Infinity) return 0;

    let bonus = GameDB.tokens[id].bonus;
    let prio = playerData.priorities;

    let cells = bonus.MK1 * bonus.MK2 * bonus.MK3 * bonus.MK4 * bonus.MK5 * bonus.MK6 * bonus.MK7 * bonus.MK8;
    
    let p = Math.pow(cells,prio.CELLS) * Math.pow(bonus.MP,prio.MP) * Math.pow(bonus.SHARDS,prio.SHARDS) * Math.pow(bonus.RP,prio.RP) * Math.pow(bonus.AP,prio.AP);

    return Math.pow(10,p) / cost;
}

function acquireSuggestedTokenUpgrade(upgrades, canBuy) {
    if (!upgrades) upgrades = Object.keys(playerData.tokens).map(key => {
        return {
            id: key,
            cost: calcTokenCost(key),
            power: calcTokenPower(key)
        }
    });

    if (typeof canBuy !== 'function') canBuy = () => true;

    upgrades.sort((a,b) => b.power - a.power);

    if (canBuy(upgrades[0].cost)) {
        playerData.tokens[upgrades[0].id]++;
        return upgrades[0];
    }

    return null;
}

function spendTokens(amt) {
    let canBuy = cost => cost < amt;
    let summary = {};

    while (amt > 0) {
        let upgrade = acquireSuggestedTokenUpgrade(null,canBuy);

        if (!upgrade) break;

        amt -= upgrade.cost;
        if (!summary[upgrade.id]) summary[upgrade.id] = 1;
        else summary[upgrade.id]++;
    }

    //TODO: use summary data to create display

    return amt; // used to update the display after function completion
}