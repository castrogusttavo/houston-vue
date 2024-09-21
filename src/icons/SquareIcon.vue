
<template>
  <Icon :iconName="'square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square'
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
