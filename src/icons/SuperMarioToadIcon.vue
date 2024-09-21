
<template>
  <Icon :iconName="'super-mario-toad'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SuperMarioToadIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'super-mario-toad'
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
