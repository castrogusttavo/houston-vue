
<template>
  <Icon :iconName="'n-th-root-circle'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NThRootCircleIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'n-th-root-circle'
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
