import { importAllIcons } from "../../assets/utils/importAllIcons";

const icons = importAllIcons();

export const skills = Object.keys(icons).map(iconName => ({
  name: iconName.replace('.svg', '').replace('../icons/', ''),
  icon: icons[iconName]
}));