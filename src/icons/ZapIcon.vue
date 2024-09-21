
<template>
  <Icon :iconName="'zap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zap'
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
