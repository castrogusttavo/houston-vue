
<template>
  <Icon :iconName="'magnet-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Magnet01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'magnet-01'
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
