const theme = Cookies.get('theme');
if (!theme) {
    Cookies.set('theme', 'light', {
        expires: 7
    });
}

function swapTheme() {
    if (theme == 'dark') {
        $('body').addClass('darkBody');
        $('.navbar').addClass('dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark')
        $('.card-body').addClass('dark');
        $('.card-header').addClass('dark');
        $('.card-footer').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.card').addClass('dark');
        Cookies.set('theme', 'light', {
            expires: 7
        });
    } else if (theme == 'light') {
        $('body').addClass('darkBody');
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
        $('body').addClass('darkBody');
        $('.navbar').addClass('dark');
        $('.navbar').removeClass('navbar-light');
        $('.navbar').addClass('navbar-dark')
        $('.card-body').addClass('dark');
        $('.card-header').addClass('dark');
        $('.card-footer').addClass('dark');
        $('.jumbotron').addClass('dark');
        $('.card').addClass('dark');
    } else if (theme == 'dark') {
        $('body').addClass('darkBody');
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