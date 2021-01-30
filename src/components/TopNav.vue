<template>
    <nav class="topNav">
        <div class="icon-bar">
            <a href="#" class="active-btn"></a>
            <div class=container  :class="{'change': toggled}" @click.prevent="openMenu">
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <span class="logo"> I Love J</span>
        </div> 
        <div class="nav-center">
            <li><a href="" class="actvie" onmouseover="this.innerText='로그인'" onmouseout="this.innerText='LOGIN'">LOGIN</a></li>

            <li><a href="" id="join" onmouseover="this.innerText='회원가입'" onmouseout="this.innerText='JOIN'">JOIN</a></li>
            <li><a href="#" id="cart" onmouseover="this.innerText='장바구니'" onmouseout="this.innerText='CART'">CART</a></li>
            <li><a href="#" id="mypage" onmouseover="this.innerText='마이페이지'" onmouseout="innerText='MYPAGE'">MYPAGE</a></li>
        </div>
        <div class="sns">
           <li><a href="#"><i class="fa fa-twitter"></i></a></li>
           <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </div>
    </nav>
</template>

<script>
import { store, mutations } from '@/store.js' 

export default {
    computed : {
        toggled() {
            return store.isNavOpen
        }
    },
    methods: {
        openMenu(event) {
            mutations.toggleNav()
            this.$emit('openMenu', event.currentTarget.className);
        },
    }
}
</script>

<style scoped>
.topNav {
    background-color: #fff9d2;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    width: 100%;
    position: fixed;
    z-index: 10;
}

.topNav a{
    text-decoration: none;
    color: #282c4c;
}
.topNav a:hover {
    color: #f45700;
}

.logo {
    display: inline-block;
    font-size: 20px;
    padding: 0 0px 0px 10px;    
}


.nav-center {
    display: flex;
    list-style: none;
    padding-left: 0px;
}

.nav-center li {
    padding: 5px 10px 3px 10px;
}

.sns {
    display: flex;
    list-style: none;
    padding-left: 0px;
}

.sns li {
    padding: 5px 5px 3px 10px;
}

.container {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
}

.bar1, .bar2, .bar3 {
    width: 22px;
    background-color: #f45700;
    height: 3px;
    margin: 4px 0;
}

.bar3 {
    margin: 0 0 9px 0;
}
.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-2px, 2px);
    transform: rotate(-45deg) translate(-2px, 2px);
    margin: 0 0 1px 0;
}

.change .bar2 {
    opacity: 0;
}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
    margin: 0 0 1px 0;
}

</style>