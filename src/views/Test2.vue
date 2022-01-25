<template>
    <div>
        <h1>{{EventBus.count}}</h1>
        <h1 v-if="show">{{EventBus.msg}}</h1>
    </div>
</template>

<script>
import EventBus from '../eventBus';

export default {
    props: {
        show: Boolean
    },
    created() {
        EventBus.$on('event', function(){
            this.count++;
        });
    },
    computed: {
        EventBus() {
            return EventBus.$data
        }
    }
}
</script>

<style lang="css" scoped>
</style>