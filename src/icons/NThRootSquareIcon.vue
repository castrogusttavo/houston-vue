
<template>
  <Icon :iconName="'n-th-root-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NThRootSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'n-th-root-square'
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
