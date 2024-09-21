
<template>
  <Icon :iconName="'image-add-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageAdd02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-add-02'
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
