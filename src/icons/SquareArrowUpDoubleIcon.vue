
<template>
  <Icon :iconName="'square-arrow-up-double'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowUpDoubleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-up-double'
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
