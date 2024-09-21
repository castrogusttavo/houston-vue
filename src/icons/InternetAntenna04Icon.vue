
<template>
  <Icon :iconName="'internet-antenna-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InternetAntenna04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'internet-antenna-04'
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
