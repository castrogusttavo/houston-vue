
<template>
  <Icon :iconName="'chemistry-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Chemistry01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'chemistry-01'
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
