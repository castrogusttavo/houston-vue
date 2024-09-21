
<template>
  <Icon :iconName="'orbit-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Orbit02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'orbit-02'
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
