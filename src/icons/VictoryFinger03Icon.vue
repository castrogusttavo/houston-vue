
<template>
  <Icon :iconName="'victory-finger-03'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'VictoryFinger03Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'victory-finger-03'
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
