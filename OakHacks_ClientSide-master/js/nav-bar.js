if (window.innerWidth > 720) {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        this.nav.nativeElement.style.height = '60px';
        this.nav.nativeElement.style.backgroundColor = 'rgb(27,28,33)';
    } else {
        this.nav.nativeElement.style.height = '110px';
        this.nav.nativeElement.style.backgroundImage = 'linear-gradient(rgba(27,28,33, 0.9), rgba(27,28,33, 0))';
        this.nav.nativeElement.style.backgroundColor = 'transparent';
    }
}
