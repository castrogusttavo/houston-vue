
<template>
  <Icon :iconName="'blockchain-07'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Blockchain07Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blockchain-07'
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
