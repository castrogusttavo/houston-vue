
<template>
  <Icon :iconName="'money-send-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MoneySend02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'money-send-02'
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
