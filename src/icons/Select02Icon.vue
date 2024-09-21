
<template>
  <Icon :iconName="'select-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Select02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'select-02'
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
