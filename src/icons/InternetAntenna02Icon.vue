
<template>
  <Icon :iconName="'internet-antenna-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InternetAntenna02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'internet-antenna-02'
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
