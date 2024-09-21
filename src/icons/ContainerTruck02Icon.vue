
<template>
  <Icon :iconName="'container-truck-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ContainerTruck02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'container-truck-02'
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
