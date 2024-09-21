
<template>
  <Icon :iconName="'global-refresh'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GlobalRefreshIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'global-refresh'
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
