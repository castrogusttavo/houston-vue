
<template>
  <Icon :iconName="'gameboy'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GameboyIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'gameboy'
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
