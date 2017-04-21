<script>

export default {
    data() {
        return {userName: '张三'};
    },
    created() {
        this.$store.dispatch('initUserInfo');
    }
};

</script>
<template>
    <div>
        <p>{{userName}}</p>
    </div>
</template>
<style lang="less" scoped>
</style>
