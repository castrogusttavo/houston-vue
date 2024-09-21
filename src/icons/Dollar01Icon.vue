
<template>
  <Icon :iconName="'dollar-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Dollar01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-01'
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
