
<template>
  <Icon :iconName="'node-remove'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NodeRemoveIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'node-remove'
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
