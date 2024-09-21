
<template>
  <Icon :iconName="'stationery'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'StationeryIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'stationery'
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
