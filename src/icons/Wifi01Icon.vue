
<template>
  <Icon :iconName="'wifi-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Wifi01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-01'
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
