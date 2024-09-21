
<template>
  <Icon :iconName="'focus-point'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'FocusPointIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'focus-point'
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
