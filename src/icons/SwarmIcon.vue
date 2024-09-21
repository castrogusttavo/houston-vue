
<template>
  <Icon :iconName="'swarm'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SwarmIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'swarm'
    },
    ...Icon.props
  },
  computed: {
    props() {
      return { ...this.$props };
    }
  }
};
</script>
