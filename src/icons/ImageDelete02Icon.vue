
<template>
  <Icon :iconName="'image-delete-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageDelete02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-delete-02'
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
