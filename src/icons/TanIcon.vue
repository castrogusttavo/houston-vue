
<template>
  <Icon :iconName="'tan'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'TanIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'tan'
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
