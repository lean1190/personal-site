class Preloader extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
            <div id="preloader">
                <div id="loader" class="dots-fade">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        `;
    }
}

customElements.define('l-preloader', Preloader);
