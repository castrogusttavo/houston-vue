
<template>
  <Icon :iconName="'arrow-right-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowRight02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-right-02'
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
