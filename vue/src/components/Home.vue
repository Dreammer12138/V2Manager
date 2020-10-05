<template>
    <div id="home" class="d-flex col-8">
        <div id="sidebar" class="col-3 m-3">
            <div 
                v-for="sidebar in sidebars" 
                :key="sidebar.text" 
                class="btn p-4 m-4 rounded-lg d-flex align-items-center flex-column"
                :class="activeItem === sidebar.id ? 'btn-light' : 'btn-dark'"
                @click="toPage(sidebar.to)"
            ><i class="iconfont lg-icon" :class="sidebar.icon"></i>
                {{ sidebar.text }}
            </div>
        </div>
        <div id="content" class="col-9 m-3">
            <div class="p-4 bg-light m-4 rounded-lg">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data: function() {
            return {
                sidebars: [
                    { text: '状态', icon: 'iconzhuangtai', id: 'Status', to: 'Status' },
                    { text: '配置', icon: 'iconpeizhi', id: 'Config', to: 'Config' },
                    { text: '重启', icon: 'iconstart', to: false }
                ],
                activeItem: "Status"
            }
        },
        created() {
            var loginStatus = sessionStorage.getItem('loginStatus');
            if (loginStatus == false) {
                this.$router.push('');
            }
        },
        mounted() {
            var path = this.$route.path;
            switch (path) {
                case '/home': this.activeItem = 'Status'; break;
                case '/home/Config': this.activeItem = 'Config'; break;
            }
        },
        methods: {
            toPage(page) {
                if (page !== false)
                    this.activeItem = page;
                if (this.$route.path == '/home')
                    this.$router.push('home/' + page);
                else this.$router.push(page);
            }
        }
    }
</script>

<style scoped>
    .lg-icon {
        font-size: 3rem;
    }
</style>