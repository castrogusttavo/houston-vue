
<template>
  <Icon :iconName="'divide-sign-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DivideSignSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'divide-sign-square'
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
