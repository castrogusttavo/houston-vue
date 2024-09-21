
<template>
  <Icon :iconName="'radio-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Radio01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'radio-01'
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
