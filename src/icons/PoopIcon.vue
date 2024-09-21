
<template>
  <Icon :iconName="'poop'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PoopIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'poop'
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
