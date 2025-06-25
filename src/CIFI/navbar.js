const online = true;

let onMobile = false;
let pauseResizing = false;

const navHeight = 0.1;

const navBar = document.createElement('div');
document.body.append(navBar);
navBar.classList.add('navBar');

const navHighlight = document.createElement('span');
navHighlight.classList.add("navHighlight");
navBar.addEventListener('mouseleave', deHighlight);
navBar.appendChild(navHighlight);

const navButtons = [];

function createNavButton(panel,text,color,parent = null) {
    const newButtonObj = {
        panel,
        text,
        color,
        isChild: (parent !== null),
        children: [],
        active: false,
        highlighted: false
    };

    if (newButtonObj.isChild) {
        newButtonObj.parent = parent;

        for (let i = 0; i < navButtons.length; i++) {
            if (navButtons[i].panel === parent) {
                navButtons[i].children.push(newButtonObj);
            }
        }
    } else {
        const newButtonElem = document.createElement('label');
        navBar.appendChild(newButtonElem);
        newButtonElem.classList.add('navButton');
        newButtonElem.dataset.panel = panel;
        newButtonElem.innertext = text;
        newButtonElem.addEventListener('mouseenter',highlightNav);
        newButtonElem.addEventListener('click',navigatePanel);
        newButtonObj.elem = newButtonElem;

        newButtonObj.spawnChildren = function() {
            this.children.forEach(childNav => {
                const newChild = document.createElement('label');
                navBar.appendChild(newChild);
                newChild.classList.add('navButton','navChild');
                newChild.dataset.panel = childNav.panel;
                newChild.innerText = childNav.text;
                newChild.addEventListener('mouseenter',highlightNav);
                newChild.addEventListener('click',navigatePanel);
                childNav.elem = newChild;
            })

            const divSpace = 20;
            const totalWidth = this.children.reduce((a, b) => a + b.elem.offsetWidth, 0) + (divSpace * (this.children.length - 1));
            const lineCenter = navDim.height * 0.75;
            let runningLeft = this.elem.offsetLeft + (this.elem.offsetWidth / 2) - (totalWidth / 2);
            if (runningLeft < divSpace) runningLeft = divSpace;
            else if ((runningLeft + totalWidth) > (navDim.width - divSpace)) runningLeft = navDim.width - (totalWidth + divSpace);

            for (let i = 0; i < this.children.length; i++) {
                const thisT = Math.round(lineCenter - this.children[i].elem.offsetHeight);
                const thisL = runningLeft;
                runningLeft += this.children[i].elem.offsetWidth + divSpace;
                this.children[i].elem.style.top = `${thisT}px`;
                this.children[i].elem.style.left = `${thisL}px`;
            }
        };

        navButtons.push(newButtonObj);
    }
}

createNavButton("setup","SETUP",'rgba(255,255,255,1)');
//createNavButton('tokens',"TOKENS",'rgba(255,255,255,1)');
//createNavButton('diamonds',"DIAMONDS",'rgba(255,255,255,1)');
//createNavButton('mods',"MODS",'rgba(255,255,255,1)');
//createNavButton('ships',"SHIPS",'rgba(255,255,255,1)');
//createNavButton('academy',"ACADEMY",'rgba(255,255,255,1)');
//    createNavButton('academy-gears',"GEARS",'rgba(255,255,255,1)','academy');
//    createNavButton('academy-farms',"FARMS",'rgba(255,255,255,1)','academy');
createNavButton('update',"UP TO DATE",'rgba(255,255,255,1)');

navButtons.forEach(navBtn => {
    if (navBtn.children.length === 0) {
        navBtn.navigable = true;
        navBtn.elem.addEventListener('click',navigatePanel);
    } else navBtn.navigable = false;
});

const navDim = {
    width: window.innerWidth,
    height: window.innerHeight
};

let portals = {
    setup: setupPortal,
    //tokens: tokensPortal,
    //diamonds: diamondsPortal,
    //mods: modsPortal,
    //ships: shipsPortal,
    //academyGears: academyGearsPortal,
    //academyFarms: academyFarmsPortal
}

let panelResizeFunction = null;
let destroyCurrentPanel = null;

function openDefaultPanel() {
    ConstructPortal(window.innerHeight - navDim.height,navDim.width,activePortal);
}

