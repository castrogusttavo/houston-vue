
<template>
  <Icon :iconName="'blockchain-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Blockchain05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blockchain-05'
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
