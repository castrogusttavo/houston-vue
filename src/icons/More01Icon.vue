
<template>
  <Icon :iconName="'more-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'More01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'more-01'
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
