
<template>
  <Icon :iconName="'pool-table'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoolTableIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pool-table'
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
