import IconFish from '../assets/img/IconFish.png'
import IconFlower from '../assets/img/IconFlower.png'
import IconWood from '../assets/img/IconWood.png'
import IconPick from '../assets/img/IconPick.png'
import IconPotion from '../assets/img/IconPotion.png'
import IconHammer from '../assets/img/IconHammer.png'
import IconSkull from '../assets/img/IconSkull.png'

const ACTIVITYINFO = [
    {
        id: 0,
        title: "Fishing",
        consumableTitle: "Fish",
        cost: [
            {
                title: 'None',
                amount: 0
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Fish',
                amount: 1
            }
        ],
        image: IconFish,
        hasInventory: true,
        isConsumable: true,
        xp: 0,
        level: 1,
        resource: 0
    },
    {
        id: 1,
        title: "Foraging",
        consumableTitle: "Herbs",
        cost: [
            {
                title: 'Stamina',
                amount: 5
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Herbs',
                amount: 1
            }
        ],
        image: IconFlower,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0
    },
    {
        id: 2,
        title: "Logging",
        consumableTitle: "Logs",
        cost: [
            {
                title: 'Stamina',
                amount: 10
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Logs',
                amount: 1
            }
        ],
        image: IconWood,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0
    },
    {
        id: 3,
        title: "Mining",
        consumableTitle: "Ore",
        cost: [
            {
                title: 'Stamina',
                amount: 10
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Ore',
                amount: 1
            }
        ],
        image: IconPick,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0
    },
    {
        id: 4,
        title: "Alchemy",
        consumableTitle: "Potions",
        cost: [
            {
                title: 'Stamina',
                amount: 5
            },
            {
                title: 'Logs',
                amount: 2
            },
            {
                title: 'Herbs',
                amount: 3
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Potions',
                amount: 1
            }
        ],
        image: IconPotion,
        hasInventory: true,
        isConsumable: true,
        xp: 0,
        level: 1,
        resource: 0
    },
    {
        id: 5,
        title: "Smithing",
        consumableTitle: "Gear Level",
        cost: [
            {
                title: 'Stamina',
                amount: 5
            },
            {
                title: 'Logs',
                amount: 3
            },
            {
                title: 'Ore',
                amount: 2
            }
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            }
        ],
        image: IconHammer,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1
    },
    {
        id: 6,
        title: "Combat",
        consumableTitle: "Combat Level",
        cost: [
            {
                title: 'Stamina',
                amount: 15
            },
            {
                title: 'Health',
                amount: '?'
            },
        ],
        reward: [
            {
                title: 'XP',
                amount: 10
            },
            {
                title: 'Mystery',
                amount: '?'
            }
        ],
        image: IconSkull,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1
    }
]

export default ACTIVITYINFO;