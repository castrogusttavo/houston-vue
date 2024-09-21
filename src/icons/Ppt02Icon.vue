
<template>
  <Icon :iconName="'ppt-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Ppt02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'ppt-02'
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
