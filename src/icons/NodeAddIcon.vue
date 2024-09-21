
<template>
  <Icon :iconName="'node-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NodeAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'node-add'
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
