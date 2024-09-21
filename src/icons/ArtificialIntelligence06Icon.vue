
<template>
  <Icon :iconName="'artificial-intelligence-06'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtificialIntelligence06Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artificial-intelligence-06'
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
