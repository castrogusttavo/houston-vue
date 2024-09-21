
<template>
  <Icon :iconName="'aids'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'AidsIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'aids'
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
