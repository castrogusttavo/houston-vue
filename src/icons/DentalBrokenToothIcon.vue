
<template>
  <Icon :iconName="'dental-broken-tooth'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DentalBrokenToothIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dental-broken-tooth'
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
