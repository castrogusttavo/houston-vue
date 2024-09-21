
<template>
  <Icon :iconName="'medicine-bottle-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MedicineBottle01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'medicine-bottle-01'
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
