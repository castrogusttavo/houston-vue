
<template>
  <Icon :iconName="'zoom-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ZoomSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'zoom-square'
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
