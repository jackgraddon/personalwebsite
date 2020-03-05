const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'light') {
        Cookies.set('theme', 'dark', {
            expires: 7
        });
        $('html').toggleClass('dark');
    } else if (theme == 'dark') {
        Cookies.set('theme', 'light', {
            expires: 7
        });
        $('html').toggleClass('dark');
    }
}