
<template>
  <Icon :iconName="'discover-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiscoverSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discover-square'
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
