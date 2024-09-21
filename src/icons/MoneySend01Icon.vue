
<template>
  <Icon :iconName="'money-send-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySend01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-send-01'
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
