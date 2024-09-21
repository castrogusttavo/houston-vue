
<template>
  <Icon :iconName="'image-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Image02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-02'
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
