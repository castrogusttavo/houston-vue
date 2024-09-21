
<template>
  <Icon :iconName="'dollar-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-square'
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
