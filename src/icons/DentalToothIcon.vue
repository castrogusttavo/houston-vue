
<template>
  <Icon :iconName="'dental-tooth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DentalToothIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dental-tooth'
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
