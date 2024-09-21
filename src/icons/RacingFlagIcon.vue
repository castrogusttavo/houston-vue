
<template>
  <Icon :iconName="'racing-flag'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'RacingFlagIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'racing-flag'
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
