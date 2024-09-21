
<template>
  <Icon :iconName="'purse-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Purse01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'purse-01'
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
