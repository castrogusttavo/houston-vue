
<template>
  <Icon :iconName="'square-arrow-up-left'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareArrowUpLeftIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-arrow-up-left'
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
