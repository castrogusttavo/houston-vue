
<template>
  <Icon :iconName="'arrow-turn-forward'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowTurnForwardIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-turn-forward'
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
