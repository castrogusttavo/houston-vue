
<template>
  <Icon :iconName="'equipment-gym-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'EquipmentGym02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'equipment-gym-02'
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
