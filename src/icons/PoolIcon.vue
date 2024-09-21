
<template>
  <Icon :iconName="'pool'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoolIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pool'
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
