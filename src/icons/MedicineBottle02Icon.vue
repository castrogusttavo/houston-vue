
<template>
  <Icon :iconName="'medicine-bottle-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedicineBottle02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medicine-bottle-02'
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
