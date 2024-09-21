
<template>
  <Icon :iconName="'garbage-truck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GarbageTruckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'garbage-truck'
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
