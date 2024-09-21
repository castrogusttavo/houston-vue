
<template>
  <Icon :iconName="'dice'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiceIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'dice'
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
