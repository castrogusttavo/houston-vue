
<template>
  <Icon :iconName="'tablet-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Tablet01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tablet-01'
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
