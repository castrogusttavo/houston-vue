
<template>
  <Icon :iconName="'apple-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Apple01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'apple-01'
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
