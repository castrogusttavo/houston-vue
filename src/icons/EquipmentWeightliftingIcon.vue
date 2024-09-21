
<template>
  <Icon :iconName="'equipment-weightlifting'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentWeightliftingIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-weightlifting'
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
