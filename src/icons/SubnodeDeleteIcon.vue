
<template>
  <Icon :iconName="'subnode-delete'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubnodeDeleteIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'subnode-delete'
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
