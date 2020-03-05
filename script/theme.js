const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'light') {
        $('.navbar').toggleClass('dark');
        $('.navbar').toggleClass('navbar-light');
        $('.navbar').toggleClass('navbar-dark')
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        $('.card').toggleClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'dark', {
                expires: 7
            });
        }, 100)
    } else if (theme == 'dark') {
        $('.navbar').toggleClass('dark');
        $('.navbar').toggleClass('navbar-light');
        $('.navbar').toggleClass('navbar-dark')
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        $('.card').toggleClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'light', {
                expires: 7
            });
        }, 100)
    }
}

function setTheme() {
    if (theme == 'light') {
        $('.navbar').toggleClass('dark');
        $('.navbar').toggleClass('navbar-light');
        $('.navbar').toggleClass('navbar-dark')
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        $('.card').toggleClass('dark');
    } else if (theme == 'dark') {
        $('.navbar').toggleClass('dark');
        $('.navbar').toggleClass('navbar-light');
        $('.navbar').toggleClass('navbar-dark')
        $('.card-body').toggleClass('dark');
        $('.card-header').toggleClass('dark');
        $('.card-footer').toggleClass('dark');
        $('.jumbotron').toggleClass('dark');
        $('.card').toggleClass('dark');
    }
}