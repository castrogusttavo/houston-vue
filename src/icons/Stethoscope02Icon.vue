
<template>
  <Icon :iconName="'stethoscope-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Stethoscope02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stethoscope-02'
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
