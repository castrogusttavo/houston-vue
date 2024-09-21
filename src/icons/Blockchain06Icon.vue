
<template>
  <Icon :iconName="'blockchain-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'Blockchain06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'blockchain-06'
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
