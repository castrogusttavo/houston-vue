
<template>
  <Icon :iconName="'artificial-intelligence-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtificialIntelligence02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artificial-intelligence-02'
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
