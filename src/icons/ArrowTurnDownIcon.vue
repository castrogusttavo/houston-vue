
<template>
  <Icon :iconName="'arrow-turn-down'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrowTurnDownIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrow-turn-down'
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
