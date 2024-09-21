
<template>
  <Icon :iconName="'maps-refresh'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MapsRefreshIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'maps-refresh'
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
