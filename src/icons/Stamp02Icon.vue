
<template>
  <Icon :iconName="'stamp-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Stamp02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stamp-02'
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
