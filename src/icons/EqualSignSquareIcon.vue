
<template>
  <Icon :iconName="'equal-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EqualSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equal-sign-square'
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
