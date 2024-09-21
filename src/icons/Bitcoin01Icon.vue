
<template>
  <Icon :iconName="'bitcoin-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bitcoin01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-01'
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
