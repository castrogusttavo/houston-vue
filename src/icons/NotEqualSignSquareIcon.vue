
<template>
  <Icon :iconName="'not-equal-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotEqualSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'not-equal-sign-square'
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
