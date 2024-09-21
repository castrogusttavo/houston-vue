
<template>
  <Icon :iconName="'infinity-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'InfinityCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'infinity-circle'
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
