import '../ts/review-carousel';
import '../css/review-carousel.scss';

document.querySelector('#app')!.innerHTML = `
    <header>
        <p>Our Reviews</p>
        <div class="under-bar"></div>
    </header>
    <section>
        <div class="carousel-list">
            <article class="article-1">
                <div class="img-wrap">
                    <div class="icon-wrap">
                        <svg fill="#ffffff" width="24px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alt-bell</title> <path d="M4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008q0-1.792-1.984-3.296v-2.688q0-3.040-1.696-5.536t-4.384-3.68q0.064-0.416 0.064-0.8 0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.384 0.064 0.8-2.688 1.184-4.384 3.68t-1.664 5.536v2.688q-2.016 1.504-2.016 3.296zM12 28q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.096-0.032-0.32-2.208 0.32-3.968 0.32t-3.968-0.32q0 0.064 0 0.16t-0.032 0.16z"></path> </g></svg>
                    </div> 
                    <img src="/review/woman.jpg"></img>
                </div>
                <div class="profile-content">
                    <span class="name">Susan Smith</span>
                    <span class="job">WEB DEVELOPER</span>
                </div>
                <div class="review-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </article>
            <article class="article-2">
                <div class="img-wrap">
                    <div class="icon-wrap">
                        <svg fill="#ffffff" width="24px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alt-bell</title> <path d="M4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008q0-1.792-1.984-3.296v-2.688q0-3.040-1.696-5.536t-4.384-3.68q0.064-0.416 0.064-0.8 0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.384 0.064 0.8-2.688 1.184-4.384 3.68t-1.664 5.536v2.688q-2.016 1.504-2.016 3.296zM12 28q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.096-0.032-0.32-2.208 0.32-3.968 0.32t-3.968-0.32q0 0.064 0 0.16t-0.032 0.16z"></path> </g></svg>
                    </div> 
                    <img src="/review/woman.jpg"></img>
                </div>
                <div class="profile-content">
                    <span class="name">Susan Smith</span>
                    <span class="job">WEB DEVELOPER</span>
                </div>
                <div class="review-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </article>
            <article class="article-3">
                <div class="img-wrap">
                    <div class="icon-wrap">
                        <svg fill="#ffffff" width="24px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alt-bell</title> <path d="M4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008q0-1.792-1.984-3.296v-2.688q0-3.040-1.696-5.536t-4.384-3.68q0.064-0.416 0.064-0.8 0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.384 0.064 0.8-2.688 1.184-4.384 3.68t-1.664 5.536v2.688q-2.016 1.504-2.016 3.296zM12 28q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.096-0.032-0.32-2.208 0.32-3.968 0.32t-3.968-0.32q0 0.064 0 0.16t-0.032 0.16z"></path> </g></svg>
                    </div> 
                    <img src="/review/woman.jpg"></img>
                </div>
                <div class="profile-content">
                    <span class="name">Susan Smith</span>
                    <span class="job">WEB DEVELOPER</span>
                </div>
                <div class="review-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </article>
            <article class="article-4">
                <div class="img-wrap">
                    <div class="icon-wrap">
                        <svg fill="#ffffff" width="24px" height="20px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>alt-bell</title> <path d="M4 20q0 1.632 1.6 3.008t4.384 2.208 6.016 0.8 6.016-0.8 4.384-2.208 1.6-3.008q0-1.792-1.984-3.296v-2.688q0-3.040-1.696-5.536t-4.384-3.68q0.064-0.416 0.064-0.8 0-1.632-1.184-2.816t-2.816-1.184-2.816 1.184-1.184 2.816q0 0.384 0.064 0.8-2.688 1.184-4.384 3.68t-1.664 5.536v2.688q-2.016 1.504-2.016 3.296zM12 28q0 1.664 1.184 2.848t2.816 1.152 2.816-1.152 1.184-2.848q0-0.096-0.032-0.32-2.208 0.32-3.968 0.32t-3.968-0.32q0 0.064 0 0.16t-0.032 0.16z"></path> </g></svg>
                    </div> 
                    <img src="/review/woman.jpg"></img>
                </div>
                <div class="profile-content">
                    <span class="name">Susan Smith</span>
                    <span class="job">WEB DEVELOPER</span>
                </div>
                <div class="review-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </article>
        </div>
        <div class="icon-group">
            <icon class="prev">
                <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" transform="rotate(180)" stroke-width="1.9919999999999998"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#48a5ea" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </icon>
            <icon class="next">
                <svg width="64px" height="64px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="" transform="rotate(0)" stroke-width="1.9919999999999998"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="24" height="24" fill="white"></rect> <path d="M9.5 7L14.5 12L9.5 17" stroke="#48a5ea" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </icon>
        </div>
        <button>Surprise Me</button>
    </section>
`;
