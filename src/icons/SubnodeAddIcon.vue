
<template>
  <Icon :iconName="'subnode-add'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'SubnodeAddIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'subnode-add'
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
