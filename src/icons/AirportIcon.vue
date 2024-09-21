
<template>
  <Icon :iconName="'airport'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AirportIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'airport'
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
