
<template>
  <Icon :iconName="'circle-arrow-left-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CircleArrowLeft02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'circle-arrow-left-02'
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
