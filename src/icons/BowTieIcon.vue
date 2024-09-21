
<template>
  <Icon :iconName="'bow-tie'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BowTieIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'bow-tie'
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
