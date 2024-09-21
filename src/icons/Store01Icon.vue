
<template>
  <Icon :iconName="'store-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Store01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'store-01'
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
