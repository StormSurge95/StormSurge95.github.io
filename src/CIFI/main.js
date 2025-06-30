function openMenu(type) {
    const menu = document.getElementById("menu");

    if (menu.hasChildNodes()) {
        for (const child of menu.children) {
            child.style.display = 'none';
        }
    }

    switch (type) {
        case "settings":
            openSettingsMenu();
            break;
        case "tokens":
            openTokensMenu();
            break;
        case "diamonds":
            openDiamondsMenu();
            break;
        case "mods":
            openModsMenu();
            break;
        case "ships":
            openShipsMenu();
            break;
        case "missions":
            openMissionsMenu();
            break;
        case "gears":
            openGearsMenu();
            break;
    }

    return;
}

function createLabel(style, text, forID) {
    const label = document.createElement("label");
    label.style = style;
    label.innerText = text;
    label.htmlFor = forID;
    return label;
}

function createInput(style, id, val, type="number", step="1") {
    const input = document.createElement("input");
    input.style = style;
    input.type = type;
    input.step = step;
    switch (type) {
        case "number":
            if (step = '1')
                input.inputMode = "numeric";
            else
                input.inputMode = "decimal";
            break;
    }
    input.id = id;
    input.value = val;
    input.addEventListener("change",updateData);
    return input;
}

function createLabelInput(lblStyle, lblText, inpStyle, inpID, val, type, step) {
    const label = createLabel(lblStyle, lblText, inpID);
    const input = createInput(inpStyle, inpID, val, type, step);
    return [label, input];
}

function createH2(text) {
    const h2 = document.createElement("h2");
    h2.innerText = text;
    return h2;
}

