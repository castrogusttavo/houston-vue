
<template>
  <Icon :iconName="'money-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Money01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-01'
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
