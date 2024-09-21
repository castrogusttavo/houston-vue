
<template>
  <Icon :iconName="'code'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CodeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'code'
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
