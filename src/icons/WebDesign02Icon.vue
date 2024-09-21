
<template>
  <Icon :iconName="'web-design-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WebDesign02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'web-design-02'
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
