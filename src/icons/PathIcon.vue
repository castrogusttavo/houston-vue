
<template>
  <Icon :iconName="'path'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'PathIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'path'
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
