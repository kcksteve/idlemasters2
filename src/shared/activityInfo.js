import IconFish from '../assets/img/IconFish.png'
import IconFlower from '../assets/img/IconFlower.png'
import IconWood from '../assets/img/IconWood.png'
import IconPick from '../assets/img/IconPick.png'
import IconPotion from '../assets/img/IconPotion.png'
import IconHammer from '../assets/img/IconHammer.png'
import IconSkull from '../assets/img/IconSkull.png'
import LayoutFishing from '../Components/GameLayouts/LayoutFishing'
import LayoutForaging from '../Components/GameLayouts/LayoutForaging'
import LayoutLogging from '../Components/GameLayouts/LayoutLogging'
import LayoutMining from '../Components/GameLayouts/LayoutMining'
import LayoutAlchemy from '../Components/GameLayouts/LayoutAlchemy'
import LayoutSmithing from '../Components/GameLayouts/LayoutSmithing'
import LayoutCombat from '../Components/GameLayouts/LayoutCombat'

const ACTIVITYINFO = [
    {
        id: 0,
        title: "Fishing",
        image: IconFish,
        hasInventory: true,
        isConsumable: true,
        xp: 0,
        level: 1,
        resource: 0,
        component: <LayoutFishing/>
    },
    {
        id: 1,
        title: "Foraging",
        image: IconFlower,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0,
        component: <LayoutForaging/>
    },
    {
        id: 2,
        title: "Logging",
        image: IconWood,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0,
        component: <LayoutLogging/>
    },
    {
        id: 3,
        title: "Mining",
        image: IconPick,
        hasInventory: true,
        isConsumable: false,
        xp: 0,
        level: 1,
        resource: 0,
        component: <LayoutMining/>
    },
    {
        id: 4,
        title: "Alchemy",
        image: IconPotion,
        hasInventory: true,
        isConsumable: true,
        xp: 0,
        level: 1,
        resource: 0,
        component: <LayoutAlchemy/>
    },
    {
        id: 5,
        title: "Smithing",
        image: IconHammer,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1,
        component: <LayoutSmithing/>
    },
    {
        id: 6,
        title: "Combat",
        image: IconSkull,
        hasInventory: false,
        isConsumable: false,
        xp: 0,
        level: 1,
        component: <LayoutCombat/>
    }
]

export default ACTIVITYINFO;