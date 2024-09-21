
<template>
  <Icon :iconName="'square-arrow-horizontal'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowHorizontalIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-horizontal'
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
