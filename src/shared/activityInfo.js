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
        image: IconHammer,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1
    },
    {
        id: 6,
        title: "Combat",
        image: IconSkull,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1
    }
]

export default ACTIVITYINFO;