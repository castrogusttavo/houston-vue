
<template>
  <Icon :iconName="'victory-finger-01'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VictoryFinger01Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'victory-finger-01'
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
