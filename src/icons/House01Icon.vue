
<template>
  <Icon :iconName="'house-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'House01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'house-01'
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
