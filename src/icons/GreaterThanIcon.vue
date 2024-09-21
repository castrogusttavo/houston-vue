
<template>
  <Icon :iconName="'greater-than'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'GreaterThanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'greater-than'
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
