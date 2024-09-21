
<template>
  <Icon :iconName="'picture-in-picture-exit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PictureInPictureExitIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'picture-in-picture-exit'
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
