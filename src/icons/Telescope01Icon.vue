
<template>
  <Icon :iconName="'telescope-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Telescope01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'telescope-01'
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
