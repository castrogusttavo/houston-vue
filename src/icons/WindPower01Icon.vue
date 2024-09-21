
<template>
  <Icon :iconName="'wind-power-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WindPower01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wind-power-01'
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
