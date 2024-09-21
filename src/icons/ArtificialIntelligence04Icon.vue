
<template>
  <Icon :iconName="'artificial-intelligence-04'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArtificialIntelligence04Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'artificial-intelligence-04'
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
