
<template>
  <Icon :iconName="'thermometer'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ThermometerIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'thermometer'
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
