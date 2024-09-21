
<template>
  <Icon :iconName="'electric-wire'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ElectricWireIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'electric-wire'
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
