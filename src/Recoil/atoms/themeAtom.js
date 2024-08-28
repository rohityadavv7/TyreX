import { atom } from "recoil";

const themeAtom = atom({
    key:"themeAtom",
    default:localStorage.getItem("theme")? localStorage.getItem("theme"):"black"
})

export default themeAtom;