class SePrices extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <a href="./contact.html" class="offer">
            <ul class="price">
                <li class="header"><h6>The Spark</h6></li>
                <li class="grey cost"><h1>200€</h1></li>
                <li><strong>2 hours of brainstorming and coaching</strong> with you</li>
            </ul>
        </a>

        <a href="./contact.html" class="offer">
            <ul class="price highlighted">
                <li class="header"><h6>The Bright Spot</h6></li>
                <li class="grey cost"><h1>500€</h1></li>
                <li><strong>4 hours of brainstorming and coaching</strong> with you</li>
                <li><strong>Summary document</strong> of my findings, feedback, and potential improvements</li>
            </ul>
        </a>

        <a href="./contact.html" class="offer">
            <ul class="price">
                <li class="header"><h6>The Shine</h6></li>
                <li class="grey cost"><h2>On demand</h2></li>
                <li>Something else in mind?</li>
                <li>Let's talk about your ideas</li>
            </ul>
        </a>
        `;
    }
}

customElements.define('l-se-prices', SePrices);
