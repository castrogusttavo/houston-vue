
<template>
  <Icon :iconName="'image-done-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageDone02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-done-02'
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
