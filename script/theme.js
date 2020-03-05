const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'light') {
        $('body').toggleClass('dark');
        Cookies.set('theme', 'dark', {
            expires: 7
        });
        break;
    } else if (theme == 'dark') {
        $('body').toggleClass('dark');
        Cookies.set('theme', 'light', {
            expires: 7
        });
        break;
    }
}