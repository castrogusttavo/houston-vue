
<template>
  <Icon :iconName="'text-wrap'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TextWrapIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'text-wrap'
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
