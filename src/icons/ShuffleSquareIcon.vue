
<template>
  <Icon :iconName="'shuffle-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ShuffleSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'shuffle-square'
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
