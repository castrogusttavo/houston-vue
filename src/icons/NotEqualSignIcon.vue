
<template>
  <Icon :iconName="'not-equal-sign'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NotEqualSignIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'not-equal-sign'
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
