
<template>
  <Icon :iconName="'square-arrow-left-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowLeftDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-left-double'
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
