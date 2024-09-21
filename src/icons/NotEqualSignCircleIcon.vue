
<template>
  <Icon :iconName="'not-equal-sign-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotEqualSignCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'not-equal-sign-circle'
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
