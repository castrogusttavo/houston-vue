
<template>
  <Icon :iconName="'container-truck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ContainerTruckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'container-truck'
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
