
<template>
  <Icon :iconName="'coming-soon-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ComingSoon01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'coming-soon-01'
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
