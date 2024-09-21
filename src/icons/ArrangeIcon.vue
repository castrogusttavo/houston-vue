
<template>
  <Icon :iconName="'arrange'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'ArrangeIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'arrange'
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
