
<template>
  <Icon :iconName="'bedug-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bedug01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bedug-01'
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
