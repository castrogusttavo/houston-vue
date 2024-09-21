
<template>
  <Icon :iconName="'image-remove-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ImageRemove02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'image-remove-02'
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
