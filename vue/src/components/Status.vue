<template>
    <div id="Status">
        <div
                class="alert"
                :class="StatusCode == 0 ? 'alert-danger' : 'alert-success'"
        >{{ StatusMsg }}</div>
        <div class="form-group">
            <textarea class="form-control" v-model="V2rayLog" rows="14" disabled>
            </textarea>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Status",
        created() {
            var t = this;
            t.$ajax.get('/api/getStatus').then(res => {
                var result = res.data;
                t.StatusCode = result.StatusCode;
                if (result.StatusCode == 0) t.StatusMsg = "已停止";
                else t.StatusMsg = "运行中";
            })
            t.$ajax.get('/api/getLog').then(res => {
                var result = res.data;
                t.V2rayLog = result.V2rayLog;
            })
        },
        data: function() {
            return {
                StatusCode: 0,
                StatusMsg: '正在运行',
                V2rayLog: ''
            }
        }
    }
</script>

<style scoped>

</style>