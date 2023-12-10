class Prices extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="offer">
            <ul class="price">
                <li class="header"><h6>The Spark</h6></li>
                <li class="grey cost"><h1>300€</h1></li>
                <li><strong>1 hour of brainstorming</strong> solutions with you</li>
                <li><strong>2 hours of 1:1 coaching</strong> for any team member</li>
            </ul>
        </div>

        <div class="offer">
            <ul class="price highlighted">
                <li class="header"><h6>The Bright Spot</h6></li>
                <li class="grey cost"><h1>1000€</h1></li>
                <li><strong>1 hour of brainstorming</strong> solutions with you</li>
                <li><strong>5 hours of 1:1 coaching</strong> for any team member</li>
                <li><strong>Summary document</strong> of my findings, feedback, and potential improvements</li>
            </ul>
        </div>

        <div class="offer">
            <ul class="price">
                <li class="header"><h6>The Shine</h6></li>
                <li class="grey cost"><h2>On demand</h2></li>
                <li>Do you have something else in mind?</li>
                <li>Let's discuss how I can help you</li>
            </ul>
        </div>
        `;
    }
}

customElements.define('l-prices', Prices);
