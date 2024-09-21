
<template>
  <Icon :iconName="'power-socket-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PowerSocket02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'power-socket-02'
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
