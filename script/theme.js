const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'dark') {
        $('body').removeClass('dark');
        $('.navbar').removeClass('dark');
        $('.navbar').addClass('navbar-light');
        $('.navbar').removeClass('navbar-dark')
        $('.card-body').removeClass('dark');
        $('.card-header').removeClass('dark');
        $('.card-footer').removeClass('dark');
        $('.jumbotron').removeClass('dark');
        $('.card').removeClass('dark');
        Cookies.set('theme', 'light', {
            expires: 7
        });
    } else if (theme == 'light') {
        $('body').addClass('dark');
        $('.navbar').addClass('dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark')
        $('.card-body').addClass('dark');
        $('.card-header').addClass('dark');
        $('.card-footer').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.card').addClass('dark');
        Cookies.set('theme', 'dark', {
            expires: 7
        });
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