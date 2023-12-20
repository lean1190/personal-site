class Cta extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="cta" class="s-cta">
                <div class="row row-x-center text-center">
                    <div class="column xl-8 lg-12">
                        <div class="s-cta__content">
                            <h2 class="text-display-title">
                                Ready to thrive?
                            </h2>
                            <a href="contact.html" class="btn btn--primary">Get in touch</a>
                        </div>
                    </div>
                </div>
            </section> <!-- end s-cta -->
        `;
    }
}

customElements.define('l-cta', Cta);
