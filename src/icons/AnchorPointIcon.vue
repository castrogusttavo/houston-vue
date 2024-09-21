
<template>
  <Icon :iconName="'anchor-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AnchorPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'anchor-point'
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
