
<template>
  <Icon :iconName="'truck'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TruckIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'truck'
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
