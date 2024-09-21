
<template>
  <Icon :iconName="'motion-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Motion01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'motion-01'
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
