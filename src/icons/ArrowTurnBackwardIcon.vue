
<template>
  <Icon :iconName="'arrow-turn-backward'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowTurnBackwardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-turn-backward'
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
