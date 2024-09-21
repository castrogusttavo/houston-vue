
<template>
  <Icon :iconName="'square-arrow-down-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowDownDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-down-double'
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
