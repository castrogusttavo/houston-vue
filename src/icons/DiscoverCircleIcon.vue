
<template>
  <Icon :iconName="'discover-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'DiscoverCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'discover-circle'
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
