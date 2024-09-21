
<template>
  <Icon :iconName="'internet-antenna-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InternetAntenna01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'internet-antenna-01'
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
