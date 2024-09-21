
<template>
  <Icon :iconName="'equipment-chest-press'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentChestPressIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-chest-press'
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
