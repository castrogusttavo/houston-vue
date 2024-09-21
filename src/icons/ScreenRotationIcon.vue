
<template>
  <Icon :iconName="'screen-rotation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScreenRotationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'screen-rotation'
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
