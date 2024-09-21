
<template>
  <Icon :iconName="'image-not-found-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageNotFound02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-not-found-02'
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
