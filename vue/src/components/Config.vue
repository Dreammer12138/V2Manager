<template>
    <div id="Config" class="p-3">
        <h3>网卡信息</h3>
        <table class="table table-borderless">
            <tbody>
                <tr v-for="(config, index) in configs" :key="index">
                    <th scope="row">{{ index }}</th>
                    <td>{{ config }}</td>
                </tr>
            </tbody>
        </table>
        <button
                type="button"
                class="btn btn-secondary"
                @click="changeConfig"
        ><i class="iconfont iconchange m-1"></i>修改</button>
    </div>
</template>

<script>
    export default {
        name: "Config",
        data: function() {
            return {
                configs: { 
                    V2rayCore路径: '',
                    V2rayLog路径: '',
                    V2rayLog等级: '',
                    监听地址: '',
                    传输协议: '',
                    UUID: ''
                }
            }
        },
        created() {
            var t = this;
            t.$ajax.get('/api/getConfig').then(res => {
                console.log(res.data);
                var result = res.data;
                for (var i in result) {
                    console.log('i: ' + i + ', result[i]:' + result[i]);
                    t.configs['V2rayCore路径'] = result['V2rayCorePath'];
                    t.configs['V2rayLog路径'] = result['V2rayLogPath'];
                    t.configs['V2rayLog等级'] = result['V2rayLogLevel'];
                    t.configs['监听地址'] = result['ListenPort'];
                    t.configs['传输协议'] = result['Protocol'];
                    t.configs['UUID'] = result['UUID'];
                }
                console.log(t.configs);
            })
        },
        methods: {
            changeConfig() {
                this.$router.push('/configGuide');
            }
        }
    }
</script>

<style scoped>

</style>