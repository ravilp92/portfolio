<template>
<div>
    <aside class="site-sidebar">
        <div class="site-sidebar-inner h-card">
            <router-link to="/" rel="me" class="person u-url">
                <div class="person-avatar u-photo">
                    <img src='../assets/img/ravi-patel.jpg' alt="altText" class="avatar" />
                </div>
                <div class="person-content">
                    <h1 class="person-title p-name">Ravi Patel</h1>
                    <h2 class="person-subtitle p-job-title p-note">Front-End Developer</h2>
                </div>
            </router-link>

            <nav class="block main-navigation">
                <div class="navigation-extend-bar">
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

                    <a href="#" class="navigation-extend-button js-extend-main-navigation">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>

                <div class="navigation-extendable">
                    <ul>
                        <li>
                            <router-link to="/">Home</router-link>
                        </li>
                        <li>
                            <router-link to="/Offer">Offer</router-link>
                        </li>
                        <li>
                            <router-link to="/Portfolio">Portfolio</router-link>
                        </li>
                        <li>
                            <router-link to="/Contact">Contact me</router-link>
                        </li>
                        <li><a href="http://rlpatel.com/assets/Ravi_Patel.pdf" target="_blank">Resume</a></li>
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
        </div>
    </aside>
</div>
</template>

<script>
export default {
    name: 'Navigation',
    methods: {
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
