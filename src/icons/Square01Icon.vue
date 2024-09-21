
<template>
  <Icon :iconName="'square-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Square01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'square-01'
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
