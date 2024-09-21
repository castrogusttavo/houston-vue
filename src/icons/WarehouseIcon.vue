
<template>
  <Icon :iconName="'warehouse'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WarehouseIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'warehouse'
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
