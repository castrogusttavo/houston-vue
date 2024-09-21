
<template>
  <Icon :iconName="'grid-view'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GridViewIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grid-view'
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
