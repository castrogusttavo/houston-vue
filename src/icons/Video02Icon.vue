
<template>
  <Icon :iconName="'video-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Video02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'video-02'
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
