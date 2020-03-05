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
        // Navbar
        $('.navbar').removeClass('navbar-light');
        $('.navbar').removeClass('bg-light');
        $('.navbar').addClass('navbar-dark')
        $('.navbar').addClass('bg-dark');
        // Body
        $('.jumbotron').removeClass('bg-light');
        $('.jumbotron').addClass('bg-dark');
        $('.card-body').removeClass('bg-light');
        $('.card-body').addClass('bg-dark');
        $('.card-header').removeClass('bg-light');
        $('.card-header').addClass('bg-dark');
        $('.card-footer').removeClass('bg-light');
        $('.card-footer').addClass('bg-dark');
    } else if (theme == 'dark') {
        Cookies.set('theme', 'light', {
            expires: 7
        });
        // Navbar
        $('.navbar').addClass('navbar-light');
        $('.navbar').addClass('bg-light');
        $('.navbar').removeClass('navbar-dark')
        $('.navbar').removeClass('bg-dark');
        // Body
        $('.jumbotron').removeClass('bg-light');
        $('.jumbotron').addClass('bg-dark');
        $('.card-body').addClass('bg-light');
        $('.card-body').removeClass('bg-dark');
        $('.card-header').addClass('bg-light');
        $('.card-header').removeClass('bg-dark');
        $('.card-footer').addClass('bg-light');
        $('.card-footer').removeClass('bg-dark');
    }
}