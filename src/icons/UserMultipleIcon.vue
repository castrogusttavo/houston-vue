
<template>
  <Icon :iconName="'user-multiple'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserMultipleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-multiple'
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
