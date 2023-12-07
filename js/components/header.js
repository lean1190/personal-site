class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <header class="s-header">
                <div class="row s-header__inner width-sixteen-col">
                    <div class="s-header__block">
                        <div class="s-header__logo">
                            <a class="logo" href="index.html">
                                <img src="images/logo.png" alt="Homepage">
                            </a>
                        </div>

                        <a class="s-header__menu-toggle" href="#0"><span>Menu</span></a>
                    </div> <!-- end s-header__block -->

                    <nav class="s-header__nav">
                        <ul class="s-header__menu-links">
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul> <!-- s-header__menu-links -->

                        <div class="s-header__contact">
                            <a href="contact.html" class="btn btn--primary s-header__contact-btn">Let's work together</a>
                        </div> <!-- s-header__contact -->
                    </nav> <!-- end s-header__nav -->
                </div> <!-- end s-header__inner -->
            </header> <!-- end s-header -->
        `;
    }
}

customElements.define('l-header', Header);
