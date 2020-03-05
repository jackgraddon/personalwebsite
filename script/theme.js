const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'dark') {
        $('.navbar').removeClass('dark');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark')
        $('.card-body').removeClass('dark');
        $('.card-header').removeClass('dark');
        $('.card-footer').removeClass('dark');
        $('.jumbotron').removeClass('dark');
        $('.card').removeClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'light', {
                expires: 7
            });
        }, 100)
    } else if (theme == 'light') {
        $('.navbar').addClass('dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark')
        $('.card-body').addClass('dark');
        $('.card-header').addClass('dark');
        $('.card-footer').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.card').addClass('dark');
        setTimeout(()=> {
            Cookies.set('theme', 'dark', {
                expires: 7
            });
        }, 100)
    }
}

function setTheme() {
    if (theme == 'light') {
        $('.navbar').removeClass('dark');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark')
        $('.card-body').removeClass('dark');
        $('.card-header').removeClass('dark');
        $('.card-footer').removeClass('dark');
        $('.jumbotron').removeClass('dark');
        $('.card').removeClass('dark');
    } else if (theme == 'dark') {
        $('.navbar').addClass('dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark')
        $('.card-body').addClass('dark');
        $('.card-header').addClass('dark');
        $('.card-footer').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.card').addClass('dark');
    }
}