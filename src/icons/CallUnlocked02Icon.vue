
<template>
  <Icon :iconName="'call-unlocked-02'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CallUnlocked02Icon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'call-unlocked-02'
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
