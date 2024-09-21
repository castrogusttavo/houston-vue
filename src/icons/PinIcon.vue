
<template>
  <Icon :iconName="'pin'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PinIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'pin'
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
