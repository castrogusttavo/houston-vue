
<template>
  <Icon :iconName="'pound-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoundSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pound-square'
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
