function ScreenSize() {
    if (window.innerWidth < 1500) {
        return 's';
    } else {
        return 'l';
    }
}

export default ScreenSize;