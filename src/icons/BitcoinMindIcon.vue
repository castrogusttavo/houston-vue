
<template>
  <Icon :iconName="'bitcoin-mind'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BitcoinMindIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-mind'
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
