
<template>
  <Icon :iconName="'augmented-reality-ar'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AugmentedRealityArIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'augmented-reality-ar'
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
