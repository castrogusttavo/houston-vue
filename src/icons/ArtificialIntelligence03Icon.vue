
<template>
  <Icon :iconName="'artificial-intelligence-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtificialIntelligence03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artificial-intelligence-03'
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
