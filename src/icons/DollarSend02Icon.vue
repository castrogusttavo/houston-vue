
<template>
  <Icon :iconName="'dollar-send-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DollarSend02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dollar-send-02'
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
