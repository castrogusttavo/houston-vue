
<template>
  <Icon :iconName="'estimate-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Estimate01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'estimate-01'
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
