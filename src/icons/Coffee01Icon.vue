
<template>
  <Icon :iconName="'coffee-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Coffee01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coffee-01'
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
