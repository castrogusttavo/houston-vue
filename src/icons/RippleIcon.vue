
<template>
  <Icon :iconName="'ripple'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RippleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ripple'
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
