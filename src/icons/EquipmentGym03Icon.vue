
<template>
  <Icon :iconName="'equipment-gym-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentGym03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-gym-03'
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
