
<template>
  <Icon :iconName="'minimize-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Minimize02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'minimize-02'
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
