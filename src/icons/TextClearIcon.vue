
<template>
  <Icon :iconName="'text-clear'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextClearIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-clear'
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
