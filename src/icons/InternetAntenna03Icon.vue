
<template>
  <Icon :iconName="'internet-antenna-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InternetAntenna03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'internet-antenna-03'
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