function openSettingsMenu() {
    const panel = document.getElementById("menu");

    // change menu title to "SETTINGS"
    let title = document.getElementById("menu-title");
    title.innerText = "SETTINGS";

    // check for main 'settings' window
    let menu = document.getElementById("settings");
    if (menu === null) {
        // create menu if it doesn't exist
        menu = document.createElement("div");
        panel.appendChild(menu);
        menu.id = "settings";

        // create sub-menu 1 (general settings)
        const sub1 = document.createElement("div");
        menu.appendChild(sub1);
        sub1.style = "display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center;";
            
        // create item-1
        const item1 = document.createElement("div");
        item1.appendChild(createH2("Weight Priorities"));
        const itemStyle = "border: 1px solid black; padding: 1rem;";
        item1.style = itemStyle;
        const list1 = document.createElement("div");
        const lstStyle = "display: grid; grid-template-columns: repeat(2, min-content); justify-content: center; justify-items: center; align-items: center; column-gap: 0.5rem; row-gap: 0.5rem; margin: auto; text-wrap: nowrap;";
        list1.style.textWrap;
        list1.style = lstStyle;
        const lblStyle = "font-size: 16px; font-weight: bold; text-align: center;";
        const inpStyle = "height: 1em; width: 5em; text-align: center; margin: auto;";
        const sets1 = [
            ["Cells", "cellWeight", playerData.weights.cells],
            ["Mod\nPoints", "mpWeight", playerData.weights.mods],
            ["Shards", "shardWeight", playerData.weights.shards],
            ["Research\nPoints", "rpWeight", playerData.weights.research],
            ["Academy\nPoints", "apWeight", playerData.weights.academy],
            ["Mission\nMaterials", "matWeight", playerData.weights.materials],
            ["Cost\nReduction", "crWeight", playerData.weights.cost],
            ["Rank\nPoints", "rankWeight", playerData.weights.rank]
        ];
        sets1.forEach(set => {
            list1.append(...createLabelInput(lblStyle, set[0], inpStyle, set[1], set[2]));
        })
        item1.appendChild(list1);
        sub1.appendChild(item1);

        // create item-2
        const item2 = document.createElement("div");
        item2.appendChild(createH2("Player Stats"));
        item2.style = itemStyle;
        const list2 = document.createElement("div");
        list2.style = lstStyle;
        const sets2 = [
            ["Level", "playerLevel", playerData.player.level],
            ["LP Doubler\nBar Fill", "LPBarFill", playerData.player.LPBarFill]
        ];
        sets2.forEach(set => {
            list2.append(...createLabelInput(lblStyle, set[0], inpStyle, set[1], set[2]));
        });
        item2.appendChild(list2);
        sub1.appendChild(item2);

        // create item-3
        const item3 = document.createElement("div");
        item3.appendChild(createH2("Loop Stats"));
        item3.style = itemStyle;
        const list3 = document.createElement("div");
        list3.style = lstStyle;
        const sets3 = [
            ["Ticks\nCompleted", "ticksCount", playerData.stats.ticks],
            ["Loops\nFilled", "loopsCount", playerData.stats.loops],
            ["Loop Resets\nCompleted", "loopResetsCount", playerData.stats.loopResets],
            ["Operations\nCompleted", "operationsCount", playerData.stats.operations],
            ["Studies\nCompleted", "studiesCount", playerData.stats.studies],
            ["Missions\nCompleted", "missionsCount", playerData.stats.missions]
        ];
        sets3.forEach(set => {
            list3.append(...createLabelInput(lblStyle, set[0], inpStyle, set[1], set[2]));
        });
        item3.appendChild(list3);
        sub1.appendChild(item3);

        // create sub-menu 2 (generators/tech/automation settings)
        const sub2 = document.createElement("div");
        menu.appendChild(sub2);
        sub2.style = "display: grid; grid-template-columns: 1fr 1fr 1fr; text-align: center;"

        // create generators list
        const item4 = document.createElement("div");
        item4.appendChild(createH2("Generators"));
        item4.style = itemStyle;
        const list4 = document.createElement("div");
        list4.style = lstStyle;
        list4.appendChild((() => {
            let s = document.createElement("span");
            s.style = lblStyle;
            s.innerText = "Gen";
            return s;
        })());
        list4.appendChild((() => {
            let s = document.createElement("span");
            s.style = lblStyle;
            s.innerText = "Amt Purchased\nManually";
            return s;
        })());
        const sets4 = [
            ["MK1", "manualMK1", playerData.generators.MK1],
            ["MK2", "manualMK2", playerData.generators.MK2],
            ["MK3", "manualMK3", playerData.generators.MK3],
            ["MK4", "manualMK4", playerData.generators.MK4],
            ["MK5", "manualMK5", playerData.generators.MK5],
            ["MK6", "manualMK6", playerData.generators.MK6],
            ["MK7", "manualMK7", playerData.generators.MK7],
            ["MK8", "manualMK8", playerData.generators.MK8]
        ];
        sets4.forEach(set => {
            list4.append(...createLabelInput(lblStyle, set[0], inpStyle, set[1], set[2]));
        })
        item4.appendChild(list4);
        sub2.appendChild(item4);

        // create technology list
        const item5 = document.createElement("div");
        item5.appendChild(createH2("Technology"));
        item5.style = itemStyle;
        const list5 = document.createElement("div");
        list5.style = "display: grid; grid-template-columns: repeat(3, min-content); justify-content: center; column-gap: 0.5rem; row-gap: 1rem; margin: auto;";
        list5.appendChild((() => {
            let s = document.createElement("span");
            s.style = lblStyle;
            s.innerText = "Gen";
            return s;
        })());
        list5.appendChild((() => {
            let s = document.createElement("span");
            s.style = lblStyle;
            s.innerText = "HW";
            return s;
        })());
        list5.appendChild((() => {
            let s = document.createElement("span");
            s.style = lblStyle;
            s.innerText = "SW";
            return s;
        })());
        list5.appendChild(createLabel(lblStyle, "MK1", "hwMK1"));
        list5.appendChild(createInput(inpStyle, "hwMK1", playerData.technology.HW.MK1));
        list5.appendChild(createInput(inpStyle, "swMK1", playerData.technology.SW.MK1));
        list5.appendChild(createLabel(lblStyle, "MK2", "hwMK2"));
        list5.appendChild(createInput(inpStyle, "hwMK2", playerData.technology.HW.MK2));
        list5.appendChild(createInput(inpStyle, "swMK2", playerData.technology.SW.MK2));
        list5.appendChild(createLabel(lblStyle, "MK3", "hwMK3"));
        list5.appendChild(createInput(inpStyle, "hwMK3", playerData.technology.HW.MK3));
        list5.appendChild(createInput(inpStyle, "swMK3", playerData.technology.SW.MK3));
        list5.appendChild(createLabel(lblStyle, "MK4", "hwMK4"));
        list5.appendChild(createInput(inpStyle, "hwMK4", playerData.technology.HW.MK4));
        list5.appendChild(createInput(inpStyle, "swMK4", playerData.technology.SW.MK4));
        list5.appendChild(createLabel(lblStyle, "MK5", "hwMK5"));
        list5.appendChild(createInput(inpStyle, "hwMK5", playerData.technology.HW.MK5));
        list5.appendChild(createInput(inpStyle, "swMK5", playerData.technology.SW.MK5));
        list5.appendChild(createLabel(lblStyle, "MK6", "hwMK6"));
        list5.appendChild(createInput(inpStyle, "hwMK6", playerData.technology.HW.MK6));
        list5.appendChild(createInput(inpStyle, "swMK6", playerData.technology.SW.MK6));
        list5.appendChild(createLabel(lblStyle, "MK7", "hwMK7"));
        list5.appendChild(createInput(inpStyle, "hwMK7", playerData.technology.HW.MK7));
        list5.appendChild(createInput(inpStyle, "swMK7", playerData.technology.SW.MK7));
        list5.appendChild(createLabel(lblStyle, "MK8", "hwMK8"));
        list5.appendChild(createInput(inpStyle, "hwMK8", playerData.technology.HW.MK8));
        list5.appendChild(createInput(inpStyle, "swMK8", playerData.technology.SW.MK8));
        item5.appendChild(list5);
        sub2.appendChild(item5);
    }
    
    if (menu.style.display == "none")
        menu.style.display = "grid";

    playerData.activeMenu = 'settings';
}

function openTokensMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "TOKENS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
        grid = document.createElement("div");
        menu.appendChild(grid);
        grid.id = 'tokens';
        grid.style = "display: grid; grid-template-columns: 3fr 1fr; text-align: center;";

        // create upgrades table
        const table = document.createElement("table");
    }
}

function openDiamondsMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "DIAMONDS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
    }
}

function openModsMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "MODS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
    }
}

function openShipsMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "SHIPS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
    }
}

function openMissionsMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "MISSIONS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
    }
}

function openGearsMenu() {
    const menu = document.getElementById("menu");

    let title = document.getElementById("menu-title");
    title.innerText = "GEARS";

    let grid = document.getElementById("tokens");

    if (grid === null) {
    }
}

openMenu(playerData.activeMenu);