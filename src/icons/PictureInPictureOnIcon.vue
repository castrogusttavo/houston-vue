
<template>
  <Icon :iconName="'picture-in-picture-on'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PictureInPictureOnIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'picture-in-picture-on'
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
