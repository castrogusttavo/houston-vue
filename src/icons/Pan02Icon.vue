
<template>
  <Icon :iconName="'pan-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pan02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pan-02'
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
