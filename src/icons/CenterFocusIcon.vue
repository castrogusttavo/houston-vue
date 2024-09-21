
<template>
  <Icon :iconName="'center-focus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CenterFocusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'center-focus'
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
