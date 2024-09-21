
<template>
  <Icon :iconName="'arrow-turn-up'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowTurnUpIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-turn-up'
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
