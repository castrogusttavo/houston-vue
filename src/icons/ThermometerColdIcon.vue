
<template>
  <Icon :iconName="'thermometer-cold'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThermometerColdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thermometer-cold'
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
