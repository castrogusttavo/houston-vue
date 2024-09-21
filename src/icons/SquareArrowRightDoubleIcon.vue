
<template>
  <Icon :iconName="'square-arrow-right-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowRightDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-right-double'
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
