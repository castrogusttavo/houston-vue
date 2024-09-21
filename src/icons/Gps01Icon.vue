
<template>
  <Icon :iconName="'gps-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Gps01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gps-01'
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
