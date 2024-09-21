
<template>
  <Icon :iconName="'grinning'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GrinningIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'grinning'
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
