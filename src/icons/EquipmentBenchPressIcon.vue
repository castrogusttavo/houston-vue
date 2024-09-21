
<template>
  <Icon :iconName="'equipment-bench-press'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentBenchPressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-bench-press'
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
