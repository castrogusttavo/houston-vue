
<template>
  <Icon :iconName="'alpha-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AlphaSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'alpha-square'
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
