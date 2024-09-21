
<template>
  <Icon :iconName="'file-minus'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FileMinusIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'file-minus'
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
