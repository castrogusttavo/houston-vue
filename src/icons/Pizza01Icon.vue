
<template>
  <Icon :iconName="'pizza-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Pizza01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pizza-01'
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
