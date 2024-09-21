
<template>
  <Icon :iconName="'monas'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'MonasIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'monas'
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
