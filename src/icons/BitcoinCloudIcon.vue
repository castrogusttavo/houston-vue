
<template>
  <Icon :iconName="'bitcoin-cloud'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinCloudIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-cloud'
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
