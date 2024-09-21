
<template>
  <Icon :iconName="'wireless'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WirelessIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wireless'
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
