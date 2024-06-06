export const chooseColor = (
    option: string,
    theme: string,
    lightMode: any,
    darkMode: any
) => {
    const path = option.split('.');
    const currentTheme = theme === 'light' ? lightMode : darkMode;

    if (path.length !== 2) {
        return '#aaaaaa';
    }

    return currentTheme[path[0]][path[1]];
};
