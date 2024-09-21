
<template>
  <Icon :iconName="'equipment-gym-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentGym01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-gym-01'
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
