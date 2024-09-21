
<template>
  <Icon :iconName="'alpha-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphaCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alpha-circle'
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
