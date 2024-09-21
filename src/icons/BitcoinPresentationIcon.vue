
<template>
  <Icon :iconName="'bitcoin-presentation'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinPresentationIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-presentation'
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
