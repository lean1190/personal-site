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
                                Ready to shine?
                            </h2>
                            <p class="lead">
                            Let's get to know each other and find out how can I help you. <br/>

                            I'm looking forward to meeting you.
                            </p>
                            <a href="contact.html" class="btn btn--primary">Let's work together</a>
                        </div>
                    </div>
                </div>
            </section> <!-- end s-cta -->
        `;
    }
}

customElements.define('l-cta', Cta);
