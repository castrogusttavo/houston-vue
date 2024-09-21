
<template>
  <Icon :iconName="'centralized'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'CentralizedIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'centralized'
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
