
<template>
  <Icon :iconName="'burning-cd'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'BurningCdIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'burning-cd'
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
