
<template>
  <Icon :iconName="'arrow-up-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowUp01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-up-01'
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
