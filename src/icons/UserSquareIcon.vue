
<template>
  <Icon :iconName="'user-square'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'UserSquareIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'user-square'
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
