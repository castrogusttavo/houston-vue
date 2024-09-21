
<template>
  <Icon :iconName="'wifi-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'WifiSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'wifi-square'
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
