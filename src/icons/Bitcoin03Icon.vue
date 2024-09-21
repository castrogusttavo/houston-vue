
<template>
  <Icon :iconName="'bitcoin-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Bitcoin03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bitcoin-03'
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
