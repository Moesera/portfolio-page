export function importAllIcons (r) {
  const icons = import.meta.glob('../../assets/icons/*.{png,jpg,jpeg,svg}', { eager: true });
  let processedIcons = {};

  for (const path in icons) {
    const fileName = path.replace('../../assets/icons/', '');
    processedIcons[fileName] = icons[path].default;
  }

  return processedIcons;
}