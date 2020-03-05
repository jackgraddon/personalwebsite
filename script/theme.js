const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'light') {
        $('.navbar').toggleClass('dark');
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'dark', {
                expires: 7
            });
        }, 100)
    } else if (theme == 'dark') {
        $('.navbar').toggleClass('dark');
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'dark', {
                expires: 7
            });
        }, 100)
    }
}