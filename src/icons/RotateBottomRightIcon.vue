
<template>
  <Icon :iconName="'rotate-bottom-right'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RotateBottomRightIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'rotate-bottom-right'
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
