
<template>
  <Icon :iconName="'screen-lock-rotation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ScreenLockRotationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'screen-lock-rotation'
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