function reDim() {
    if (pauseResizing) return;

    navDim.width = window.innerWidth;
    navDim.height = window.innerHeight * navHeight;
    document.documentElement.style.setProperty('--navWidth',`${navDim.width}px`);
    document.documentElement.style.setProperty('--navHeight',`${navDim.height}px`);
    document.documentElement.style.setProperty('--panelHeight',`${window.innerHeight - navDim.height}px`);

    let stdFontSize = Math.round(window.innerHeight / 60);
    let lgFontSize = Math.round(stdFontSize / 0.6);
    document.documentElement.style.setProperty('--stdFontSize', `${stdFontSize}px`);
    document.documentElement.style.setProperty('--lgFontSize',`${lgFontSize}px`);

    const spareRoom = navDim.width - navButtons.reduce((a,b) => a + b.elem.offsetWidth,0);
    const divSpace = Math.round(spareRoom / (navButtons.length + 1));
    let runLeft = divSpace;
    for (let i = 0; i < navButtons.length; i++) {
        const thisT = Math.round((navDim.height / 4) - (navButtons[i].elem.offsetHeight / 2));
        const thisL = runLeft;
        runLeft += navButtons[i].elem.offsetWidth + divSpace;
        navButtons[i].elem.style.top = `${thisT}px`;
        navButtons[i].elem.style.left = `${thisL}px`;
    }

    destroyPortal();
    ConstructPortal(window.innerHeight - navDim.height, navDim.width, activePortal);

    deHighlight();

    if (onMobile) pauseResizing = true;
}

let activeNavLink = null;
let activeNavPanel = '';

function destroyNavChildren(highlighting = false) {
    let childrenDestroyed = false;
    const currentChildren = document.querySelectorAll('.navChild');
    if (currentChildren.length > 0) {
        const childPanel = currentChildren[0].dataset.panel;
        let linkActive = false;
        navButtons.forEach(navButton => {
            if (childPanel.includes(navButton.panel) && navButton.active) linkActive = true;
        });
        if (!linkActive || highlighting) {
            for (let i = currentChildren.length - 1; i > -1; i--) {
                navBar.removeChild(currentChildren[i]);
            }
            childrenDestroyed = true;
        }
    } else childrenDestroyed = true;
    return childrenDestroyed;
}

function highlightNav() {
    const navCoords = this.getBoundingClientRect();
    const newCoords = {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `transform(${newCoords.left}px,${newCoords.top}px)`;

    const targetNav = this.dataset.panel;

    navButtons.forEach(navButton => {
        if (!this.classList.contains('navChild') && targetNav.includes(navButton.panel)) {
            destroyNavChildren(true);
            if (targetNav === navButton.panel && navButton.children.length > 0) navButton.spawnChildren();
            navButton.highlighted = true;
        }
        if (!this.dataset.panel.includes(navButton.panel)) navButton.highlighted = false;
    });
}

function deHighlight() {
    if (!activeNavLink) return;

    const childrenDestroyed = destroyNavChildren();

    navButtons.forEach(navButton => {
        if (!navButton.highlighted && navButton.active && navButton.children.length > 0) {
            if (childrenDestroyed) navButton.spawnChildren();
            navButton.children.forEach(child => {
                if (activeNavPanel === child.panel) activeNavLink = child.elem;
            });
        }
        navButton.highlighted = false;
    });

    const navCoords = activeNavLink.getBoundingClientRect();
    const newCoords = {
        width: Math.round(navCoords.width * 1.2),
        height: Math.round(navCoords.height * 1.2),
        left: Math.round(navCoords.left - (navCoords.width * 0.1)),
        top: Math.round(navCoords.top - (navCoords.height * 0.2))
    };
    navHighlight.style.width = `${newCoords.width}px`;
    navHighlight.style.height = `${newCoords.height}px`;
    navHighlight.style.transform = `translate(${newCoords.left}px,${newCoords.top}px)`;
}

function navigatePanel(e) {
    const targetPanel = e.target.dataset.panel;
    navButtons.forEach(btn => {
        if (btn.panel === targetPanel) {
            btn.active = true;
            activeNavLink = btn.elem;
            activeNavPanel = btn.panel;
        } else if (targetPanel.includes(btn.panel)) {
            btn.active = true;
            btn.children.forEach(child => {
                if (child.panel === targetPanel) {
                    child.active = true;
                    activeNavLink = child.elem;
                    activeNavPanel = child.panel;
                } else {
                    child.active = false;
                }
            });
        } else {
            btn.active = false;
            if (btn.children.length > 0) {
                btn.children.forEach(child => child.active = false);
            }
        }
    })

    // save data?

    if (targetPanel.includes('update')) location.reload(true);

    pauseResizing = false;
    setTimeout(reDim,50);
}

function checkUpdate() {
    let outOfDate = false;

    fetch('version.json')
        .then(response => response.json())
        .then(data => {
            var latestVersion = data.version;
            if (latestVersion > GameDB.version) {
                outOfDate = true;
                pushUpdate();
            }
        })
        .catch(error => {
            console.error('Error fetching latest version:',error);
            outOfDate = true;
            pushUpdate(false);
        });

    if (!outOfDate) setTimeout(checkUpdate,300000);
}

function pushUpdate(newVersion = true) {
    navButtons[0].elem.innerText = (newVersion ? 'Refresh to Update' : 'Update Error');
}

function isMobileBrowser() {
    return /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function holdResize() { pauseResizing = true; }

function releaseResize() { pauseResizing = false; }

if (isMobileBrowser()) {
    onMobile = true;
}

setTimeout(reDim,100);
if (online) setTimeout(checkUpdate,300000);
window.addEventListener('resize',reDim);