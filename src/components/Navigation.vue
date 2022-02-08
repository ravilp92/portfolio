<template>
<div>
  <aside class="site-sidebar">
        <div class="site-sidebar-inner h-card">
            <router-link to="/" rel="me" class="person u-url">
                <div class="person-avatar u-photo">
                    <img src='../assets/img/ravi-patel.jpg' alt="altText" class="avatar"/>
                    <!-- <img :src="url" alt="" class="avatar"> -->
                </div>
                <div class="person-content">
                    <h1 class="person-title p-name">Ravi Patel</h1>
                    <h2 class="person-subtitle p-job-title p-note">Front-End Developer</h2>
                </div>
            </router-link>

            <nav class="block main-navigation">
                <div class="navigation-extend-bar">
                    <div class="social-icons">
                        <a rel="me" href="mailto:ravivadaj@gmail.com" class="button button-icon u-email" title="mail: jacek@jtom.me">
                            <i class="fa fa-envelope"></i>
                        </a>

                        <a rel="me" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" class="button button-icon" title="linkedin: jtompl">
                            <i class="fa fa-linkedin-square"></i>
                        </a>

                        <a rel="me" href="https://github.com/ravilp92" class="button button-icon" title="github: jtomaszewski">
                            <i class="fa fa-github-square"></i>
                        </a>

                        <a rel="me" href="https://www.facebook.com/rm.patel.14473426" class="button button-icon" title="facebook: jtomaszewski">
                            <i class="fa fa-facebook-square"></i>
                        </a>

                        <a rel="me" href="https://twitter.com/PatelRaviL" class="button button-icon" title="twitter: @jtompl">
                            <i class="fa fa-twitter-square"></i>
                        </a>
                    </div>

                    <a href="#" class="navigation-extend-button js-extend-main-navigation">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>

                <div class="navigation-extendable">
                    <ul>
                        <li><router-link to="/Offer">Offer</router-link></li>
                        <li><a href="portfolio/index.html">Portfolio</a></li>
                        <li><a href="contact/index.html">Contact me</a></li>
                    </ul>
                    <ul>
                        <!-- <li><a href="/about-me/">About me</a></li> -->
                        <!-- <li><a href="/blog">Tech blog</a></li> -->
                        <li><a href="cv/index.html">CV</a></li>
                        <li><a href="talks/index.html">Presentations</a></li>
                        <li><a href="https://jackthenomad.com/" target="_blank">Personal blog</a></li>
                    </ul>
                </div>
            </nav>

            <div class="block block-social">
                <div class="block-title">Get in touch</div>
                <div class="block-content">
                    <div class="social-icons">
                        <a rel="me" href="mailto:ravivadaj@gmail.com" class="button button-icon u-email" title="mail: ravivadaj@gmail.com" target="_blank">
                            <i class="fa fa-envelope"></i>
                        </a>

                        <a rel="me" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" class="button button-icon" title="linkedin: jtompl" target="_blank">
                            <i class="fa fa-linkedin-square"></i>
                        </a>

                        <a rel="me" href="https://github.com/ravilp92" class="button button-icon" title="github: ravilp92" target="_blank">
                            <i class="fa fa-github-square"></i>
                        </a>

                        <a rel="me" href="https://www.facebook.com/rm.patel.14473426" class="button button-icon" title="facebook: rm.patel.14473426" target="_blank">
                            <i class="fa fa-facebook-square"></i>
                        </a>

                        <a rel="me" href="https://twitter.com/PatelRaviL" class="button button-icon" title="twitter: @PatelRaviL" target="_blank">
                            <i class="fa fa-twitter-square"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="block block-blog">
                <div class="block-title">
                    Recently on my blog
                </div>
                <div class="block-content">
                    <ul class="posts-list">
                        <li>
                            <a href="https://medium.com/@jtomaszewski/how-we-will-get-rid-of-fake-news-by-2030-b70e330fbbaa" target="_blank">
                                <div class="post-title">How AI will help us get rid of fake news by 2030</div>
                                <div class="post-date">Sep 17, 2019</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/handling-asynchronous-actions-in-redux-86724ed87c6c" target="_blank">
                                <div class="post-title">Handling asynchronous actions in Redux</div>
                                <div class="post-date">Jul 9, 2019</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/why-typescript-is-the-best-way-to-write-front-end-in-2019-feb855f9b164" target="_blank">
                                <div class="post-title">Why TypeScript is the best way to write Front-end in 2019</div>
                                <div class="post-date">Dec 24, 2018</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/how-to-write-good-composable-and-pure-components-in-angular-2-1756945c0f5b" target="_blank">
                                <div class="post-title">How to write good, composable and pure components in Angular 2+</div>
                                <div class="post-date">Jun 7, 2018</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/mastering-the-angular-performance-by-dropping-the-magic-of-change-detector-2b605b444b04" target="_blank">
                                <div class="post-title">Mastering the Angular performance—by dropping the magic of Change Detector
                                </div>
                                <div class="post-date">May 17, 2018</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/coding-is-not-an-art-its-engineering-e95c2eead1ea">
                                <div class="post-title">Code is not art, it’s engineering</div>
                                <div class="post-date">Apr 19, 2018</div>
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@jtomaszewski/keep-your-code-clean-forever-65c71f7f2df">
                                <div class="post-title">Keep your code clean forever</div>
                                <div class="post-date">Apr 5, 2018</div>
                            </a>
                        </li>
                        <!-- <li>
                <a href="https://medium.com/@jtomaszewski/your-data-belongs-to-facebook-not-you-798246935b78">
                  <div class="post-title">Your data belongs to Facebook, not you</div>
                  <div class="post-date">Mar 20, 2018</div>
                </a>
              </li>
              <li>
                <a href="https://medium.com/@jtomaszewski/you-are-not-better-than-anyone-ac5aa57b039e">
                  <div class="post-title">"You are not better than anyone..."</div>
                  <div class="post-date">Mar 10, 2018</div>
                </a>
              </li> -->
                    </ul>
                </div>
            </div>
        </div>
  </aside>
  <div class="site-main">
    <div class="site-main-inner">
      <div class="home-section">
        <div class="home-section-inner">
          <div class="home-heading">Hi, I'm Jack,</div>
          <h2 class="home-subheading">
            a freelance software engineer specialized in<br />
            both <strong>front-end and back-end</strong> web development.
          </h2>
          <div class="home-buttons">
            <a href="skills-and-offer/index.html" class="button button-outline button-white">Offer</a>
            <br />
            <a href="portfolio/index.html" class="button button-outline button-white">Portfolio</a>
            <br />
            <a href="https://jackthenomad.com/" target="_blank" class="button button-outline button-white">Blog</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
