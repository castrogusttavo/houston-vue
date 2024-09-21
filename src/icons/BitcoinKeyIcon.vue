
<template>
  <Icon :iconName="'bitcoin-key'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinKeyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-key'
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
