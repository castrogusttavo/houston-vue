
<template>
  <Icon :iconName="'waving-hand-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WavingHand02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'waving-hand-02'
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
