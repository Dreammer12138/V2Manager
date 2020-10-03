<template>
    <div id="configGuide" class="bg-light col-6 p-5 d-flex rounded">
        <div class="display-4 d-flex align-items-center">
            <h4 class="display-4">V2Manager</h4>
        </div>
        <div class="border m-5"></div>
        <form id="configInfo" class="col ">
            <div class="form-group" v-for="config in configs" :key="config.text">
                <label for="config">{{ config.text }}</label>
                <input
                        v-model="config.value"
                        v-if="config.type !== 'select'"
                        :type="config.type"
                        class="form-control"
                        :id="config"
                        :placeholder="config.value"
                />
                <select
                        v-else
                        class="form-control"
                        :id="config">
                    <option v-for="item in config.items" :key="item">{{ item }}</option>
                </select>
            </div>
            <div class="text-center">
                <button
                        type="button"
                        class="btn btn-secondary rounded-circle p-0 m-0 iconfont iconlogin_loginjump_right m-3"
                        id="submit"
                ></button>
            </div>
        </form>
    </div>
</template>

<script>
    import UUID from 'uuid/dist/v1';
    export default {
        name: "ConfigGuide",
        data: function() {
            return {
                configs: {
                    V2rayCorePath: { text: 'V2rayCore路径', type: 'text', value: '' },
                    V2rayLogPath: { text: 'V2ray日志路径', type: 'text', value: '' },
                    V2rayLogLevel: { text: 'V2ray日志等级', type: 'select', items: ['Warning', 'Info', 'Error', 'Debug', 'None'], value: '' },
                    ListenPort: { text: '监听端口', type: 'text', value: '' },
                    Protocol: { text: '协议', type: 'select', items: ['tcp', 'mkcp'], value: '' },
                    UUID: { text: 'UUID', type: 'text', value: '', readonly: true },
                    dataProtocol: { text: '数据协议', type: 'text', value: '' }
                }
            }
        },
        created() {
            this.configs.UUID.value = UUID();
        }
    }
</script>

<style scoped>
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