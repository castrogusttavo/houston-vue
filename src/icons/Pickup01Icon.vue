
<template>
  <Icon :iconName="'pickup-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pickup01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pickup-01'
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
