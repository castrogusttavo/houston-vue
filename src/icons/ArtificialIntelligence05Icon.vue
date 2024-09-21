
<template>
  <Icon :iconName="'artificial-intelligence-05'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtificialIntelligence05Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artificial-intelligence-05'
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
