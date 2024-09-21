
<template>
  <Icon :iconName="'node-edit'" v-bind="props" />
</template>

<script>
import Icon from '../Icon.vue';

export default {
  name: 'NodeEditIcon',
  components: { Icon },
  props: {
    iconName: {
      type: String,
      default: 'node-edit'
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
