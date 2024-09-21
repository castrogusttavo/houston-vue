
<template>
  <Icon :iconName="'temperature'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TemperatureIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'temperature'
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
