
<template>
  <Icon :iconName="'vine-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VineSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'vine-square'
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
