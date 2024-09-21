
<template>
  <Icon :iconName="'ear-rings-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EarRings02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ear-rings-02'
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
