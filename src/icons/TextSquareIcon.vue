
<template>
  <Icon :iconName="'text-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-square'
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
