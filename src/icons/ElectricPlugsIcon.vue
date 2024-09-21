
<template>
  <Icon :iconName="'electric-plugs'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ElectricPlugsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'electric-plugs'
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
