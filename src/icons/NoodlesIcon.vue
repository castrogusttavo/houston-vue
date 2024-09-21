
<template>
  <Icon :iconName="'noodles'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NoodlesIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'noodles'
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
