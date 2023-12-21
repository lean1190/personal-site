class Footer extends HTMLElement {
    constructor() {
      super();
    }

    emailPattern = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/

    connectedCallback() {
        this.innerHTML = `
        <footer class="s-footer">
            <div class="row s-footer__content">
                <div class="column xl-6 lg-6 md-12 s-footer__block s-footer__about">
                    <h3>About Lean</h3>
                    <p>
                        <mark>Communication coach for software engineers</mark> <br/>
                        I help you propel your career, by empowering you with skills and techniques to boost your confidence and enhance your communication skills.
                    </p>
                </div>
                <div class="column xl-3 lg-6 md-12 s-footer__block s-footer__site-links">
                    <h3>Site Links</h3>
                    <ul class="link-list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="about.html">About</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <!-- No newsletter yet
                <div class="column xl-3 lg-6 md-12 tab-12 s-footer__block s-footer__newsletter">
                    <h3>Newsletter</h3>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere ratione dignissimos.
                    </p>

                    <div class="subscribe-form">
                        <form id="mc-form" class="mc-form">
                            <input type="email" name="EMAIL" id="mce-EMAIL" class="u-fullwidth text-center" placeholder="Your Email Address" title="The domain portion of the email address is invalid (the portion after the @)." pattern="${this.emailPattern}" required />
                            <input type="submit" name="subscribe" value="Subscribe" class="btn btn--primary btn--small u-fullwidth" />

                            <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_cdb7b577e41181934ed6a6a44_9a91cfe7b3" tabindex="-1" value="" /></div>
                            <div class="mc-status"></div>
                        </form>
                    </div>
                </div>
                -->
            </div>

            <div class="row s-footer__bottom">
                <div class="column xl-6 lg-12">
                    <ul class="s-footer__social social-list">
                        <li>
                            <a href="https://www.linkedin.com/in/leanvilas">
                                <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7 c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6 c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1 c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
                                <span class="u-screen-reader-text">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@lean1190">
                                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="m24 24h-24v-24h24zm-8.986-15.006v7.326c0 .198 0 .234-.127.362l-1.302 1.264v.27h6.32v-.27l-1.257-1.234c-.091-.07-.148-.178-.148-.3 0-.022.002-.043.005-.064v.002-9.07c-.003-.019-.005-.04-.005-.062 0-.121.058-.229.148-.298l.001-.001 1.286-1.234v-.27h-4.456l-3.176 7.924-3.609-7.924h-4.675v.271l1.502 1.813c.127.115.207.281.207.466 0 .022-.001.043-.003.064v-.003 7.126c.007.041.011.088.011.136 0 .222-.088.423-.231.571l-1.69 2.054v.27h4.8v-.27l-1.691-2.054c-.149-.154-.241-.363-.241-.595 0-.04.003-.079.008-.117v.004-6.16l4.215 9.195h.49z"></path></g></svg>
                                <span class="u-screen-reader-text">Medium</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/show/6kCt1492d5OV3LVyVe8etT?si=175216a1e4f440d7">
                                <svg style="color: white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-spotify" viewBox="0 0 16 16"> <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z" fill="white"></path> </svg>
                                <span class="u-screen-reader-text">Spotify</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://adplist.org/mentors/leandro-nicolas-vilas">
                                <svg fill="#000000" width="64px" height="64px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z M 10.5 11 C 9.671875 11 9 11.671875 9 12.5 C 9 12.59375 9.007813 12.683594 9.03125 12.78125 C 9.074219 13.019531 9.171875 13.222656 9.3125 13.40625 C 10.0625 14.699219 12 16 12 16 C 12 16 15 14.09375 15 12.5 C 15 11.671875 14.328125 11 13.5 11 C 12.671875 11 12 11.671875 12 12.5 C 12 11.671875 11.328125 11 10.5 11 Z M 18.5 11 C 17.671875 11 17 11.671875 17 12.5 C 17 12.59375 17.007813 12.683594 17.03125 12.78125 C 17.074219 13.019531 17.171875 13.222656 17.3125 13.40625 C 18.0625 14.699219 20 16 20 16 C 20 16 21.988281 14.710938 22.71875 13.375 C 22.878906 13.078125 23 12.789063 23 12.5 C 23 11.671875 22.328125 11 21.5 11 C 20.671875 11 20 11.671875 20 12.5 C 20 11.671875 19.328125 11 18.5 11 Z M 10.8125 19 L 9.09375 20 C 10.476563 22.386719 13.046875 24 16 24 C 18.953125 24 21.523438 22.386719 22.90625 20 L 21.1875 19 C 20.148438 20.792969 18.226563 22 16 22 C 13.773438 22 11.851563 20.792969 10.8125 19 Z"></path></g></svg>
                                <span class="u-screen-reader-text">ADPList</span>
                            </a>
                        </li>
                    </ul> <!-- end s-footer__social -->
                </div>
                <div class="column xl-6 lg-12">
                    <p class="ss-copyright">
                        <span>© Copyright Lean Vilas</span>
                        <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                    </p>
                </div>

                <div class="ss-go-top">
                    <a class="smoothscroll" title="Back to Top" href="#top">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="#ffffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">&lt;!--!  Atomicons Free 1.00 by @atisalab License - https://atomicons.com/license/ (Icons: CC BY 4.0) Copyright 2021 Atomicons --&gt;<polyline points="17 11 12 6 7 11"></polyline><line x1="12" y1="18" x2="12" y2="6"></line></svg>
                    </a>
                </div> <!-- end ss-go-top -->
            </div>

        </footer> <!-- end s-footer -->
        `;
    }
}

customElements.define('l-footer', Footer);
