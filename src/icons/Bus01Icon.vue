
<template>
  <Icon :iconName="'bus-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bus01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bus-01'
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
