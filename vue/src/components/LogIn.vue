<template>
    <div id="login">
        <div id="logo" class="display-4 text-light m-5">V2Manager</div>
        <form id="info" class="mb-5 pb-5 d-flex flex-column">
            <div class="form-group">
                <label for="pwd" class="text-light">密码/Password</label>
                <input id="pwd" class="form-control" type="password" v-model="pwd" />
            </div>
            <div class="d-flex justify-content-center">
                <button
                        type="button"
                        class="btn btn-light rounded-circle p-0 m-0 iconfont iconlogin_loginjump_right m-3"
                        id="submit"
                        v-on:click="login"
                ></button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "LogIn",
        data: function() {
            return {
                pwd: ''
            }
        },
        methods: {
            login() {
                var t = this;
                this.$ajax.post('/api/login', {
                    pwd: t.pwd
                }).then(function (response) {
                    if (response.data.code == 0) return;
                    sessionStorage.setItem('loginStatus', true);
                    t.$router.push('home');
                }).catch(function (error) {
                    console.error(error);
                })
            }
        },
        created() {
            if (sessionStorage.getItem('loginStatus') == true) {
                this.$router.push('home');
            }
        }
    }
</script>

<style scoped>
    body, html {
        width: 100%;
        height: 100%;
    }
    #submit {
        --length: 5vh;
        height: var(--length);
        width: var(--length);
    }
    .iconfont {
        --font: 2vh;
        font-size: var(--font) !important;
    }
</style>