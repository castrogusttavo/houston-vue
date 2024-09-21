
<template>
  <Icon :iconName="'rotate-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-square'
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
