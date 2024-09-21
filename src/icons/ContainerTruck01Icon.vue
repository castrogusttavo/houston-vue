
<template>
  <Icon :iconName="'container-truck-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ContainerTruck01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'container-truck-01'
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
